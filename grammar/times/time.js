const theTimeItTakes = [
  "For a friend to prove true",
  "For a locust to fry",
  "For a pear to ripen and spoil",
  "For a watched kettle to boil",
  "For all your worst nightmares to go away",
  "For an avocado to ripen",
  "For bread to rise",
  "For the dream to disappear",
  "For the memory to fade",
  "For you to forget what you came here for",
  "For your flesh to wrinkle in the bath",
  "To boil a kettle",
  "To remember everything"
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
  "a pause of a thousand years",
  "a brief millennium",
  "a painful aeon",
  "a painful eternity",
  "no longer than the flap of a hummingbird's wing",
  "a silence lasting a thousand years"
].concat(theTimeItTakes);

module.exports = {
  theTimeItTakes,
  specificTime,
  takesTime,
  historicTime
};
