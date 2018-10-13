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
  "modern",
  "thrash",
  "ambient",
  "avant-garde",
  "dub",
  "illwave",
  "vaporwave",
  "psychedelic",
  "skronk",
  "queercore",
  "old-time",
  "nostalgic",
  "electro",
  "spoken-word",
  "Gloranthawave",
  "moptop",
  "parent-friendly",
  "accoustic",
  "new-wave",
  "no-wave",
  "indie",
  "ill-advised",
  "silent",
  "minimalist",
  "maximalist"
];

const bandType = [
  "jazz",
  "synth",
  "pop",
  "classical",
  "K-pop",
  "metal",
  "rock",
  "acapella",
  "folk",
  "country music",
  "linedancing",
  "punk",
  "blues",
  "bluegrass",
  "breakbeat",
  "dubstep",
  "house"
];

const naffArtist = [
  "Chas & Dave",
  "Justin Bieber",
  "Babymetal",
  "Steps",
  "Val Doonican",
  "Mumford & Sons",
  "Pulp",
  "Adam & the Ants",
  "Oasis",
  "Bob Dylan",
  "Slipknot",
  "Kanye",
  "Dolly Parton",
  "Carly Rae Jepson",
  "Nine Inch Nails",
  "Judas Priest",
  "Iron Maiden",
  "Elton John",
  "Liam Gallagher",
  "Monkees",
  "Mike Naismith",
  "Bay City Rollers",
  "S-Club Juniors",
  "Take That",
  "Backstreet Boys",
  "Captain Beefheart",
  "Philip Glass",
  "Terry Riley",
  "Jimi Hendrix",
  "Kids from Fame",
  "Ludwig van Beethoven",
  "Amon Düül II",
  "Plus-Tech Squeezebox",
  "Soft Machine",
  "Rolling Stones",
  "Missy Elliot"
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
