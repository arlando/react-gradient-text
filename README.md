### react-gradient-text

[![travis build](https://img.shields.io/travis/arlando/react-gradient-text.svg?style=flat-square)](https://travis-ci.org/arlando/react-gradient-text)

More Documentation and demos here: [http://arlando.github.io/react-gradient-text](http://arlando.github.io/react-gradient-text/)

## Description

Make gradient text effects with react. Bind text gradient text effects to generic events such as scroll.

## Install

```
$ npm install --save react-gradient-text
```

## API

attribute|type|required|description
---------|----|--------|-----------
data     |string|true  | text string to be highlighted
animating|bool|false  | should the gradient animate?
gradient |[string]|false  | array of colors that will be used to color the gradient
opacity  |number| false | number that will change the opacity of the color
interval |number| false | changes the rate at which the gradient renders
hoverable|bool|false    | makes the gradient animate on hover
onEvent  | obj| false   | adds an event listener to the current window then calls the pass in function and makes the gradient animate

## Contributing

Follows Angular Commit Guidelines using commitizen and semantic-release

## Local Compilation

```$ npm run build```

```$ npm run test```

Will run the test as a process and will re run on every code change

```$ npm run test:single```

Will run the tests as a single run (good for build/compilation pipelines)

```$ npm start```

Runs a webpack dev server

## New Releases

The project uses commitizen to manage the commits: `$ git cz`

- Merges to master force semantic to make a new release and tag a version on github see `.releaserc` file