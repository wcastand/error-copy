# Install

`yarn`

# Usage

`yarn dev`

Go on localhost:3000

# Issue

If you change `src/hello.js`, the file is copied correctly to `./stories/pages` and the page is updated correctly.
But if you make an error (not closing html tags for example), you get an compile error and the error page is shown, form this point any change made to `src/hello.js`won't be reflected in `./stories/pages` and you page will stay on the error pages.

You need to restart the server to copy the file again.
