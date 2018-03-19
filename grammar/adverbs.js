const corpora = require('corpora-project');

const allAdverbs = corpora.getFile('words', 'adverbs').adverbs;


const spaces = Array(30).fill(" ");
const adverbClause = ["after a pause of a thousand years", "for no good reason",
  "in a funny voice", "on the spur of the moment",
  "out of pure malevolence", "in the space between being and nothingness"
]
  .map(adverb => `, ${adverb}, `)
  .concat(spaces);
const adverb = ["angrily", "innocently", "kindly",
  "mysteriously", "impishly", "curiously", "malevolently", "imperiously",
  "furiously", "gently", "smoothly", "cantankerously", "avuncularly"
].concat(allAdverbs);

module.exports = { adverbClause, adverb };

