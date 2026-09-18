# CRED — FAQ accordion (JavaScript)

The starting point for the CRED help centre accordion. The boring parts are done; everything
being assessed is deliberately missing.

## Running it

There is no server and no build step. Open `index.html` in a browser — double-click it, or
File → Open. An address bar beginning `file://` is correct.

Keep developer tools open while you work: press F12, or right-click the page and choose Inspect.
The **Console** tab is where JavaScript errors appear. On this project a mistake usually means
*nothing happens at all*, and the reason is sitting in that panel.

## What is already here

| file | state |
|---|---|
| `index.html` | page shell, heading, and an empty accordion container with one example item commented out |
| `styles.css` | reset, layout and typography. **No accordion styling** — that is yours |
| `script.js` | empty |

Nothing here shows a working accordion. That is the point: you are meant to build it, not read it.

## Where the work is

Open the **Issues** tab. There are four, in order. Each one says exactly what done looks like —
this README does not repeat them, because two copies of the same instructions drift apart.

One issue at a time:

```bash
git checkout main
git pull
git checkout -b issue-1
# ...make your changes...
git add .
git commit -m "Add the accordion markup"
git push -u origin issue-1
```

Then open a **Pull Request** with `Closes #1` in the description. Raj reviews it. Approved means
it merges itself; changes requested means push again to the **same branch**.

## A note on this project

No framework and no library — no React, no jQuery, no Bootstrap. Plain `addEventListener` and
plain DOM.

Ask Priya on Slack if a ticket is unclear, and Raj if the JavaScript is not doing what you expect.
