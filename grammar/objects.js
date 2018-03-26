module.exports = {
  abstractObject: ["word", "allegation", "allegiance", "allegory"],

concreteObject: ["advert", "advertisement"],

clothing: ["waistcoat", "sweater", "moccasin", "clown shoe"],

weapon: ["bow & arrow", "assault rifle"],

householdObject: [
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
],

foodStuff: [
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
  "cider",
  "bread",
  "toast",
  "curry",
  "salt",
  "butter"
],

foodItem: [
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
  "cream cracker",
  "croissant",
  "biscuit",
  "cake",
  "sandwich",
  "pie"
],

bodyPart: [
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
  "erogenous zone",
  "tongue",
  "hair",
  "left buttock",
  "right buttock",
  "arm",
  "thigh",
  "vein",
  "nerve",
  "fingernail",
  "toenail",
  "left nostril",
  "right nostril",
  "eye",
  "lip",
  "ear canal",
  "tooth",
  "epidermis",
  "elbow",
  "arse",
  "breast"
],

vehicle: [
  "aircraft",
  "ambulance",
  "bicycle",
  "tractor",
  "schooner",
  "scooter",
  "Supertram",
  "frigate"
],

computerObject: [
  "zip file",
  "GIF",
  "lambda function",
  "cursor",
  "#adjective# error",
  "stack overflow",
  "python script",
  "database",
  "virus",
  "Trojan horse",
  "pixel",
  "cure for cancer",
  "game",
  "algorithm",
  "folder",
  "alert",
  "pop-up",
  "browser window"
],

game: [
  "chess",
  "Chinese checkers",
  "draughts",
  "Settlers of Catan",
  "Populous",
  "Carcasonne",
  "backgammon",
  "Secret Hitler",
  "Sims",
  "Civilization",
  "Call of Duty",
  "GTA",
  "hide & seek",
  "tic tac toe",
  "football",
  "Monopoly",
  "Cluedo",
  "tig"
],

nounToPluralise: abstractObject.concat(
  abstractObject,
  concreteObject,
  bodyPart,
  clothing,
  computerObject,
  householdObject,
  vehicle,
  weapon,
  foodItem
),
};
