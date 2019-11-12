gallente-elections
==================

This is a simple site built with [Gatsby](https://www.gatsbyjs.org/).


Developing
----------

The following steps should be taken (assuming you have a functional NPM environment on your system already):

- `npm install` or `yarn install`
- `npm run develop` or `yarn develop`

The site will now be rebuilt as changes are detected, you van open a browser to http://<ip>:1111 to view it live.


Building
--------

To prepare a build for GitHub pages, first make sure you have followed the steps under Developing. After that,
running `yarn build` or `npm run build` will yield you a `public/` directory containing the output. Push this to
your gh-pages branch or use `yarn gh-pages` to use npm's gh-pages to do that for you.
