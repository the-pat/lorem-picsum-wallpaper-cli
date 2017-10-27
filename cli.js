#!/usr/bin/env node
'use strict';

const meow = require('meow');
const loremPicsum = require('lorem-picsum-wallpaper');

const cli = meow(`
    Usage
      $ lorempicsum

    Options
      --width   The width (in pixels) of the image
      --height  The height (in pixels) of the image

    Examples
      $ lorempicsum
      $ lorempicsum --width=3840 --height=1080
      $ lorempicsum --width=30
`, { string: ['_'] });

const options = {};

if (cli.flags.width) options.width = cli.flags.width;
if (cli.flags.height) options.height = cli.flags.height;

loremPicsum(options);