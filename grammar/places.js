const corpora = require('corpora-project');

const settings = corpora.getFile('archetypes', 'setting').settings.reduce((allSettings, currentSetting) => 
  allSettings.concat(currentSetting.synonyms.concat([currentSetting.name])), []
);

const dwelling = [
  "ashram", "bird's nest", "bothy", "cave", "clump of moss", "den",
  "dream", "grove of beech trees", "holiday home", "mountain", "palace",
  "rubbish tip", "temple", "tree", "treetop shack", "cluttered hovel",
  "inconspicuous hole", "Taj Mahal"
].concat(settings);

const worshipPlace = [
  "shrine", "temple", "church", "cathedral", "chapel",
  "altar", "pyramid", "roadside shrine", "tabernacle",
  "synagogue", "basilica", "graveyard", "cemetery"
];

const placeName = [
  "a forgotten suburb", "BBC TV Centre", "heaven", "outer space",
  "Siberia", "the astral plane", "the Earth's core", "the edgelands",
  "the heart of darkness", "the Himalayas", "the Midwest",
  "the North of England", "the Orient Express", "the Outer Hebrides",
  "the Pastel City", "the Peak District", "the place you least expect",
  "the tundra", "Viriconium", "your backyard", "your sock drawer",
  "Blackpool", "the Ghobi Desert", "the space-time continuum",
  "the eye of a needle", "the head of a pin", "the Grand Canyon",
  "Ben Nevis", "the salt marshes", "Middle Earth", "the Shire",
  "Mordor", "Narnia", "Tatooine", "the TARDIS", "never-never-land",
  "a galaxy far far away", "Mythago Wood", "the Forest of Boland Light Railway",
  "Earthsea", "Mars", "Atlantis", "Alpha Centuri", "Betelgeuse", "Timbuktu",
  "Mauritania", "the Australian Outback", "Win Hill", "Ox Stones", "Stonehenge",
  "the Thursbitch valley", "Park Hill Flats", "Cathall Estate", "Albert Square",
  "Sid's Café", "Skegness", "the Western Spiral Arm of the galaxy", "Halfway",
  "Galactic Sector ZZ9 Plural Z Alpha", "the Frogstar", "Ursa Minor Beta",
  "Mahabalipuram", "Golgafrincham", "Traal", "Vogsphere", "Stavromula Beta"
];

module.exports = { dwelling, placeName, worshipPlace };
