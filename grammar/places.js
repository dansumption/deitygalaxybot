const corpora = require('corpora-project');

const settings = corpora.getFile('archetypes', 'setting').settings.reduce((allSettings, currentSetting) => 
  allSettings.concat(currentSetting.synonyms.concat([currentSetting.name])), []
);

const venues = corpora.getFile('geography', 'venues').categories.reduce((allVenues, currentCategory) => 
  allVenues.concat(
  currentCategory.categories.map(category => category.name.toLowerCase().replace(/\(.*\)/, '').replace(/.* \/ (.*)/, "$1"))
    ), []
);

const dwelling = [
  "ashram", "bird's nest", "bothy", "cave", "clump of moss", "den",
  "dream", "grove of beech trees", "holiday home", "mountain", "palace",
  "rubbish tip", "temple", "tree", "treetop shack", "cluttered hovel",
  "inconspicuous hole", "Taj Mahal", "abandoned quarry"
].concat(settings, venues);

const worshipPlace = [
  "shrine", "temple", "church", "cathedral", "chapel",
  "altar", "pyramid", "roadside shrine", "tabernacle",
  "synagogue", "basilica", "graveyard", "cemetery"
];

const inPlace = [
  "a forgotten suburb", "BBC TV Centre", "heaven", "outer space",
  "Siberia", "the Earth's core", "the edgelands",
  "the heart of darkness", "the Himalayas", "the Midwest",
  "the North of England", "the Outer Hebrides",
  "the Pastel City", "the Peak District", "the place you least expect",
  "the tundra", "Viriconium", "your backyard", "your sock drawer",
  "Blackpool", "the Ghobi Desert", "the space-time continuum",
  "the eye of a needle", "the head of a pin", "the Grand Canyon",
  "the salt marshes", "Middle Earth", "the Shire",
  "Mordor", "Narnia", "the TARDIS", "never-never-land",
  "a galaxy far far away", "Mythago Wood", "Timbuktu", "Atlantis", 
  "Mauritania", "the Australian Outback", 
  "the Thursbitch valley", "Park Hill Flats", "Cathall Estate", "Albert Square",
  "Sid's Café", "Skegness", "the Western Spiral Arm of the galaxy", "Halfway",
  "Galactic Sector ZZ9 Plural Z Alpha", 
  "Mahabalipuram",
  "an empty parking lot somewhere near Andromeda", 
];


const atPlace = [
  "the edge of time", "Ox Stones", "Stonehenge",
];


const onPlace = [
  "the astral plane", "the Orient Express", 
  "Ben Nevis", "Tatooine",
  "the Forest of Boland Light Railway",
  "Mars", "Alpha Centuri", "Betelgeuse",
  "Win Hill", "Everest",
  "a mountain the size of a pinhead",
  "Earthsea", 
  "the Frogstar", "Ursa Minor Beta", "Golgafrincham",
  "Traal", "Vogsphere", "Stavromula Beta",
  "the banks of Lake Windermere",
  "the outskrits of infinity", 
];

const unqualifiedPlace = [
  "deep beneath the ground",
  "six feet underground",
]

const placeName = unqualifiedPlace
  .concat(atPlace.map(place => `at ${place}`))
  .concat(inPlace.map(place => `in ${place}`))
  .concat(onPlace.map(place => `on ${place}`));

module.exports = { dwelling, placeName, worshipPlace };
