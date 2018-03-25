const abstractObject = ["word", "allegation", "allegiance", "allegory"];

const concreteObject = ["advert", "advertisement"];

const clothing = ["waistcoat", "sweater", "moccasin", "clown shoe"];

const weapon = ["bow & arrow", "assault rifle"];

const householdObject = [
  "banjo",
  "barrier",
  "basin",
  "battery",
  "belisha beacon",
  "cassette",
  "coaster",
  "computer monitor",
  "dank meme",
  "detox",
  "dollar",
  "dolls' house",
  "doorstep",
  "doorway",
  "drinking fountain",
  "e-cigarette",
  "elbow patch",
  "embroidery",
  "thermos flask",
  "fruitbowl",
  "fry-up",
  "fuck-up",
  "gubbins",
  "hallway",
  "hammock",
  "headset",
  "hearth",
  "laser",
  "lampshade",
  "mainframe",
  "microwave",
  "monolith",
  "novella",
  "porno",
  "projector",
  "prospectus",
  "recipe",
  "refrigerator",
  "roadblock",
  "rock",
  "rood screen",
  "safety barrier",
  "saucer",
  "semiconductor",
  "shitstorm",
  "snapshot",
  "souvenir",
  "staircase",
  "stairway",
  "stylus",
  "tablespoon",
  "telephone",
  "thriller",
  "treadmill",
  "tricycle",
  "ventilation shaft",
  "wardrobe",
  "wedding list",
  "white goods",
  "widget"
];

const foodStuff = [
  "fruit",
  "carbohydrates",
  "protein",
  "rice",
  "pasta",
  "lasagne",
  "gin",
  "whisky",
  "absinthe",
  "kümmel",
  "beer",
  "IPA"
];

const foodItem = [
  "blackberry",
  "pretzel",
  "potato",
  "noodle",
  "burrito",
  "cabbage",
  "mango",
  "magic bean",
  "latte",
  "jelly roll",
  "hamburger",
  "cheesecake",
  "chilli",
  "coconut",
  "cream cracker"
];

const bodyPart = [
  "Achilles heel",
  "ankle",
  "appendix",
  "asshole",
  "tendon",
  "left testicle",
  "right testicle",
  "forefinger",
  "subcutaneous layer",
  "ticker",
  "bone",
  "neuroreceptor",
  "metatarsal",
  "carpal tunnel",
  "sphincter",
  "love handle",
  "ligament",
  "heart",
  "head",
  "hand",
  "genital",
  "erogenous zone"
];

const vehicle = [
  "aircraft",
  "ambulance",
  "bicycle",
  "tractor",
  "schooner",
  "scooter",
  "Supertram",
  "frigate"
];

const computerObject = [
  "zip file",
  "GIF",
  "lambda function",
  "cursor",
  "error"
];

const nounToPluralise = abstractObject.concat(
  abstractObject,
  concreteObject,
  bodyPart,
  clothing,
  computerObject,
  householdObject,
  vehicle,
  weapon,
  foodItem
);

module.exports = {
  abstractObject,
  concreteObject,
  bodyPart,
  clothing,
  computerObject,
  householdObject,
  vehicle,
  weapon,
  foodItem,
  foodStuff,
  nounToPluralise
};
