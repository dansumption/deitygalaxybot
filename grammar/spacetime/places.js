const corpora = require("corpora-project");
const settings = corpora
  .getFile("archetypes", "setting")
  .settings.reduce(
    (allSettings, currentSetting) =>
      allSettings.concat(currentSetting.synonyms.concat([currentSetting.name])),
    []
  );

const venues = corpora
  .getFile("geography", "venues")
  .categories.reduce(
    (allVenues, currentCategory) =>
      allVenues.concat(
        currentCategory.categories.map(category =>
          category.name.replace(/\(.*\)/, "").replace(/.* \/ (.*)/, "$1")
        )
      ),
    []
  );

const worshipPlace = [
  "abbey",
  "altar",
  "basilica",
  "cathedral",
  "cemetery",
  "chapel",
  "church",
  "graveyard",
  "hermitage",
  "maypole",
  "monastery",
  "nunnery",
  "pyramid",
  "roadside shrine",
  "shrine",
  "synagogue",
  "tabernacle",
  "temple"
];

const dwelling = [
  "abandoned quarry",
  "air-raid shelter",
  "allotment",
  "archipelago",
  "ashram",
  "beehive",
  "bird's nest",
  "boardroom",
  "bothy",
  "car port",
  "cardboard shelter",
  "cave",
  "circus",
  "clearing",
  "clump of moss",
  "cluttered hovel",
  "coal bunker",
  "condominium",
  "crossroads",
  "dead letter office",
  "den",
  "dream",
  "dwelling",
  "fatberg",
  "featureless room",
  "fjord",
  "forest",
  "forest clearing",
  "forest of moss",
  "garden centre",
  "garden shed",
  "grove of #tree.s#",
  "grove of beech trees",
  "holiday home",
  "holiday home",
  "honeymoon suite",
  "iceberg",
  "inconspicuous hole",
  "inland sea",
  "inn",
  "isthmus",
  "karaoke bar",
  "kindergarten",
  "loft extension",
  "lost property office",
  "makerspace",
  "mezzanine",
  "mountain",
  "neighborhood",
  "nest",
  "night bus",
  "nuclear bunker",
  "oasis",
  "oast house",
  "palace",
  "phone accessory shop",
  "phone mast",
  "pile",
  "plaza",
  "pool",
  "proscenium arch",
  "pub",
  "rubbish tip",
  "safe-house",
  "saloon",
  "secret base",
  "shanty town",
  "spinney",
  "strip joint",
  "Taj Mahal",
  "tavern",
  "temple",
  "thicket",
  "tree",
  "treetop shack",
  "university",
  "unruly hedge",
  "volcano",
  "windtunnel"
].concat(settings, venues, worshipPlace);

const inPlace = [
  "a cave in #inPlace#",
  "a patch of moss on #onPlace#",
  "a forgotten suburb",
  "a galaxy far far away",
  "Albert Square",
  "Albion",
  "Alt Clut",
  "an empty parking lot somewhere near Andromeda",
  "an eroded range of hills",
  "Amerika",
  "Appalachia",
  "Asgard",
  "Astrakhan",
  "Atlantis",
  "Baja California",
  "Bangkok",
  "Banterbury",
  "Bastardstown, County Wexford",
  "Bedminster",
  "BBC TV Centre",
  "Bikini Bottom",
  "Blackpool",
  "British Columbia",
  "Byker Grove",
  "Camelot",
  "Cathall Estate",
  "Cockermouth",
  "Coronation Street",
  "Dildo, Newfoundland",
  "Eboracum",
  "Elmet",
  "Faerie",
  "Fairyland",
  "#Festival23",
  "Foodhall Sheffield",
  "Galactic Sector ZZ9 Plural Z Alpha",
  "Gondwana",
  "Great Snoring",
  "Halfway",
  "heaven",
  "Hen Ogledd",
  "Hokkaido",
  "Honolulu",
  "Hookland",
  "Hyboria",
  "Idiotville",
  "Jumanji",
  "Kamchatka",
  "Kilkenny",
  "Leeds Castle",
  "Little Snoring",
  "Lord's Cricket Ground",
  "Lvov",
  "Mahabalipuram",
  "Mauritania",
  "Mexico City",
  "Micronesia",
  "Middle Earth",
  "Mitteleuropa",
  "Mordor",
  "Mythago Wood",
  "Nantucket",
  "Narnia",
  "never-never-land",
  "Oblivion",
  "Oompa-loompa Land",
  "Oughtibridge",
  "outer space",
  "Oz",
  "Park Hill Flats",
  "Port Circumcision, Antarctica",
  "Pratt's Bottom",
  "Saint-Louis-du-Ha! Ha!",
  "Sandy Balls",
  "Shilbottle",
  "Shitterton",
  "Siberia",
  "Sid's Café",
  "Skegness",
  "Sleepy Hollow",
  "the Adirondacks",
  "the Australian Outback",
  "the centre of an Aztec pyramid",
  "Le Cœur",
  "the Bat Cave",
  "the Borysthenes",
  "the Catskills",
  "the Earth's core",
  "the edgelands",
  "the Enchanted Forest",
  "the eye of a needle",
  "the Falkland Islands",
  "the Faroe Islands",
  "the Ghobi Desert",
  "the Grand Canyon",
  "the Grand Duchy of Lithuania",
  "the head of a pin",
  "the heart of darkness",
  "the Himalayas",
  "the Indian Ocean",
  "the kingdom of Bryneich",
  "the Midwest",
  "the Mojave desert",
  "the North of England",
  "the Outer Hebrides",
  "the Pastel City",
  "the Peak District",
  "the place you least expect",
  "the right bank of the Dniester",
  "the roots of an ancient #tree# tree",
  "the salt marshes",
  "the sea of Okhotsk",
  "the Shire",
  "the Solar System",
  "the space-time continuum",
  "the TARDIS",
  "the Thursbitch valley",
  "the tundra",
  "the Twilight Zone",
  "the Western Spiral Arm of the galaxy",
  "Thurgoland",
  "Tijuana",
  "Timbuktu",
  "Transcarpathia",
  "Transnistria",
  "Um Dafuq, Sudan",
  "Uranus, Missouri",
  "Vegas",
  "Viriconium",
  "Wagga Wagga",
  "Waterloo",
  "Westeros",
  "Woolloomooloo",
  "Xanadu",
  "Xixax",
  "your backyard",
  "your sock drawer"
];

const atPlace = [
  "Ox Stones",
  "Stonehenge",
  "the edge of time",
  "The Restaurant at The End of The Universe"
];

const onPlace = [
  "a mountain the size of a pinhead",
  "a static caravan site in Ingoldmells",
  "Alpha Centuri",
  "Ben Nevis",
  "Betelgeuse",
  "Broke Back Mountain",
  "Burbage Moor",
  "Earthsea",
  "Everest",
  "Flesh Hovel Lane",
  "Golgafrincham",
  "Kinder Scout",
  "Lake Titicaca",
  "Lizard Point",
  "Mars",
  "Mount Buggery",
  "Mount Doom",
  "Mount Famine",
  "Naboo",
  "Neptune",
  "Nipple Peak",
  "Oceanworld",
  "Stanage Edge",
  "Stavromula Beta",
  "Tatooine",
  "the astral plane",
  "the banks of Lake Windermere",
  "the Earth",
  "the Forest of Boland Light Railway",
  "the Frogstar",
  "the head of a pin",
  "the Old Man of Coniston",
  "the Orient Express",
  "the other side of the veil",
  "the outskirts of infinity",
  "the World of Two Moons",
  "Traal",
  "Uranus",
  "Ursa Minor Beta",
  "Vogsphere",
  "Win Hill"
];

const pilgrimageSite = [
  "#dwelling.a# #deityPlace#",
  "the nearest #dwelling#",
  "a thousand-year-old #tree# tree",
  "the holiest site #deityPlace#",
  "somewhere #deityPlace#",
  "your #relation#'s #dwelling#",
  "#worshipPlace.a# #deityPlace# and back, via #dwelling.a# #qualifiedPlace#,",
  "#adjective.a# #worshipPlace# #deityPlace#"
];

const unqualifiedPlace = ["deep beneath the ground", "six feet underground"];

const anyPlace = inPlace.concat(atPlace, onPlace);

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
  worshipPlace,
  placeName,
  inPlace,
  atPlace,
  onPlace,
  anyPlace,
  settings,
  venues,
  pilgrimageSite
};
