/* Psychology quiz v5.1.0 — original question/result content with cited research. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.PsychologyQuizContent = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  return {
  "version": "5.1.0",
  "title": "你认为什么是心理学？",
  "subtitle": "关于人，这些话你信几句？",
  "author": "曾姜月",
  "assignment": "心理学导论 · 第一次作业",
  "intro": "12个生活里的问题。按自己的想法选，看看最后会凑成哪一种回答。",
  "instructions": "评价每题中的说法，选择你的认同程度。",
  "scale": [
    {
      "value": 1,
      "label": "很不认同"
    },
    {
      "value": 2,
      "label": "不太认同"
    },
    {
      "value": 3,
      "label": "要看具体情况"
    },
    {
      "value": 4,
      "label": "比较认同"
    },
    {
      "value": 5,
      "label": "很认同"
    }
  ],
  "ui": {
    "start": "开始测试",
    "continue": "继续答题",
    "previous": "上一题",
    "next": "下一题",
    "submit": "看看结果",
    "resultHeading": "你对人的看法",
    "basisHeading": "为什么是这个结果",
    "researchHeading": "这些问题，心理学怎样研究",
    "otherResearchHeading": "看看其他问题",
    "aboutHeading": "我认为什么是心理学",
    "restart": "再测一次",
    "exportImage": "保存结果图",
    "tieHeading": "这次，你的几种看法同样鲜明",
    "secondaryHeading": "你也接近",
    "localSaveNote": "答题进度保存在当前浏览器。",
    "footer": "题目与类型由作者设计，相关研究见文献。"
  },
  "about": [
    "我觉得心理学研究人的行为和心理过程，也研究我们怎样理解这些事情。",
    "生活里，我们常常先有一个说法：性格难改、发泄完就会消气、奖金能让人更有动力、记得很清楚就不容易记错……这些话听起来熟悉，我们有时就不再追问了，但后来才发现别人对同一件事的理解和自己很不一样。这些是否跟心理学有关呢？带着这样的想法，我想到了做这样一个小测试，把自己相信的话放在眼前，也让别人选出他们赞同或不赞同的说法，结果页再介绍相关研究，看看心理学家怎样把这些问题变成可以比较、观察和检验的事情。",
    "对我来说，心理学有意思的地方，是它能把这些习以为常的细节继续追问下去：我们说的“改变”是什么？怎样知道一个人真的更有兴趣？觉得自己记得准，又要用什么来核对？……人在不同条件下的反应，或许可以通过观察和比较来研究。",
    "我希望这个作品既能让人认出自己的看法，也能让人认识这些看法背后的研究。理解人的行为、感受和判断，并把关于它们的解释研究得更清楚——这是我目前心中的心理学。"
  ],
  "aiNote": "本作品使用 ChatGPT 辅助资料查找与整理，使用 Codex 辅助网页编写。",
  "extremeResults": [
    {
      "id": "all-disagree",
      "value": 1,
      "name": "“反驳型人格”",
      "tagline": "先别说了，我不同意。",
      "paragraphs": [
        "你的答卷把十二个说法全挡在门外：性格通常还是原来那样？很不认同。记得清楚就更可信？很不认同。幸福里得有真正的快乐？还是很不认同。",
        "这一轮，熟悉的说法在你这里也没有免检通道。别人想聊个顺口的结论，你可能更想问它在什么条件下成立。至于“你是不是总爱反驳”——这句话，你大概也想反驳一下。"
      ],
      "basis": "这十二题里，你全部选择了“很不认同”。",
      "researchQuestionIds": ["q04", "q07", "q12"]
    },
    {
      "id": "all-agree",
      "value": 5,
      "name": "“墙头草”",
      "tagline": "这也有道理，那也有道理。",
      "paragraphs": [
        "性格的底子难改，第一印象可以先信几分，奖金能让人更喜欢画画，前面花了时间也算继续追剧的理由……这十二个说法，你全都给了“很认同”。",
        "这一轮，你的点头键几乎没有休息，每句话都能接上一句“确实”。把这些点头放到同一张纸上，讨论才刚刚开始：哪些说法只是听起来顺，哪些还要多问一句条件？“墙头草”今天先不选边，十二边都站了一下。"
      ],
      "basis": "这十二题里，你全部选择了“很认同”。",
      "researchQuestionIds": ["q04", "q07", "q12"]
    }
  ],
  "questions": [
    {
      "id": "q01",
      "number": 1,
      "title": "性格会不会变",
      "scene": "",
      "statement": "一个成年人可以学会不同的做事方式，但他的基本性格，通常还是原来那样。"
    },
    {
      "id": "q02",
      "number": 2,
      "title": "先骂个痛快",
      "scene": "有人生气后，会找个没人的地方，把惹自己生气的人骂上一通。",
      "statement": "我觉得这样先发泄一下，通常比先做点别的、暂时不想这件事，更容易消气。"
    },
    {
      "id": "q03",
      "number": 3,
      "title": "合适的人",
      "scene": "",
      "statement": "两个人如果真的合适，相处应该大体自然、轻松。如果总需要磨合，我会怀疑两个人到底合不合适。"
    },
    {
      "id": "q04",
      "number": 4,
      "title": "“我记得特别清楚”",
      "scene": "两个人对一件多年前的事记得不一样。其中一个连当时的场景、说过的话都能讲出来，而且很确定。",
      "statement": "这种清楚又确定的记忆，会让我更相信他记的是对的。"
    },
    {
      "id": "q05",
      "number": 5,
      "title": "把手机交出去，算不算自律",
      "scene": "一个人为了专心写作业，主动把手机交给室友保管。",
      "statement": "我觉得他只是避开了诱惑，还算不上自制力好；手机就在手边也能忍住才算。"
    },
    {
      "id": "q06",
      "number": 6,
      "title": "第一印象不错",
      "scene": "第一次见面，一个人谈吐清楚、对人有礼貌，给你的感觉很好。",
      "statement": "我会顺带觉得，他大概也比较守信用、值得合作。"
    },
    {
      "id": "q07",
      "number": 7,
      "title": "匿名帮忙，图什么",
      "scene": "",
      "statement": "即使一个人匿名帮忙、不求回报，他最终追求的还是自己的满足、安心，或者少一点内疚。"
    },
    {
      "id": "q08",
      "number": 8,
      "title": "喜欢的事，再加点奖金",
      "scene": "一个人原本就喜欢画画。现在，家人决定按他完成的张数给奖金。",
      "statement": "原本就喜欢，再加上奖金，我觉得他通常会更喜欢画画。"
    },
    {
      "id": "q09",
      "number": 9,
      "title": "总得有个说法",
      "scene": "一个朋友慢慢和你疏远了，也没解释为什么。你想了几个原因，都没有办法证实。",
      "statement": "比起一直不知道为什么，我宁愿先接受一个最说得通的解释，让这件事有个结论。"
    },
    {
      "id": "q10",
      "number": 10,
      "title": "都追了这么多集了",
      "scene": "一部剧追了十几集，已经觉得不好看，也不太期待后面的剧情。",
      "statement": "“前面都花了那么多时间，怎么也得看完。”我觉得这是继续追下去的一个理由。"
    },
    {
      "id": "q11",
      "number": 11,
      "title": "别人会记多久",
      "scene": "你在一次普通聚会上不小心叫错了别人的名字，马上改了口。大家继续聊天，没有再提。",
      "statement": "即使大家没表现出来，我还是觉得，不少人第二天想起我时，还会先想到这个口误。"
    },
    {
      "id": "q12",
      "number": 12,
      "title": "有意义，就算幸福吗",
      "scene": "一个人觉得自己做的事很有意义，也不后悔，却长期过得不快乐。",
      "statement": "我不太愿意把这样的生活叫作幸福。对我来说，幸福里得有真正的快乐。"
    }
  ],
  "profiles": [
    {
      "id": "P1",
      "name": "“我先信了”",
      "previousName": "我先信了",
      "targets": {
        "q04": 1,
        "q06": 1,
        "q09": 1
      },
      "requiredIds": [],
      "variants": {
        "q04+q06+q09": {
          "evidenceIds": [
            "q04",
            "q06",
            "q09"
          ],
          "tagline": "先有个印象，也不至于天塌下来。",
          "paragraphs": [
            "回忆讲得清楚，初次见面也客气，事情还有一个说得通的解释——这些线索会让你愿意先信几分。你允许自己先形成看法，不必把所有问题都留在“还不知道”。",
            "把这套看法放进聊天里，大概就是：你说，我先听着。要是认识一个人之前，连个初步印象都不能有，那还怎么认识。"
          ]
        },
        "q04+q06": {
          "evidenceIds": [
            "q04",
            "q06"
          ],
          "tagline": "有个好印象，也挺正常。",
          "paragraphs": [
            "细节记得清楚，会让你更相信一段回忆；初次见面让人舒服，也会让你对以后的合作多一点期待。你愿意让眼前的线索先算数。",
            "刚认识就要求一点印象都没有，未免也太难为人了。"
          ]
        },
        "q04+q09": {
          "evidenceIds": [
            "q04",
            "q09"
          ],
          "tagline": "至少先有个说法。",
          "paragraphs": [
            "回忆讲得清楚，会让你更愿意相信；关系为什么疏远，你也想先接受一个说得通的解释。比起把事情一直悬着，你愿意先形成一个看法。",
            "把聊天框里的“正在输入”留上几个月，多少也该发出一句话了。"
          ]
        },
        "q06+q09": {
          "evidenceIds": [
            "q06",
            "q09"
          ],
          "tagline": "先按目前的印象理解。",
          "paragraphs": [
            "初次见面留下的好印象，可以进入你对合作和信用的预期；关系为什么变淡，你也愿意先找一个说得通的解释。你允许判断从手头的线索开始。",
            "等什么都知道了再认识一个人，那认识这件事得拖到哪天。"
          ]
        }
      }
    },
    {
      "id": "P2",
      "name": "“你先别急”",
      "previousName": "先别下结论",
      "targets": {
        "q04": -1,
        "q06": -1,
        "q09": -1
      },
      "requiredIds": [],
      "variants": {
        "q04+q06+q09": {
          "evidenceIds": [
            "q04",
            "q06",
            "q09"
          ],
          "tagline": "他说得很确定，跟事情很确定，是两回事。",
          "paragraphs": [
            "礼貌先记在礼貌那一项，守不守信用还要另看。回忆说得再清楚，也不会自动变成当年的录像。一个解释听起来顺，你仍愿意给“目前还不知道”留个位置。",
            "别人只是想痛快吃个瓜，你还在问：这个瓜我听懂了，但你们怎么知道的？"
          ]
        },
        "q04+q06": {
          "evidenceIds": [
            "q04",
            "q06"
          ],
          "tagline": "听着挺像，先别算实锤。",
          "paragraphs": [
            "回忆清楚，谈吐也好，这些都还不太足以让你把其他结论一起收下。记忆有没有对上当年的事，礼貌能不能带来可靠的合作，你会分别来看。",
            "别人已经开始转发“实锤”，你还停在“锤在哪儿”。"
          ]
        },
        "q04+q09": {
          "evidenceIds": [
            "q04",
            "q09"
          ],
          "tagline": "不知道，也可以先放着。",
          "paragraphs": [
            "回忆讲得笃定，还不太够让你直接相信；关系为什么变淡，你也不急着拿一个顺口的解释填上。你给事情暂时没有答案留了位置。",
            "聊天需要一个结尾，事情未必已经有了结论。"
          ]
        },
        "q06+q09": {
          "evidenceIds": [
            "q06",
            "q09"
          ],
          "tagline": "认识他，和了解他，慢慢来。",
          "paragraphs": [
            "礼貌和谈吐先算这次见面的印象，守不守信用还要另看。关系变淡的原因没有证实，你也愿意先留空。",
            "大家都在等一个痛快的说法，你还觉得：目前也就知道这些。"
          ]
        }
      }
    },
    {
      "id": "P3",
      "name": "“你是个好人，但是...”",
      "previousName": "人总得图点什么",
      "targets": {
        "q07": 1,
        "q08": 1,
        "q12": 1
      },
      "requiredIds": [
        "q07"
      ],
      "variants": {
        "q07+q08+q12": {
          "evidenceIds": [
            "q07",
            "q08",
            "q12"
          ],
          "tagline": "不收钱我信，什么都不图，我再想想。",
          "paragraphs": [
            "在你的解释里，“没有回报”这四个字值得再问问。钱没拿到，安心、满足、少一点愧疚，也都可能是人愿意做一件事的原因。",
            "谈到画画，你觉得喜欢和奖金可以加在一起；谈到幸福，你又会问当事人究竟高不高兴。那些听上去很高远的说法，你习惯把它们落回一个具体问题：那他自己得到了什么？"
          ]
        },
        "q07+q08": {
          "evidenceIds": [
            "q07",
            "q08"
          ],
          "tagline": "喜欢归喜欢，有回报也挺好。",
          "paragraphs": [
            "匿名帮忙也可能给自己带来安心和满足；本来喜欢画画，再加上奖金，你觉得兴趣还可能更足。理解这些事时，你会把当事人得到的东西认真算进去。",
            "“我什么都不图。”你听完，脑子里还有半句：安心也算啊。"
          ]
        },
        "q07+q12": {
          "evidenceIds": [
            "q07",
            "q12"
          ],
          "tagline": "好人也得有自己的感受。",
          "paragraphs": [
            "你更愿意从满足、安心和少一点内疚来理解帮助的最终目的。谈到幸福，你也希望当事人有真正的快乐。",
            "外面的评价再高，最后还是得问一句：他自己究竟得到了什么，又过得开不开心？"
          ]
        }
      }
    },
    {
      "id": "P4",
      "name": "“你是个好人”",
      "previousName": "别什么都算回报",
      "targets": {
        "q07": -1,
        "q08": -1,
        "q12": -1
      },
      "requiredIds": [
        "q07"
      ],
      "variants": {
        "q07+q08+q12": {
          "evidenceIds": [
            "q07",
            "q08",
            "q12"
          ],
          "tagline": "帮个忙，也不一定非得给自己算出一笔收益。",
          "paragraphs": [
            "你没有把帮助一律归到帮助者的满足，也没有默认奖金能让人更喜欢本来喜欢的事。谈到幸福时，你也愿意给有意义却不快乐的生活留一点位置。",
            "人做一件事的理由，可以比“他最后赚到了什么、舒服了多少”更丰富。别人帮个忙，还得证明自己一点都没高兴，才能算真心——这要求也太难交差了。"
          ]
        },
        "q07+q08": {
          "evidenceIds": [
            "q07",
            "q08"
          ],
          "tagline": "别急着把一切都算成回报。",
          "paragraphs": [
            "你不把帮助一律解释成帮助者自己的满足，也不默认奖金会让人更喜欢原本喜欢的事。理解帮助和热爱时，你想保留回报之外的理由。",
            "画画先问一张多少钱，帮忙先问他图什么。照这个问法聊下去，气氛多少有点像谈生意。"
          ]
        },
        "q07+q12": {
          "evidenceIds": [
            "q07",
            "q12"
          ],
          "tagline": "总有些理由，没法只用舒服不舒服来讲。",
          "paragraphs": [
            "帮助可以有让对方好起来的出发点；有意义却不快乐的生活，你也没有完全排除把它叫作幸福。",
            "你愿意给这些理由留个位置。人家做件事，还得先把自己的收益说明白，这个说明书未免太长了。"
          ]
        }
      }
    },
    {
      "id": "P5",
      "name": "“别绷了”",
      "previousName": "没必要硬撑",
      "targets": {
        "q05": -1,
        "q10": -1,
        "q12": 1
      },
      "requiredIds": [],
      "variants": {
        "q05+q10+q12": {
          "evidenceIds": [
            "q05",
            "q10",
            "q12"
          ],
          "tagline": "烂剧看了十集，再看十集，前十集就好看了吗？",
          "paragraphs": [
            "手机非得留在手边，才算真自律？这是在写作业，还是参加意志力比赛？剧已经不好看了，还要给前面花掉的时间再搭进去几集；生活长期不快乐，又得因为“有意义”把它叫作幸福。",
            "在这几件事上，你不太愿意增加这样的证明任务。没有必要把每件事都变成一场硬撑到底的考试。"
          ]
        },
        "q05+q10": {
          "evidenceIds": [
            "q05",
            "q10"
          ],
          "tagline": "有些考验，真的可以不参加。",
          "paragraphs": [
            "手机可以先离开桌面，烂剧也可以停在这一集。你不把当场忍住当作自律的必要标准，也不愿只因为已经花了时间，就再往里面搭时间。",
            "作业又不考“手机放旁边也没看”，追剧也没有全勤奖。"
          ]
        },
        "q05+q12": {
          "evidenceIds": [
            "q05",
            "q12"
          ],
          "tagline": "活着已经够忙了，少加两道证明题。",
          "paragraphs": [
            "你不要求手机就在手边还能忍住，才承认一个人的自律。谈到幸福，你也希望生活里有真实的快乐。",
            "题已经够多了，实在没必要再加“必须正面抵抗诱惑”和“长期不开心也得算幸福”这两道。"
          ]
        },
        "q10+q12": {
          "evidenceIds": [
            "q10",
            "q12"
          ],
          "tagline": "后面的时间，也挺值钱。",
          "paragraphs": [
            "不好看的剧，过去的投入还不足以让你继续看下去；有意义的生活，长期没有快乐也让你不愿把它叫作幸福。",
            "你会认真问剩下的时间要怎样过。前十集已经没意思了，后十集也没义务陪着。"
          ]
        }
      }
    },
    {
      "id": "P6",
      "name": "“来都来了”",
      "previousName": "来都来了",
      "targets": {
        "q05": 1,
        "q10": 1,
        "q12": -1
      },
      "requiredIds": [
        "q10"
      ],
      "variants": {
        "q05+q10+q12": {
          "evidenceIds": [
            "q05",
            "q10",
            "q12"
          ],
          "tagline": "别人说“算了”，你觉得理由还没用完。",
          "paragraphs": [
            "你会给“当场能忍住”“前面已经投入过”和“这件事仍然有意义”留出分量。事情不好受，未必已经足够让你在判断上把它划掉。",
            "按照你在这几题里的标准，手机离开桌面之前，还得先解释这算不算自控；一部不好看的剧，也可能凭前十集获得继续播放的机会。"
          ]
        },
        "q05+q10": {
          "evidenceIds": [
            "q05",
            "q10"
          ],
          "tagline": "先别撤，前面都做到这儿了。",
          "paragraphs": [
            "手机就在手边也能忍住，是你更认可的自制力；追了一半的剧，已经付出的时间也能成为继续的理由。",
            "要结束一场考验，多少还得给你一点交代。连一部烂剧，都能拿前十集来申请续播。"
          ]
        },
        "q10+q12": {
          "evidenceIds": [
            "q10",
            "q12"
          ],
          "tagline": "走到这一步，也有它的分量。",
          "paragraphs": [
            "已经花掉的时间，会进入你是否继续追剧的判断。谈到幸福，你也给有意义却不快乐的生活保留了可能。",
            "一句“我现在不开心”，还不太够把这些分量全部划掉。至于那部剧，前十集已经替后十集说上话了。"
          ]
        }
      }
    },
    {
      "id": "P7",
      "name": "“这事还没完”",
      "previousName": "这事还没完",
      "targets": {
        "q02": 1,
        "q09": 1,
        "q11": 1
      },
      "requiredIds": [],
      "variants": {
        "q02+q09+q11": {
          "evidenceIds": [
            "q02",
            "q09",
            "q11"
          ],
          "tagline": "一句“过去了”，能同时解决几件事？",
          "paragraphs": [
            "关系慢慢淡了，原因最好不要一直空着；聚会已经散了，你仍预期那次口误可能留在别人印象里。至于生气，你也更认同先把那口气发出来。",
            "时间倒是走得很快，事情却未必跟着翻篇。一句“算了，过去了”，还不太能把这几个问题同时解决。"
          ]
        },
        "q02+q09": {
          "evidenceIds": [
            "q02",
            "q09"
          ],
          "tagline": "气得消，原因也得有。",
          "paragraphs": [
            "生气时，你更认可先发泄一下再消气；朋友逐渐疏远，你也宁愿先接受一个说得通的解释。",
            "“算了”倒是很好说，可那口气和那个问号，好像都还在。"
          ]
        },
        "q02+q11": {
          "evidenceIds": [
            "q02",
            "q11"
          ],
          "tagline": "散场了，也还有点动静。",
          "paragraphs": [
            "你更认可先发泄一下来消气，也预期聚会上的小口误会在别人印象里多留一阵。",
            "聚会有散场时间，生气和尴尬在你的解释里，可没有这么准时。"
          ]
        },
        "q09+q11": {
          "evidenceIds": [
            "q09",
            "q11"
          ],
          "tagline": "人散了，问号还在。",
          "paragraphs": [
            "朋友为什么疏远，你想先得到一个说得通的解释；聚会虽然结束了，你仍觉得别人可能记着那次口误。",
            "对方已经回家，剧情在你的预期里还没完全结束。"
          ]
        }
      }
    },
    {
      "id": "P8",
      "name": "“狗改不了吃💩”",
      "previousName": "别指望脱胎换骨",
      "targets": {
        "q01": 1,
        "q03": 1,
        "q06": 1
      },
      "requiredIds": [
        "q01"
      ],
      "variants": {
        "q01+q03+q06": {
          "evidenceIds": [
            "q01",
            "q03",
            "q06"
          ],
          "tagline": "“以后会变”，这话你先打个问号。",
          "paragraphs": [
            "性格的底子通常还在，两个人原本合不合适也很重要。初次交往的印象，会进入你对他其他表现的预期。理解一个人，你更愿意先看他已经是什么样。",
            "“等以后他变了就好了。”按这套看法，光是这句话还不太够。相处已经挺忙了，再附送一个改造计划，工作量多少有点超标。"
          ]
        },
        "q01+q03": {
          "evidenceIds": [
            "q01",
            "q03"
          ],
          "tagline": "相处靠磨合，也不能全靠改造吧。",
          "paragraphs": [
            "你更相信性格底子的延续，也把相处是否自然轻松看得很重。两个人合适不合适，不能都押在将来的改变上。",
            "“以后就好了”很好说。你还想知道：这个“以后”，究竟准备靠什么到来？"
          ]
        },
        "q01+q06": {
          "evidenceIds": [
            "q01",
            "q06"
          ],
          "tagline": "先看看原来什么样。",
          "paragraphs": [
            "你更相信成年人的基本性格会延续，也愿意让初次见面的好印象进入对其他表现的预期。已经看见的样子，对你理解一个人很有分量。",
            "人还没认识明白，就先期待一场脱胎换骨，这个预告片你不会直接照单全收。"
          ]
        }
      }
    }
  ],
  "nuances": [
    {
      "id": "N_P2_Q11",
      "profileId": "P2",
      "requires": {
        "q04": -1,
        "q11": 1
      },
      "title": "在自己的尴尬这件事上",
      "text": "别人说自己记得特别清楚，你要打个问号；轮到你叫错名字，你倒是挺相信别人能记到第二天。你对人类记忆的信任，在自己的尴尬这件事上，忽然多了一点。"
    },
    {
      "id": "N_P5_Q11",
      "profileId": "P5",
      "requires": {
        "q05": -1,
        "q10": -1,
        "q11": 1
      },
      "title": "想开了，没全开",
      "text": "手机可以交出去，烂剧可以关掉。唯独那句叫错的名字，你还觉得它会在别人脑子里多留一天。"
    }
  ],
  "knowledge": [
    {
      "id": "k01",
      "questionId": "q01",
      "concept": "人格内隐理论",
      "body": "Chiu、Hong与Dweck在1997年的研究中讨论了人们对人格固定或可变的信念，并研究这些信念与社会判断的联系。这里介绍的是关于人的看法，不是在测参与者本人的性格是否稳定。另一个角度是人格实际怎样变化：Roberts等人在2006年汇总纵向研究，发现一些人格特质的平均水平在成年期仍会变化。",
      "referenceIds": [
        "R1",
        "R13"
      ],
      "answerSummary": {
        "positive": "你更相信成年人的基本性格会延续，后来的变化主要发生在做事方式上。",
        "negative": "你不太接受“做法变了，基本性格通常没变”的概括。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k02",
      "questionId": "q02",
      "concept": "宣泄假说与愤怒中的反刍",
      "body": "Bushman在2002年的实验中，让生气的参与者打沙袋时回想惹怒自己的人，或想着健身，并设置不打沙袋的对照。回想惹怒者的组报告了更强的愤怒，也表现出更强的攻击反应。这项研究检验了“泄愤可以消气”的预期。Kjærvik与Bushman在2024年的元分析中进一步发现，降低唤醒水平的活动整体上有助于减轻愤怒，而提高唤醒水平的活动整体效果不明显。",
      "referenceIds": [
        "R2",
        "R14"
      ],
      "answerSummary": {
        "positive": "你更接受先发泄一番来消气的做法。",
        "negative": "你没有把先发泄一番当作比暂时转移注意更好的消气办法。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k03",
      "questionId": "q03",
      "concept": "关系内隐理论：命定信念与成长信念",
      "body": "Knee在1998年研究了两种关系信念：伴侣是否原本就适合彼此，以及关系是否通过共同投入而发展。两种信念可以分别受到认可，不是一个维度的正反面。",
      "referenceIds": [
        "R3"
      ],
      "answerSummary": {
        "positive": "你会把相处是否自然、轻松，当作判断两个人合不合适的重要线索。",
        "negative": "持续磨合还不太足以让你怀疑两个人是否合适。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k04",
      "questionId": "q04",
      "concept": "记忆的主观确信与一致性",
      "body": "Talarico与Rubin在2003年追踪闪光灯记忆与日常记忆：两类记忆的前后报告都会变化，鲜明事件的记忆却能保持较高确信。这让“觉得清楚”和“报告是否一致”成为可分别比较的问题。Hirst等人在2015年的十年追踪研究中也发现，人们关于如何得知重大事件的回忆可能前后不一致，但对回忆的确信仍然很高。",
      "referenceIds": [
        "R4",
        "R15"
      ],
      "answerSummary": {
        "positive": "你会把回忆的清晰和确信程度，作为相信这段记忆的理由。",
        "negative": "一个人记得清楚、说得确定，还不太足以让你更相信他的版本。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k05",
      "questionId": "q05",
      "concept": "自我控制的情境策略",
      "body": "Duckworth、Gendler与Gross在2016年的论文中，把主动选择、改变情境也纳入自我控制：人在冲动强烈之前安排环境，是这一框架中的一种策略。",
      "referenceIds": [
        "R5"
      ],
      "answerSummary": {
        "positive": "你更愿意把“面对诱惑仍能忍住”当作自制力好的标准。",
        "negative": "你不把“手机就在手边也能忍住”当作自制力好的必要标准。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k06",
      "questionId": "q06",
      "concept": "从行为推断特质",
      "body": "Chiu等人在1997年的研究还涉及人们怎样从行为形成特质判断、预测其他表现。本题以不同的日常材料提出这一问题。",
      "referenceIds": [
        "R1"
      ],
      "answerSummary": {
        "positive": "你会让初次交往中的好印象，进入对可靠性和合作表现的初步预期。",
        "negative": "你不太会仅凭谈吐和礼貌，就把好印象推广到守信用与合作表现。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k07",
      "questionId": "q07",
      "concept": "心理利己主义与利他动机的研究",
      "body": "Batson等人在1981年比较了改善对方处境与减轻自己不适这两类动机解释；Cialdini等人在1987年研究了改善帮助者自身情绪的解释。相关实验尝试让不同动机产生不同预测。",
      "referenceIds": [
        "R6",
        "R7"
      ],
      "answerSummary": {
        "positive": "你更倾向于从帮助者自己的满足、安心或避免内疚来理解帮助的最终目的。",
        "negative": "你不把所有帮助都归结为帮助者最终想得到什么。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k08",
      "questionId": "q08",
      "concept": "外在奖励与内在动机",
      "body": "Deci、Koestner与Ryan在1999年的元分析中考察了外在奖励与内在动机的关系，区分奖励是否预期、以什么为条件，以及怎样衡量兴趣。研究中的某些物质奖励降低了后续自由选择活动，积极反馈则有不同结果。",
      "referenceIds": [
        "R8"
      ],
      "answerSummary": {
        "positive": "你预期额外奖金通常会增强一个人原先已有的兴趣。",
        "negative": "你不把额外奖金看作通常能增强原有兴趣的办法。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k09",
      "questionId": "q09",
      "concept": "认知闭合需要",
      "body": "Webster与Kruglanski在1994年提出并检验认知闭合需要的个体差异测量，涉及对确定性、秩序、可预测性及模糊状态的不同反应。",
      "referenceIds": [
        "R9"
      ],
      "answerSummary": {
        "positive": "原因说不清时，你更想先接受一个说得通的解释，让事情暂时有个结论。",
        "negative": "原因还没有证实时，你不急着接受一个解释来结束疑问。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k10",
      "questionId": "q10",
      "concept": "沉没成本",
      "body": "Arkes与Blumer在1985年的研究中考察了已经投入的金钱、努力或时间怎样增加继续投入的倾向，并讨论避免显得浪费这一解释。",
      "referenceIds": [
        "R10"
      ],
      "answerSummary": {
        "positive": "已经花掉的时间，会成为你继续投入的一个理由。",
        "negative": "你不把已经花掉的时间本身，当作继续追剧的理由。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k11",
      "questionId": "q11",
      "concept": "聚光灯效应",
      "body": "Gilovich、Medvec与Savitsky在2000年的研究中比较参与者估计的他人注意程度与观察者的报告，研究发现了对自身外表和行为受到注意程度的高估。",
      "referenceIds": [
        "R11"
      ],
      "answerSummary": {
        "positive": "在这个场景里，你预期那次口误会继续占据不少人的注意。",
        "negative": "在这个场景里，你不太预期那次口误会成为别人第二天想到你的重点。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    },
    {
      "id": "k12",
      "questionId": "q12",
      "concept": "享乐取向与实现取向的幸福观",
      "body": "Ryan与Deci在2001年综述了幸福研究中的享乐与实现两种传统：前者重视愉快体验，后者重视意义、自我实现与充分发挥功能。",
      "referenceIds": [
        "R12"
      ],
      "answerSummary": {
        "positive": "你认为幸福需要包含实际的快乐；仅有意义，还不足以叫幸福。",
        "negative": "对于有意义却长期不快乐的生活，你仍给“幸福”留了可能。",
        "neutral": "这一题，你选择了“要看具体情况”。"
      }
    }
  ],
  "references": [
    {
      "id": "R1",
      "citation": "Chiu, C., Hong, Y., & Dweck, C. S. (1997). Lay dispositionism and implicit theories of personality. Journal of Personality and Social Psychology, 73(1), 19–30.",
      "year": 1997,
      "url": "https://research.cuhk.edu.hk/en/publications/lay-dispositionism-and-implicit-theories-of-personality-2/"
    },
    {
      "id": "R2",
      "citation": "Bushman, B. J. (2002). Does venting anger feed or extinguish the flame? Catharsis, rumination, distraction, anger, and aggressive responding. Personality and Social Psychology Bulletin, 28(6), 724–731.",
      "year": 2002,
      "url": "https://journals.sagepub.com/doi/10.1177/0146167202289002"
    },
    {
      "id": "R3",
      "citation": "Knee, C. R. (1998). Implicit theories of relationships: Assessment and prediction of romantic relationship initiation, coping, and longevity. Journal of Personality and Social Psychology, 74(2), 360–370.",
      "year": 1998,
      "url": "https://www.researchgate.net/publication/232518767_Implicit_Theories_of_Relationships_Assessment_and_Prediction_of_Romantic_Relationship_Initiation_Coping_and_Longevity"
    },
    {
      "id": "R4",
      "citation": "Talarico, J. M., & Rubin, D. C. (2003). Confidence, not consistency, characterizes flashbulb memories. Psychological Science, 14(5), 455–461.",
      "year": 2003,
      "url": "https://pubmed.ncbi.nlm.nih.gov/12930476/"
    },
    {
      "id": "R5",
      "citation": "Duckworth, A. L., Gendler, T. S., & Gross, J. J. (2016). Situational strategies for self-control. Perspectives on Psychological Science, 11(1), 35–55.",
      "year": 2016,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4736542/"
    },
    {
      "id": "R6",
      "citation": "Batson, C. D., Duncan, B. D., Ackerman, P., Buckley, T., & Birch, K. (1981). Is empathic emotion a source of altruistic motivation? Journal of Personality and Social Psychology, 40(2), 290–302.",
      "year": 1981,
      "url": "https://www.researchgate.net/publication/232551293_Is_empathic_emotion_a_source_of_altruistic_motivation"
    },
    {
      "id": "R7",
      "citation": "Cialdini, R. B., Schaller, M., Houlihan, D., Arps, K., Fultz, J., & Beaman, A. L. (1987). Empathy-based helping: Is it selflessly or selfishly motivated? Journal of Personality and Social Psychology, 52(4), 749–758.",
      "year": 1987,
      "url": "https://pubmed.ncbi.nlm.nih.gov/3572736/"
    },
    {
      "id": "R8",
      "citation": "Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. Psychological Bulletin, 125(6), 627–668.",
      "year": 1999,
      "url": "https://pubmed.ncbi.nlm.nih.gov/10589297/"
    },
    {
      "id": "R9",
      "citation": "Webster, D. M., & Kruglanski, A. W. (1994). Individual differences in need for cognitive closure. Journal of Personality and Social Psychology, 67(6), 1049–1062.",
      "year": 1994,
      "url": "https://pubmed.ncbi.nlm.nih.gov/7815301/"
    },
    {
      "id": "R10",
      "citation": "Arkes, H. R., & Blumer, C. (1985). The psychology of sunk cost. Organizational Behavior and Human Decision Processes, 35(1), 124–140.",
      "year": 1985,
      "url": "https://www.researchgate.net/publication/4812596_The_psychology_of_sunk_cost"
    },
    {
      "id": "R11",
      "citation": "Gilovich, T., Medvec, V. H., & Savitsky, K. (2000). The spotlight effect in social judgment: An egocentric bias in estimates of the salience of one’s own actions and appearance. Journal of Personality and Social Psychology, 78(2), 211–222.",
      "year": 2000,
      "url": "https://pubmed.ncbi.nlm.nih.gov/10707330/"
    },
    {
      "id": "R12",
      "citation": "Ryan, R. M., & Deci, E. L. (2001). On happiness and human potentials: A review of research on hedonic and eudaimonic well-being. Annual Review of Psychology, 52, 141–166.",
      "year": 2001,
      "url": "https://www.annualreviews.org/content/journals/10.1146/annurev.psych.52.1.141"
    },
    {
      "id": "R13",
      "citation": "Roberts, B. W., Walton, K. E., & Viechtbauer, W. (2006). Patterns of mean-level change in personality traits across the life course: A meta-analysis of longitudinal studies. Psychological Bulletin, 132(1), 1–25. https://doi.org/10.1037/0033-2909.132.1.1",
      "year": 2006,
      "url": "https://pubmed.ncbi.nlm.nih.gov/16435954/"
    },
    {
      "id": "R14",
      "citation": "Kjærvik, S. L., & Bushman, B. J. (2024). A meta-analytic review of anger management activities that increase or decrease arousal: What fuels or douses rage? Clinical Psychology Review, 109, 102414. https://doi.org/10.1016/j.cpr.2024.102414",
      "year": 2024,
      "url": "https://pubmed.ncbi.nlm.nih.gov/38518585/"
    },
    {
      "id": "R15",
      "citation": "Hirst, W., Phelps, E. A., Meksin, R., Vaidya, C. J., Johnson, M. K., Mitchell, K. J., et al. (2015). A ten-year follow-up of a study of memory for the attack of September 11, 2001: Flashbulb memories and memories for flashbulb events. Journal of Experimental Psychology: General, 144(3), 604–623. https://doi.org/10.1037/xge0000055",
      "year": 2015,
      "url": "https://pubmed.ncbi.nlm.nih.gov/25751741/"
    }
  ],
  "fallbacks": {
    "neutral": {
      "title": "“这次，得看情况”",
      "tagline": "十二个“看情况”，也是很明确的回答。",
      "paragraphs": [
        "这十二题里，你都给具体情况留了位置。先看看每个问题的研究，再决定哪些说法值得点头。"
      ]
    },
    "unmatched": {
      "title": "“这次先不领牌”",
      "tagline": "看法有了，牌子先留着。",
      "paragraphs": [
        "这份答卷没有集中到同一个结果组合。你仍可以查看每个问题的相关研究，也可以回到题目调整答案。"
      ]
    }
  }
};
});
