const corpora = require("corpora-project");
const settings = corpora
  .getFile("archetypes", "setting")
  .settings.reduce(
    (allSettings, currentSetting) =>
      allSettings.concat(currentSetting.synonyms.concat([currentSetting.name])),
    []
  );

const venues = corpora.getFile("geography", "venues").categories.reduce(
  (allVenues, currentCategory) =>
    allVenues.concat(
      currentCategory.categories.map(category =>
        category.name
          .toLowerCase()
          .replace(/\(.*\)/, "")
          .replace(/.* \/ (.*)/, "$1")
      )
    ),
  []
);

const worshipPlace = [
  "shrine",
  "temple",
  "church",
  "cathedral",
  "chapel",
  "altar",
  "pyramid",
  "roadside shrine",
  "tabernacle",
  "synagogue",
  "basilica",
  "graveyard",
  "cemetery",
  "abbey"
];

const dwelling = [
  "ashram",
  "bird's nest",
  "nest",
  "bothy",
  "cave",
  "clump of moss",
  "den",
  "dream",
  "grove of beech trees",
  "holiday home",
  "mountain",
  "palace",
  "rubbish tip",
  "temple",
  "tree",
  "treetop shack",
  "cluttered hovel",
  "inconspicuous hole",
  "Taj Mahal",
  "abandoned quarry",
  "allotment",
  "holiday home",
  "honeymoon suite",
  "karaoke bar",
  "archipelago",
  "isthmus",
  "fjord",
  "university",
  "dwelling",
  "volcano",
  "windtunnel",
  "thicket",
  "proscenium arch",
  "strip joint",
  "tavern",
  "safe-house",
  "inn",
  "pub",
  "nuclear bunker",
  "secret base",
  "boardroom",
  "coal bunker",
  "air-raid shelter",
  "saloon",
  "plaza",
  "pile",
  "phone accessory shop",
  "oasis",
  "phone mast",
  "kindergarten",
  "loft extension",
  "neighborhood",
  "makerspace",
  "lost property office",
  "dead letter office",
  "iceberg",
  "mezzanine",
  "circus",
  "clearing",
  "condominium",
  "oast house",
  "unruly hedge"
].concat(settings, venues, worshipPlace);

const inPlace = [
  "a forgotten suburb",
  "BBC TV Centre",
  "heaven",
  "outer space",
  "Siberia",
  "the Earth's core",
  "the edgelands",
  "the heart of darkness",
  "the Himalayas",
  "the Midwest",
  "the North of England",
  "the Outer Hebrides",
  "the Pastel City",
  "the Peak District",
  "the place you least expect",
  "the tundra",
  "Viriconium",
  "your backyard",
  "your sock drawer",
  "Blackpool",
  "the Ghobi Desert",
  "the space-time continuum",
  "the eye of a needle",
  "the head of a pin",
  "the Grand Canyon",
  "the salt marshes",
  "Middle Earth",
  "the Shire",
  "Mordor",
  "Narnia",
  "the TARDIS",
  "never-never-land",
  "a galaxy far far away",
  "Mythago Wood",
  "Timbuktu",
  "Atlantis",
  "Mauritania",
  "the Australian Outback",
  "the Thursbitch valley",
  "Park Hill Flats",
  "Cathall Estate",
  "Albert Square",
  "Sid's Café",
  "Skegness",
  "the Western Spiral Arm of the galaxy",
  "Halfway",
  "Galactic Sector ZZ9 Plural Z Alpha",
  "Mahabalipuram",
  "an empty parking lot somewhere near Andromeda",
  "the kingdom of Bryneich",
  "Camelot",
  "the Enchanted Forest",
  "Fairyland",
  "Faerie",
  "Gondwana",
  "Honolulu",
  "Jumanji",
  "Oompa-loompa Land",
  "Westeros",
  "Xanadu",
  "Asgard",
  "Bikini Bottom",
  "Albion",
  "Oblivion",
  "the Twilight Zone",
  "Hyboria",
  "Oz"
];

const atPlace = ["the edge of time", "Ox Stones", "Stonehenge"];

const onPlace = [
  "the astral plane",
  "the Orient Express",
  "Ben Nevis",
  "Tatooine",
  "the Forest of Boland Light Railway",
  "Mars",
  "Alpha Centuri",
  "Betelgeuse",
  "Win Hill",
  "Everest",
  "a mountain the size of a pinhead",
  "Earthsea",
  "the Frogstar",
  "Ursa Minor Beta",
  "Golgafrincham",
  "Traal",
  "Vogsphere",
  "Stavromula Beta",
  "the banks of Lake Windermere",
  "the outskrits of infinity",
  "the other side of the veil",
  "the World of Two Moons",
  "Naboo",
  "Oceanworld"
];

const unqualifiedPlace = ["deep beneath the ground", "six feet underground"];

const qualifiedPlace = unqualifiedPlace.concat(
  atPlace.map(place => `at ${place}`),
  inPlace.map(place => `in ${place}`),
  onPlace.map(place => `on ${place}`)
);
const placeName = atPlace.concat(inPlace, onPlace);
module.exports = {
  dwelling,
  qualifiedPlace,
  unqualifiedPlace,
  placeName,
  inPlace,
  atPlace,
  onPlace,
  settings,
  venues
};
