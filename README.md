# Avatar [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

Component that displays an image within a bordered bounding box.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
  - [Requirements](#requirements)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage
```js
  import React from 'react'
  import Avatar from 'avatar'
  React.render(<Avatar image="http://myimage"/>, document.createElement('div'))
```

```css
@import "avatar";
```

## Props
### `<String> image` **Required**
Path to an image.

### `<String> OR <Number> size` **Required**
Defaults to "normal". One of "normal", "large", or a number of pixels for the width.

### `<Function> onClick`
Handler for a a click on the avatar. Defaults to nothing.

## Tests
Tests are in [tape](https://github.com/substack/tape).

* `npm test` will run the tests in a browser.
* `npm run tdd` will run the tests in a browser on every file change.

## Developing
Install [ribcage](https://github.com/Techwraith/ribcage)

```sh
npm i -g ribcage
ribcage preview .
# run with client side js enabled
ribcage preview . -s
```

Open [http://localhost:4001/default](http://localhost:4001/default)

### Releasing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [<%= props.authorName %>](<%= props.authorUrl %>)


[npm-url]: https://npmjs.org/package/<%= slugname %>
[npm-image]: https://badge.fury.io/js/<%= slugname %>.svg
[travis-url]: https://travis-ci.org/<%= props.githubUsername %>/<%= slugname %>
[travis-image]: https://travis-ci.org/<%= props.githubUsername %>/<%= slugname %>.svg?branch=master
[daviddm-url]: https://david-dm.org/<%= props.githubUsername %>/<%= slugname %>.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/<%= props.githubUsername %>/<%= slugname %>