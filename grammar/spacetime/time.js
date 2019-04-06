const theTimeItTakes = [
  "to boil a kettle",
  "for a watched kettle to boil",
  "for an avocado to ripen",
  "for a pear to ripen and spoil",
  "for a Facebook friend to find you on Instagram",
  "to remember that time is money",
  "for a locust to fry",
  "for your flesh to wrinkle in the bath"
].map(phrase => `the time it takes ${phrase}`);

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
  "a pause of a thousand years",
  "a brief millennium",
  "a painful aeon",
  "a painful wait",
  "the flap of a hummingbird's wing",
  "a silence lasting a thousand years",
  "an uncomfortable silence"
].concat(theTimeItTakes);

module.exports = {
  theTimeItTakes,
  specificTime,
  takesTime,
  historicTime
};
