# nextjs-semantic
> Next.js + ~Semantic UI~ Fomantic-UI + Styled Components


## Notice
Since version 2.0.0, Semantic UI was replaced by Fomantic-UI.

## Setup
1. clone repo
2. `npm install`
3. `npm run semantic:build`
4. `npm run dev`


## Semantic UI React
* Installed and used by default.
* Using React components is recommended.
* Read docs: https://react.semantic-ui.com/


## Semantic UI
* you can remove components to reduce css size on `semantic.json`
* `.semantic` folder includes source file, from here it's possible to customize default theme
* change default Google font (Lato) on `.semantic/src/themes/default/globals/site.variables`
* run `npm run semantic:watch` to watch for changes while customizing theme


## Why switching to Fomantic-UI?
Here are some reasons for the change:
* Semantic UI requires Node 10
* Fomantic-UI is actively developed
* Adds more components
* Fixes several security vulnerabilities

If you still want to use Semantic UI, switch to `v1.1.0` branch.


## Deploy to Now
Just run `now` on project dir.