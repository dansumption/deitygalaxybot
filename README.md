# All The Deities

Deity Galaxy bot - [@deitygalaxybot](https://twitter.com/deitygalaxy) is a Twitter bot based on [Tracery](tracery.io). It tweets around once per hour, replies to mentions, and tries to remember which deity's tweet you've replied to so that it can again reference that deity.

To get started, create a `temp` directory and then run `npm run debug` - it will spit out a file `temp\debug.txt` with a lot of sample generated tweets in it. To alter the template used, checkout `debug.js`, and to really go deep, look at the files contained within the `grammar` directory.

I hosted it initially on [Cheap Bots, Done Quick](https://cheapbotsdonequick.com), but as the things I wanted to do with it grew (and my grammar JSON grew out of control) I built this version so I could host it myself on Heroku. I found [this tutorial](https://medium.com/@mattpopovich/how-to-build-and-deploy-a-simple-twitter-bot-super-fast-with-node-js-and-heroku-7b322dbb5dd3) super helpful.
