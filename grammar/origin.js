const deity = require('./deity');
const animal = require('./animals');
const nouns = require('./nouns');
const origin = {
  "origin": ["#setDeity##story#"],
  "story": [
    "#deityName# the #deityType# of #deityDomain# #deityCommand#.",
    "#deityName# the #deityType# of #deityDomain# #deityDoes#.",  
    // "#deityName# the #deityType# of #spiritAnimal##animalAdjective# #animalType.s# asks you \"have you fed your #animalType# today?\"",
  ],
  "deityCommand": ["#commandAdverb# #deityCommand#", "#commandAdverb# #deityCommand#", "#commandVerb# you to #action#", "booms \"#action.toUpperCase#\" from the sky", "commands you to #action#", "compels you to #action#", "demands that you #action#", "mandates that you #action#", "orders you to #action#", "requests that you #action#", "screams \"#action.toUpperCase#\"", "whispers that you should #action#", "yells \"#action.toUpperCase#\"","sends a #bird##birdMember.a# fluttering down from the sky. Tied to its leg is a note: \"#action#\""],
  "commandVerb": [
    "asks", "demands", "needs", "wants", "desires"
  ],
  "deityDoes": ["#deityCommand#", "#deityCommand#", "#deityCommand#", "appears in front of you and #commandVerb# to #deityRequest# your #noun#", "conjures #noun.a# from thin air", "gestures at you #commandAdverb#", "is building #dwelling.a# in #placeName#", "is living in #dwelling.a# in #placeName#"],
  "deityRequest": [
    "borrow", "impregnate", "despoil", "sit on", "fiddle with", "make babies with", "ennoble", "create life from", "begin a cult that worships", "judge"
  ],
  "dwelling": ["ashram", "bird's nest","bothy", "cave", "clump of moss", "den", "dream", "grove of beech trees", "holiday home", "mountain", "palace", "rubbish tip", "temple", "tree", "treetop shack", "cluttered hovel", "inconspicuous hole"],
  "placeName": ["a forgotten suburb", "BBC TV Centre", "heaven", "outer space", "Siberia", "the astral plane", "the Earth's core", "the edgelands", "the heart of darkness", "the Himalayas", "the Midwest", "the North of England", "the Orient Express", "the Outer Hebrides", "the Pastel City", "the Peak District", "the place you least expect", "the tundra", "Viriconium", "your backyard", "your sock drawer", "Blackpool", "the Ghobi Desert", "the space-time continuum","the eye of a needle","the head of a pin"],
  "commandAdverb": ["after a pause of a thousand years", "angrily", "for no good reason", "in a funny voice", "innocently", "kindly", "mysteriously", "on the spur of the moment", "out of pure malevolence"],
  "action": [
    "#verb# #object#"
    ],
  "verb": ["#action# and #verb#", "abase yourself before", "become #role# of", "bow to", "destroy", "devote your life to", "exalt", "heap #noun.s# upon", "humiliate yourself for", "ignore", "imagine you are", "immanentise", "immanentize", "kiss the #role# of", "live the rest of your life as the #role# of", "make a pilgramage to the #role# of", "make your way directly to", "obey the #role# of", "prostrate yourself before", "realise", "respect", "return to", "sacrifice your #noun# to", "soil yourself with", "spread the good news about", "verbalise", "warn the world about", "worship"],
  "role": ["antichrist", "barber-surgeon", "comforter", "first", "haranguer", "midwife", "paragon", "pilgrim", "true believer", "vicar", "witness"],
  "object": ["#specifier# #noun.s#", "#specifier# #objAdverb# #noun.s#", "yourself and #specifier# #noun.s#"],
  "specifier": ["#specifier# #noun#'s", "some", "the", "the", "your", "your", "your #relation#'s"],
  "objAdverb": ["American", "artisanal", "awkward", "base metal", "black", "bloody", "blue", "brown", "Canadian", "desiccated", "empty", "faded", "filthy", "flimsy", "golden", "green", "grey", "hand-made", "hidden", "invisible", "irridium", "macerated", "nearest", "object-oriented", "orange", "other", "overrated", "oversized", "overt", "pathetic", "prosaic", "prosthetic", "pure", "radioactive", "red", "secret", "secular", "silver", "smelly", "sodden", "sodding", "white", "wild", "wooden", "yellow"],
  "relation": ["beloved", "boss", "colleague", "conscience", "elderly aunt", "enemy", "familiar", "father", "instinct", "mother", "neighbour", "pet", "sacred place", "secret crush", "shrine", "spouse", "tortoise", "totem"],
  "pauseLength": ["awkward pause", "flap of a hummingbird's wing", "lengthy pause", "painful wait", "short pause", "silence lasting a thousand years", "uncomfortable silence","brief millennium","painful aeon"]
};


const originComplete = Object.assign({}, deity, animal , nouns, origin);
module.exports = originComplete;