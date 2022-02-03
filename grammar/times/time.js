const theTimeItTakes = [
  "For a friend\nTo prove true",
  "For a locust\nTo fry",
  "For a pear\nTo ripen\nAnd spoil",
  "For a watched kettle\nTo boil",
  "For all your worst nightmares\nTo go away",
  "For an avocado\nTo ripen",
  "For bread\nTo rise",
  "For the dream\nTo disappear",
  "For the memory\nTo fade",
  "For you to forget\nWhatever you came here for",
  "For your flesh\nTo wrinkle\nIn the bath",
  "To boil a kettle",
  "To remember\nEverything"
].map(phrase => `\The time it takes\n${phrase}`);

const specificTime = [
  "bedtime",
  "daybreak",
  "Easter",
  "meantime",
  "overtime",
  "puberty",
  "today"
];

const historicTime = [
  "when the Earth was created",
  "when the universe first began to cool",
  "when an ape first picked up and used a tool",
  "when the priests of Ur first devised a system of writing",
  "when Ghengis Khan and his horde swept across Eurasia",
  "before animals learnt to speak"
];

const takesTime = [
  "a generous lunch hour",
  "a lunar cycle",
  "a tidal cycle",
  "40 winks",
  "a short pause",
  "a lengthy pause",
  "an awkward pause",
  "a pause of\nA thousand years",
  "a brief millennium",
  "a painful aeon",
  "a painful eternity",
  "no longer than\nThe flap of a hummingbird's wing",
  "a silence lasting\nA thousand years"
].concat(theTimeItTakes);

module.exports = {
  theTimeItTakes,
  specificTime,
  takesTime,
  historicTime
};
