# Portfolio_Site_V3.00

# Lulama Zondo - Portfolio & Resume Website

A responsive, single-page personal portfolio and resume site built with plain HTML, CSS and JavaScript. No frameworks, build tools or dependencies.

## Features

- Dark charcoal theme with crimson accents and a glassmorphism sticky header
- Smooth-scrolling navigation with active-section highlighting and a mobile slide-out menu
- Hero section with a typing headline and a terminal-style panel
- About section with animated counters
- Skills grid with proficiency dots
- Expandable experience timeline
- Project cards with tech badges and GitHub / Live demo buttons
- Certifications and education cards
- Contact section with live form validation, a "Copy email" button and a LinkedIn link
- Respects reduced-motion settings

## Project structure

```
site/
  index.html              Page structure
  style.css               All styling and theme colours
  script.js               Content data and interactivity
  Lulama_Zondo_CV.docx    Downloaded by the "Download CV" button
  README.md               This file
```

Keep all files in the same folder so the page can find its styles, script and CV.

## Running locally

Open `index.html` in any modern browser. No server is needed.

## Customising

Most content lives in the data lists at the top of `script.js`:

| What to change | Where |
| --- | --- |
| Email address | `EMAIL` constant |
| Skills and proficiency (1-5) | `SKILLS` list |
| Work experience and bullet points | `JOBS` list |
| Projects, tags and links | `PROJ` list |
| Education and certifications | `EDU` list |
| Typing headline phrases | `roles` list |
| Terminal panel lines | `lines` list |
| Counter numbers | `data-n` attributes in the About section of `index.html` |
| Colours | CSS variables at the top of `style.css` (`--bg`, `--card`, `--line`, `--red`, `--red2`) |

### Project links

Each project in `PROJ` has `gh` (GitHub button) and `demo` (Live demo button). Put a full URL inside the quotes. Leaving a link as `""` makes the button show a "coming soon" message.

```js
{n:"Project name", p:"Description", f:["Feature one"], s:["HTML","CSS"],
 gh:"https://github.com/username/repo", demo:"https://example.com"}
```

### Icons

Emoji and symbols are written as character codes (for example `\u{1F393}` in JavaScript or `&#x2709;` in HTML) so the source stays free of emoji characters. Look up the code for any other emoji and use the same format.

### CV file

The "Download CV" button points to `Lulama_Zondo_CV.docx`. To use a different file, replace it and keep the same name, or update the `href` and `download` attributes on the `#dl` link in `index.html`.

## Contact form

The site has no server, so by default a valid submission shows a "Message ready" panel with three options: open Gmail, open the default email app, or copy the message. The visitor still has to press send.

To receive messages automatically:

1. Create a free form endpoint with a service such as Formspree or Web3Forms.
2. Paste its URL into the `FORM_ENDPOINT` constant in `script.js`.
3. Host the site online. The form then sends messages straight to your inbox.

## Deploying

**GitHub Pages**
1. Create a repository and upload the contents of this folder.
2. Go to Settings, then Pages, and choose the main branch as the source.
3. Your site appears at `https://<username>.github.io/<repository>/`.

**Netlify**
Drag the folder onto Netlify Drop and the site is live in seconds.

## Privacy note

If the site is public, check `Lulama_Zondo_CV.docx` before publishing. Remove sensitive details such as ID number, date of birth and referees' phone numbers, or replace it with a shorter public version.

## Fonts

The site loads Space Grotesk and JetBrains Mono from Google Fonts. If they cannot load, it falls back to system fonts.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari.
