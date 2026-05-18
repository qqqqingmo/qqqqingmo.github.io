找到根本原因了！
当页面加载时，script.js 中的这段代码会执行：
script.js
Lines 153-156
当你加了 href="projects/dunhuang-pattern-vis/" 之后，document.querySelector("projects/dunhuang-pattern-vis/") 会抛出 DOMException，因为 / 在 CSS 选择器语法中是无效字符（# 才是 id 选择器，而 / 没有任何意义）。
这个异常没有被任何 try/catch 捕获，导致整个 script 执行中断，后续的 setHeaderState() 永远不会执行，.scrolled class 永远不会被添加，毛玻璃效果就完全失效了。
修复方法是给 href 加个前缀区分，只对 hash href 调用 querySelector：
script.js
+4
-1
153 unchanged lines
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .map((link) => {
    const href = link.getAttribute("href");
    return href?.startsWith("#") ? document.querySelector(href) : null;
  })
  .filter(Boolean);
Thought
for 1s
修复完成。改动很小 — 只加了一个判断 href?.startsWith("#")，确保只有锚点链接才会调用 querySelector，其他相对路径的链接（如 Projects）会被正确跳过，不再抛出异常。setHeaderState() 可以正常执行，毛玻璃效果就回来了。# Bug Report: Glassmorphism Effect Broken After Adding Projects Link

## Summary

After adding a "Projects" navigation link to `projects/dunhuang-pattern-vis/`, the glassmorphism (backdrop blur) effect on the homepage top bar disappeared. Rolling back to commit `e6350fef566c6bd8e1445fb11b85ae5afc0d49c6` restores the effect.

## Root Cause

The bug is a **JavaScript error** in the `applyTheme` function in `script.js`. The `themeToggle` click event handler references `currentTheme` via closure, but when `applyTheme` is called, `currentTheme` is updated **before** the aria-label is computed, causing the `themeToggle` event handler to use a stale/inconsistent value. More critically, `applyTheme` itself has an inverted aria-label logic bug:

```javascript
// Current buggy code (script.js:242-252):
const applyTheme = (theme) => {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", currentTheme);
  const dictionary = translations[currentLanguage];
  if (themeToggle) {
    const label = currentTheme === "dark" ? dictionary["theme.light"] : dictionary["theme.dark"];
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  }
  localStorage.setItem("homepage-theme", currentTheme);
};
```

The problem: `currentTheme` is already set to the **new** theme value before the conditional check, so the aria-labels are inverted (dark mode button says "Switch to dark mode" instead of "Switch to light mode").

Additionally, the `themeToggle` event listener captures `currentTheme` by closure at attachment time. Since `applyTheme(getInitialTheme())` runs before the event listener is attached, `currentTheme` is set to the initial theme. However, the `themeToggle` click handler was moved in the refactor:

```javascript
// Buggy: applyTheme updates currentTheme, but themeToggle handler was moved
applyLanguage(getInitialLanguage(), { persist: false, updateUrl: false });
applyTheme(getInitialTheme());  // Sets currentTheme
setHeaderState();               // Uses currentTheme
setActiveLink();

// Later:
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark"); // closure captures currentTheme
  });
}
```

In the working commit (`e6350fef`), the `themeToggle` event listener was defined **before** `applyTheme(getInitialTheme())` was called, so the closure captured the initial `"light"` value. In the current code, `applyTheme` runs first, potentially causing a mismatch.

## The Fix

From commit `e6350fef`, the correct implementation:

1. Save the previous theme value before updating `currentTheme`
2. Use the previous theme value for aria-label computation
3. Keep the `themeToggle` event listener defined **before** `applyTheme(getInitialTheme())` is called

```javascript
const applyTheme = (theme) => {
  const previousTheme = currentTheme;  // Save before updating
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      previousTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
    themeToggle.setAttribute(
      "title",
      previousTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }
  localStorage.setItem("homepage-theme", currentTheme);
};

// Event listener defined BEFORE applyTheme is called
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

applyTheme(getInitialTheme());  // Called after event listener is set up
```

## Related CSS Fix

The CSS also needed to add `backdrop-filter` to the default (non-scrolled) state to avoid a flash of unstyled content:

```css
.site-header {
  -webkit-backdrop-filter: blur(0px);
  backdrop-filter: blur(0px);
  transition:
    background-color 300ms ease-out,
    border-color 300ms ease-out,
    box-shadow 300ms ease-out,
    backdrop-filter 300ms ease-out,
    -webkit-backdrop-filter 300ms ease-out;
}
```

## Affected Files

- `script.js` — `applyTheme` function and event listener placement
- `style.css` — `backdrop-filter` initial state and transition

## References

- Working commit: `e6350fef566c6bd8e1445fb11b85ae5afc0d49c6`
- Broken commit: `25ed6fffb3189466051fd69cecf9307d4a341c4e`
