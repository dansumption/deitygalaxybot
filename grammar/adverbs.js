

const adverbs = Array(10).fill(" ");
const simpleAdverb = ["angrily", "innocently", "kindly",
  "mysteriously", "impishly", "curiously", "malevolently", "imperiously",
  "furiously", "gently", "smoothly", "cantankerously", "avuncularly"
];
const complexAdverb = ["after a pause of a thousand years", "for no good reason",
  "in a funny voice", "on the spur of the moment",
  "out of pure malevolence", "in the space between being and nothingness"
];

const commandAdverb = adverbs
  .concat(simpleAdverb.map(adverb => ` ${adverb} `))
  .concat(complexAdverb.map(adverb => `, ${adverb}, `));

module.exports = { commandAdverb, simpleAdverb };

