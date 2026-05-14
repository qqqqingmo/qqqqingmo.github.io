# Jiangyue Zeng Academic Homepage

Static personal academic homepage for GitHub Pages.

Website: <https://qqqqingmo.github.io>

## Project Structure

```text
.
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── avatar-placeholder.svg
│   └── favicon.svg
└── README.md
```

## Local Preview

You can open `index.html` directly in a browser.

For a local static server, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

If this directory is not yet connected to the GitHub repository, initialize it and push:

```bash
git init
git branch -M main
git remote add origin https://github.com/qqqqingmo/qqqqingmo.github.io.git
git add .
git commit -m "Create academic homepage"
git push -u origin main
```

For a user site repository named `qqqqingmo.github.io`, GitHub Pages will serve the `main` branch automatically in most cases. If needed, check:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Set the source to `Deploy from a branch`.
4. Select branch `main` and folder `/root`.

## Replace the Avatar

The current avatar is a placeholder:

```text
assets/avatar-placeholder.svg
```

To use your own photo, add an image such as:

```text
assets/avatar.jpg
```

Then update the image path in `index.html`:

```html
<img src="assets/avatar.jpg" alt="Jiangyue Zeng" />
```

## Update Publications and Projects

Edit the `Publications` and `Projects` sections in `index.html`.

Recommended checks before publishing:

- Confirm publication venue/status, especially any conference placeholder.
- Verify author order and paper/project links.
- Replace project placeholders with final titles, descriptions, and links.
- Update education details and years if you want a more complete timeline.

## Notes

- The site uses plain HTML, CSS, and vanilla JavaScript.
- No npm, Vite, React, or build step is required.
- External links use `target="_blank"` and `rel="noopener noreferrer"`.
- The design includes responsive layout, mobile navigation, active section highlighting, hover states, and reduced-motion support.
