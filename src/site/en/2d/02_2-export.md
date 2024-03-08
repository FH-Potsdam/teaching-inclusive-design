---
title: Export
eleventyNavigation:
  title: Export
  key: en_2d_more_export
  parent: en_2d
  order: 2.1
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

{{video("https://fhpcloud.fh-potsdam.de/s/bpimHLjWPYDmwi6/download/en_2d_export.mp4", "/images/thumbnails/en_2d_export.png", "en_2d_export", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/NBKGd2Lg9WXcWNE
en: https://fhpcloud.fh-potsdam.de/s/bpimHLjWPYDmwi6
-->

{{h2('Pixels')}}

The purpose of learning about how to build design with code, is so we can quickly generate complex shapes and patterns to use in other design processes. So far our output format was a pixel based image. To export our pixels into a convenient PNG format, simply call the `save()` command:

```js
function draw() {
  // drawing code
  noLoop();
  save();
}
```

When calling the save command from the draw-loop, make sure you use `noLoop()`. Otherwise the save function will be called continously. Otherwise you could also use an event:

```js
function keyReleased() {
  save();
}
```

You can also define the name of the saved file:
```js
save("myImage.png");
```

If you wan to export a series of images its best to properly number them. In the following we will use a variable to number the images. You will learn more about those variables in the [next sections](../03_1-variables):
```js
let counter = 1;
function draw() {
  // drawing code
  if (count < 10) {
    // use the if to stop after 10
    save("image" + counter + ".png");
  }
  counter += 1;
} 
```

{{h2('Vectors')}}

While pixels are a good start,  we cannot easily modify our designs once they are stored in pixels. The best alternative are vectors, which we can export as **SVGs**. SVGs are a standard for vector graphics and they can be displayed in the browser and easily imported into any graphics software (e.g. Illustrator, Sketch, Figma, etc.). To do so, we need to tell p5js that we want to switch from pixels to vectors. So upon initializing our canvas, we need to define the correct render-engine:

```js
function setup() {
  createCanvas(400, 400, SVG);
}
```

> Not all functions work (or make sense to use), when working with vectors. But all 2D-commands work just fine.

> If you are creating your own p5js vector project, make sure you include the [SVG-library](https://github.com/zenozeng/p5.js-svg) in your `index.html`. Our boilerplate has this already included.

{{h2('Further reading')}}

In the last few sessions we have covered the basics of p5js, but there is a lot more to discover and do:

- Checkout the [reference](https://p5js.org/reference/) for more commands
- Some people have build [additional commands](https://p5js.org/libraries/) (libraries) that you can add to your setup
- If you want more tutorials, the [coding train](https://thecodingtrain.com/) comes strongly recommended
- The coding examples from the book "Generative Gestaltung", are [available online](http://www.generative-gestaltung.de/)

As a fun bonus, i have written an example to show how to add other p5js-libraries and used the gif-export from [createLoop](https://github.com/mrchantey/p5.createLoop#readme) as an example: [GIF-Bonus](gif.md).