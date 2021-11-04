# eleventy-tailwind-starter
 website starter using Eleventy and Tailwind CSS


## Package why:
* `11ty`: static site generator
* `tailwind`: CSS
* `postcss`: CSS processing, necessary for tailwind
* `postcss`: CSS processing, necessary for tailwind (on Windows at least)
* `cross-env`: cross platform setting env vars in npm scripts
* `concurrently`: cross platform (works in windows) instead of `&` in npm scripts
* `npm-run-all`: to run multiple npm scripts in the `package.json`

----

## Design considerations

All CSS used is in a single file, `/styles/tailwind.css`. Alongside it is `/styles/tailwind.config.js` which contains all non-tailwind colors used.
