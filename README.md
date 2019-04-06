# All The Deities

Deity Galaxy bot - [@deitygalaxybot](https://twitter.com/deitygalaxy) is a Twitter bot based on a [Tracery](http://tracery.io) grammar. It tweets every few hours (usually), replies to mentions, and tries to remember which deity's tweet you've replied to so that it can again reference that deity.

I'd would _love_ to receive contributions to the grammar - the stuff that makes up the stuff the bots say. If you'd like to help, just [fork this repository](https://help.github.com/en/articles/fork-a-repo), start making changes, and then submit a [pull request](https://help.github.com/en/articles/creating-a-pull-request). I've started adding [Issues](https://github.com/dansumption/deitygalaxybot/issues) to this repo - feel free to check them out and work on them, but you may first want to read on and have a play around...

All of _deitygalaxybot's_ text is stored in the [grammar directory](grammar/).

* [story.js](grammar/story.js) contains the sentence templates for everything that the bot writes - think of these as a series of mini stories involving deities. I would be very grateful to anyone who could add some more! You'll find some more story elements scattered around in the [stories](grammar/stories) directory - this is mostly old stuff that I've been meaning to move elsewhere.
* The other top-level files you shouldn't need to worry about much.
  * [index.js](grammar/index.js) is the first file loaded, and pulls in all of the vocabulary for the bot - nouns, verbs, names, places, times, ..
  * [origin.js](grammar/origin.js) isn't much used - but it decides on different templates based upon whether this is a fresh tweet, or a reply to someone.
  * hashtag.js, macros.js, writing.js - ignore them for now.
* The various subdirectories contain all of the different categories of words - so the [nouns directory](grammar/nouns/) contans nouns split into dozens of different categories, [spacetime](grammar/spacetime) contains places (building types, places of worship, names of real and imaginary countries, towns, mountains, buildings...), times ('40 winks', 'the time it takes for a watched kettle to boil',...) and more. [actors](grammar/actors) is where deities, humans and animals get their names, professions, and pronouns. [adjectives](grammar/adjectives) and [adverbs](grammar/adverbs) should be mostly self-explanatory

Tracery allows for nested grammar - and there are quite a few places where you can see this in action.

* For example, in [festival.js](grammar/spacetime/festival.js), the following template:
  `"start of filming of the BBC series '#nounToPluralise.capitalizeAll#' #deityPlace#"`
  will be filled in randomly each time the script is run, to come up with variations like:
  * start of filming of the BBC series 'Fucking Meerkat' on Flesh Hovel Lane
  * start of filming of the BBC series 'Fatberg' in an eroded range of hills
  * start of filming of the BBC series 'Cornish Pastie' on the Orient Express
* Take a look at [name.js](grammar/actors/name.js) to see how grammar can be embedded and smooshed around to come up with deity-like names such as Weh or Æz or Phu'buxmie-iest or Ioqu'thor or Clieseph.
* My favourite daft detail in the whole lot is the bird name generator. Have a peek in [birds.js](grammar/nouns/birds.js) if you want to see how `"#adjective#-#birdBodyPlace# #birdAdjective# #birdType#"` gets converted to breeds like...
  * irridium-breasted mountain blackbird
  * fruity-capped interstellar chough
  * ringed-crowned emperor shag
  * perky-headed wood quail
  * virgin-legged space swift

To get started, create a `temp` directory and then run `npm run debug` - it will spit out a file `temp\debug.txt` with a lot of sample generated tweets in it. To alter the template used, checkout `debug.js`, and to really go deep, look at the files contained within the `grammar` directory.

The twitter side of things is a little more complex, and I'm leaving details out for now. I hosted _deitygalaxybot's_ grammar initially on [Cheap Bots, Done Quick](https://cheapbotsdonequick.com), but as the things I wanted to do with it grew (and my grammar JSON grew out of control) I built this version so I could host it myself on Heroku. I found [this tutorial](https://medium.com/@mattpopovich/how-to-build-and-deploy-a-simple-twitter-bot-super-fast-with-node-js-and-heroku-7b322dbb5dd3) super helpful.
