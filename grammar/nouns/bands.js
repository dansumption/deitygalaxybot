const bandSize = [
  "solo act",
  "duo",
  "trio",
  "quartet",
  "quintet",
  "sextet",
  "sextett",
  "septet",
  "octet",
  "nontet",
  "noncetet",
  "dectet",
  "tentet",
  "dodecatet",
  "heptodecatet",
  "orchestra",
  "outfit",
  "band",
  "group",
  "collective"
];

const bandGenre = [
  "accoustic",
  "ambient",
  "avant-garde",
  "dub",
  "electro",
  "fusion",
  "Gloranthawave",
  "happy house",
  "hip-hop",
  "ill-advised",
  "illwave",
  "indie",
  "jazzy",
  "maximalist",
  "minimalist",
  "modern",
  "moptop",
  "new-wave",
  "no-wave",
  "nostalgic",
  "old-time",
  "parent-friendly",
  "psychedelic",
  "queercore",
  "R&B",
  "silent",
  "skronk",
  "spoken-word",
  "thrash",
  "vaporwave"
];

const bandType = [
  "acapella",
  "bluegrass",
  "blues",
  "breakbeat",
  "classical",
  "country music",
  "dubstep",
  "folk",
  "house",
  "jazz",
  "K-pop",
  "linedancing",
  "metal",
  "pop",
  "punk",
  "rock",
  "synth"
];

const naffArtist = [
  "Adam & the Ants",
  "Amon Düül II",
  "Babymetal",
  "Backstreet Boys",
  "Bay City Rollers",
  "Bob Dylan",
  "Captain Beefheart",
  "Carly Rae Jepson",
  "Chas & Dave",
  "Dolly Parton",
  "Elton John",
  "Iron Maiden",
  "Jimi Hendrix",
  "Judas Priest",
  "Justin Bieber",
  "Kanye",
  "Kids from Fame",
  "Liam Gallagher",
  "Ludwig van Beethoven",
  "Mike Naismith",
  "Missy Elliot",
  "Mumford & Sons",
  "Nine Inch Nails",
  "Oasis",
  "Philip Glass",
  "Plus-Tech Squeezebox",
  "Pulp",
  "Rolling Stones",
  "S-Club Juniors",
  "Slipknot",
  "Soft Machine",
  "Steps",
  "Take That",
  "Terry Riley",
  "The Beatles",
  "The Monkees",
  "Val Doonican"
];

const band = [
  "#bandGenre# #bandType# #bandSize#",
  "#bandGenre# #naffArtist# covers-band"
];

const musician = [
  "bassist",
  "guitarist",
  "lead guitarist",
  "rhythm guitarist",
  "drummer",
  "vocalist",
  "lead singer",
  "backing singer",
  "dancer",
  "flautist",
  "saxophonist",
  "groupie",
  "violinist",
  "oboe player"
];

const bandStory = [
  "CDs are on sale at the merch stall",
  "They are looking for a new #musician#",
  "Their latest EP got a great review in The Quietus",
  "Their new single has been on heavy rotation on Six Music recently",
  "Check their Soundcloud",
  "They're in the middle of putting together a Bandcamp"
];

module.exports = {
  band,
  bandGenre,
  bandSize,
  bandType,
  naffArtist,
  musician,
  bandStory
};
