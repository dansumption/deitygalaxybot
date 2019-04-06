# All The Deities

Deity Galaxy bot - [@deitygalaxybot](https://twitter.com/deitygalaxy) is a Twitter bot based on [Tracery](tracery.io). It tweets around once per hour, replies to mentions, and tries to remember which deity's tweet you've replied to so that it can again reference that deity.

I'd love contributions to the grammar - the stuff that the bots say. To help, just [fork this repository](https://help.github.com/en/articles/fork-a-repo), start making changes, and then submit a [pull request](https://help.github.com/en/articles/creating-a-pull-request).

All of the text is stored in the [grammar directory](tree/master/grammar). [story.js](blob/master/grammar/story.js) contains the templates for everything that _deitygalaxybot_ writes. Actually, [grammar/index.js]

There are a
like Weh or Æz or Phu'buxmie-iest or Ioqu'thor or Clieseph.

To get started, create a `temp` directory and then run `npm run debug` - it will spit out a file `temp\debug.txt` with a lot of sample generated tweets in it. To alter the template used, checkout `debug.js`, and to really go deep, look at the files contained within the `grammar` directory.

I hosted it initially on [Cheap Bots, Done Quick](https://cheapbotsdonequick.com), but as the things I wanted to do with it grew (and my grammar JSON grew out of control) I built this version so I could host it myself on Heroku. I found [this tutorial](https://medium.com/@mattpopovich/how-to-build-and-deploy-a-simple-twitter-bot-super-fast-with-node-js-and-heroku-7b322dbb5dd3) super helpful.
