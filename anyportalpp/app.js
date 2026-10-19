'use strict';
const players=[];
async function main(){
  const [paper,catalog]=await Promise.all(['paper.json','catalog.json?v=20261019-color-selected'].map(async path=>{const r=await fetch(path);if(!r.ok)throw new Error(path);return r.json()}));
  document.querySelector('#abstract').textContent=paper.abstract;
  document.querySelector('#affiliation').textContent=paper.affiliation;
  for(const c of catalog.cases){
    const card=document.querySelector('#case-template').content.firstElementChild.cloneNode(true);
    card.id=c.id;card.querySelector('h3').textContent=c.title;card.querySelector('.case-caption').textContent=c.caption;
    card.querySelector('.case-origin').textContent=c.category||{'background':'Background replacement & relighting','refinement':'Relighting refinement','stylization':'Video stylization','colorization':'Video colorization'}[c.task];
    card.style.setProperty('--ratio',c.size[0]/c.size[1]);
    const keys=c.methods.source?['source','raw','ours']:['raw','ours'];
    const pair=card.querySelector('.video-pair'),panel=pair.firstElementChild.cloneNode(true);
    pair.replaceChildren(...keys.map(()=>panel.cloneNode(true)));pair.dataset.count=keys.length;
    const labels={source:c.task==='colorization'?'Grayscale input':'Source',raw:c.methods.source?'Initial result':'Source',ours:'Ours',...c.labels};
    const videos=[...card.querySelectorAll('video')];
    for(const [i,method]of keys.entries()){videos[i].poster=c.methods[method].poster;videos[i].dataset.src=c.methods[method].video;videos[i].setAttribute('aria-label',`${c.title}: ${labels[method]}`);const label=pair.children[i].querySelector('.video-label');label.className=`video-label ${method}-label`;label.textContent=labels[method]}
    if(c.reference){const ref=document.createElement('figure');ref.className='reference';const img=document.createElement('img');img.src=c.reference;img.alt='Reference background';img.loading='lazy';const label=document.createElement('figcaption');label.textContent='Reference';ref.append(img,label);card.querySelector('.card-heading').append(ref)}
    const play=card.querySelector('.play-button'),status=card.querySelector('.play-status'),scrub=card.querySelector('.scrubber'),count=card.querySelector('.frame-count');
    const master=videos[keys.indexOf('raw')],others=videos.filter(v=>v!==master);let playing=false,loaded=false,zoomed=false,raf;
    const duration=c.frames/c.fps;
    function frame(){const n=Math.min(c.frames,Math.floor(master.currentTime*c.fps)+1);count.textContent=`${n} / ${c.frames} frames`;scrub.value=String(master.currentTime/duration*1000)}
    function load(){if(loaded)return;loaded=true;videos.forEach(v=>{v.src=v.dataset.src;v.preload='metadata';v.load()})}
    function pause(){playing=false;videos.forEach(v=>v.pause());play.textContent='▶ Play';play.setAttribute('aria-label','Play paired videos');cancelAnimationFrame(raf)}
    async function start(){load();players.forEach(p=>{if(p.card!==card)p.pause()});status.textContent='Loading synchronized videos…';play.disabled=true;
      try{if(master.ended||master.currentTime>=duration-.02)videos.forEach(v=>v.currentTime=0);others.forEach(v=>v.currentTime=master.currentTime);await Promise.all(videos.map(v=>v.play()));playing=true;play.textContent='Ⅱ Pause';play.setAttribute('aria-label','Pause videos');status.textContent='';tick()}
      catch(e){pause();status.textContent='Video unavailable. Please retry playback.'}finally{play.disabled=false}}
    function tick(){if(!playing)return;others.forEach(v=>{if(!master.seeking&&!v.seeking&&Math.abs(master.currentTime-v.currentTime)>.06)v.currentTime=master.currentTime});frame();raf=requestAnimationFrame(tick)}
    play.onclick=()=>playing?pause():start();
    card.querySelector('.reset-button').onclick=()=>{load();videos.forEach(v=>v.currentTime=0);frame()};
    scrub.oninput=()=>{load();const t=Math.min(Number(scrub.value)/1000*duration,(c.frames-1)/c.fps);videos.forEach(v=>v.currentTime=t);frame()};
    card.querySelector('select').onchange=e=>videos.forEach(v=>v.playbackRate=Number(e.target.value));
    master.addEventListener('timeupdate',frame);master.addEventListener('ended',()=>{pause();videos.forEach(v=>v.currentTime=0);start()});
    videos.forEach(v=>{v.addEventListener('error',()=>{pause();status.textContent='Video connection interrupted. Refresh the page to retry.'})});
    const zoom=card.querySelector('.zoom-button');zoom.hidden=!c.roi;
    zoom.onclick=()=>{zoomed=!zoomed;zoom.setAttribute('aria-pressed',String(zoomed));zoom.textContent=zoomed?'Full frame':'Zoom detail';const [x1,y1,x2,y2]=c.roi;const s=1/Math.max(x2-x1,y2-y1);videos.forEach(v=>v.style.transform=zoomed?`scale(${s}) translate(${(0.5-(x1+x2)/2)*100}%,${(0.5-(y1+y2)/2)*100}%)`:'none')};
    card.querySelector('.expand-button').onclick=async()=>{if(document.fullscreenElement)await document.exitFullscreen();else if(card.requestFullscreen)await card.requestFullscreen()};
    document.querySelector(`#${c.task} .cases`).append(card);frame();players.push({card,pause,load});
  }
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{const p=players.find(p=>p.card===e.target);if(e.isIntersecting)p.load();else p.pause()}),{rootMargin:'120px'});players.forEach(p=>io.observe(p.card));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)players.forEach(p=>p.pause())});
  if(location.hash){document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView()}
}
main().catch(e=>{document.querySelector('#load-error').hidden=false;console.error(e)});
