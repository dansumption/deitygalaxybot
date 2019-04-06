# All The Deities

Deity Galaxy bot - [@deitygalaxybot](https://twitter.com/deitygalaxy) is a Twitter bot based on [Tracery](tracery.io). It tweets around once per hour, replies to mentions, and tries to remember which deity's tweet you've replied to so that it can again reference that deity.

I'd love contributions to the grammar - the stuff that the bots say. To help, just [fork this repository](https://help.github.com/en/articles/fork-a-repo), start making changes, and then submit a [pull request](https://help.github.com/en/articles/creating-a-pull-request).

All of the text is stored in the [grammar directory](grammar/).

* [story.js](grammar/story.js) contains the sentence templates for everything that _deitygalaxybot_ writes.
* [index.js](grammar/index.js) is the first file loaded, and pulls in all of the vocabulary for the bot - nouns, verbs, names, places, times, ...
* [origin.js](grammar/origin.js) isn't much used - but it decides on different templates based upon whether this is a fresh tweet, or a reply to someone.
* The various subdirectories contain all of the different categories of words - so the [nouns directory](grammar/nouns/) contans loads of different categories of noun, [spacetime](grammar/spacetime) contains places (building types, places of worship, names of real and imaginary countries, towns, mountains, buildings...), times ('40 winks', 'the time it takes for a watched kettle to boil',...) and more. [actors](grammar/actors) is where deities, humans and animals get their names, professions, and pronouns.
* Tracery allows for nested grammar - and there are quite a few places where you can see this in action. For example, in [festivals.js][grammar/spacetime/festivals.js], the following template: `"start of filming of the BBC series '#nounToPluralise.capitalizeAll#' #deityPlace#"` will be filled in randomly each time the script is run, to come up with variations like:
* * start of filming of the BBC series 'Fucking Meerkat' on Flesh Hovel Lane
* * start of filming of the BBC series 'Fatberg' in an eroded range of hills
* * start of filming of the BBC series 'Cornish Pastie' on the Orient Express

start of filming of the BBC series 'Oak' in Bastardstown, County Wexford

start of filming of the BBC series 'Partridge' in the Enchanted Forest

start of filming of the BBC series 'Genital' in Tijuana

start of filming of the BBC series 'Battery' in Middle Earth

start of filming of the BBC series 'Ladys Slipper' in the Ghobi Desert

start of filming of the BBC series 'Nutmeg' on the World of Two Moons

start of filming of the BBC series 'Lizard' in the Grand Canyon

start of filming of the BBC series 'Fowl' in Westeros

start of filming of the BBC series 'Zebra' on Vogsphere

start of filming of the BBC series 'Crocus' on the Old Man of Coniston

start of filming of the BBC series 'Freesia' in Narnia

start of filming of the BBC series 'Porcupine' in Honolulu

start of filming of the BBC series 'Amphibian' in Kamchatka

start of filming of the BBC series 'Game Of Hide & Seek' in Idiotville

start of filming of the BBC series 'Lampshade' in Blackpool

start of filming of the BBC series 'Swan' on the outskirts of infinity

start of filming of the BBC series 'Stylus' in Coronation Street

start of filming of the BBC series 'Belted Lark' in Lord's Cricket Ground

start of filming of the BBC series 'Eagle' on Mount Doom

start of filming of the BBC series 'Grouse' in Park Hill Flats

start of filming of the BBC series 'Bellflower' in the Bat Cave

start of filming of the BBC series 'Zebra' in Skegness

start of filming of the BBC series 'Unimaginative-Knee Raven' on Alpha Centuri

start of filming of the BBC series 'Porpoise' in Great Snoring

start of filming of the BBC series 'Saucer' on Win Hill

start of filming of the BBC series 'Doorway' on Mount Doom

start of filming of the BBC series 'Sunfish' on the other side of the veil

start of filming of the BBC series 'LED Lightbulb' on Mount Famine

start of filming of the BBC series 'Wooded-Headed Greater-Spottedphoenix' in Woolloomooloo

start of filming of the BBC series 'Partridge' in Timbuktu

start of filming of the BBC series 'Wombat' on Tatooine

start of filming of the BBC series 'Father' on the Orient Express

start of filming of the BBC series 'Grouse' in the Midwest

start of filming of the BBC series 'Elbow Patch' on Tatooine

start of filming of the BBC series 'Ape' in Micronesia

start of filming of the BBC series 'Rabbit' in the Australian Outback

start of filming of the BBC series 'Marten' on Oceanworld

start of filming of the BBC series 'Hyrax' in Siberia

start of filming of the BBC series 'Magic Bean' in the Shire

start of filming of the BBC series 'Battery' in Bikini Bottom

start of filming of the BBC series 'Game Of Backgammon' in the Midwest

start of filming of the BBC series 'Arse' on Burbage Moor

start of filming of the BBC series 'Torpedo' in the Mojave desert

start of filming of the BBC series 'Algorithm' in Halfway

start of filming of the BBC series 'Woodlouse' in the roots of an ancient tulipwood tree

start of filming of the BBC series 'Virus' in Bedminster

start of filming of the BBC series 'Mackerel' in Port Circumcision, Antarctica

start of filming of the BBC series 'Badger' in the Midwest

start of filming of the BBC series 'Marten' in Mitteleuropa

start of filming of the BBC series 'Tapeworm' on Alpha Centuri

start of filming of the BBC series 'Lemming' in Amerika

start of filming of the BBC series 'Big Toe' in the Western Spiral Arm of the galaxy

start of filming of the BBC series 'Cherry' at The Restaurant at The End of The Universe

start of filming of the BBC series 'Ogre' in a galaxy far far away

start of filming of the BBC series 'Hallway' in the sea of Okhotsk

start of filming of the BBC series 'Zebra Spider' on the other side of the veil

start of filming of the BBC series 'Adam'S Apple' in Bikini Bottom

start of filming of the BBC series 'Gadfly' in the place you least expect

start of filming of the BBC series 'Herbivore' in outer space

start of filming of the BBC series 'Horse' on the Earth

start of filming of the BBC series 'Pizza Pie' in Le Cœur

start of filming of the BBC series 'Safety Barrier' in Thurgoland

start of filming of the BBC series 'Troll' on the banks of Lake Windermere

start of filming of the BBC series 'Amphibian' in Dildo, Newfoundland

start of filming of the BBC series 'Browser Window' in the head of a pin

start of filming of the BBC series 'Joojoob' in the Borysthenes

start of filming of the BBC series 'Carnation' in Little Snoring

start of filming of the BBC series 'Tick' in a forgotten suburb

start of filming of the BBC series 'Chilli' on Neptune

start of filming of the BBC series 'Carpenter Bee' on Win Hill

start of filming of the BBC series 'Magpie' on the Old Man of Coniston

start of filming of the BBC series 'Bat' in the space-time continuum

start of filming of the BBC series 'Elm' in Skegness

start of filming of the BBC series 'Porcupine' in Park Hill Flats

start of filming of the BBC series 'Hippogriff' in Camelot

start of filming of the BBC series 'Grasshopper' in Hokkaido

start of filming of the BBC series 'Phalanger' in Vegas

start of filming of the BBC series 'Adam'S Apple' on Vogsphere

start of filming of the BBC series 'Partridge' on Ben Nevis

start of filming of the BBC series 'Tarsier' on the Orient Express

start of filming of the BBC series 'Bug' in Timbuktu

start of filming of the BBC series 'Walnut' on Kinder Scout

start of filming of the BBC series 'Giant Squid' in outer space

start of filming of the BBC series 'Orange Blossom' in Narnia

start of filming of the BBC series 'Game Of Tic Tac Toe' in a cave in Appalachia

start of filming of the BBC series 'Mussel' in Kilkenny

start of filming of the BBC series 'Saturday' in Sandy Balls

start of filming of the BBC series 'Pachyderm' in the space-time continuum

start of filming of the BBC series 'Game Of Backgammon' in a galaxy far far away

start of filming of the BBC series 'Game Of Carcassonne' on Uranus

start of filming of the BBC series 'Beetle' in Oblivion

start of filming of the BBC series 'Owl' in Mitteleuropa

start of filming of the BBC series 'Underwear' in Mordor

start of filming of the BBC series 'Fly' in Honolulu

start of filming of the BBC series 'Columbine' in the Shire

start of filming of the BBC series 'Salmon' in Bikini Bottom

start of filming of the BBC series 'Sea-Urchin' in the head of a pin

start of filming of the BBC series 'Novella' in the kingdom of Bryneich

start of filming of the BBC series 'Thriller' in the Bat Cave

start of filming of the BBC series 'Perch' in the Shire

start of filming of the BBC series 'Fucking Meerkat' in Transcarpathia

start of filming of the BBC series 'Bee' in Sandy Balls

start of filming of the BBC series 'Badger' in Hen Ogledd

start of filming of the BBC series 'Eagle' in British Columbia

start of filming of the BBC series 'Tendon' in Westeros

start of filming of the BBC series 'Worm' in the edgelands

start of filming of the BBC series 'Mimosa' in Oompa-loompa Land

start of filming of the BBC series 'Carpenter Bee' in BBC TV Centre

start of filming of the BBC series 'Bone' in Transnistria

start of filming of the BBC series 'Kangaroo' on Lizard Point

start of filming of the BBC series 'Dolphin' in the Himalayas

start of filming of the BBC series 'Game Of Ping Pong' in Cockermouth

start of filming of the BBC series 'Bridged-Footed Sheathbill' in the Solar System

There are a
like Weh or Æz or Phu'buxmie-iest or Ioqu'thor or Clieseph.

To get started, create a `temp` directory and then run `npm run debug` - it will spit out a file `temp\debug.txt` with a lot of sample generated tweets in it. To alter the template used, checkout `debug.js`, and to really go deep, look at the files contained within the `grammar` directory.

I hosted it initially on [Cheap Bots, Done Quick](https://cheapbotsdonequick.com), but as the things I wanted to do with it grew (and my grammar JSON grew out of control) I built this version so I could host it myself on Heroku. I found [this tutorial](https://medium.com/@mattpopovich/how-to-build-and-deploy-a-simple-twitter-bot-super-fast-with-node-js-and-heroku-7b322dbb5dd3) super helpful.
