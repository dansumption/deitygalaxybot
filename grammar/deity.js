module.exports = {
  setDeity: [
    "[deityName:#name#][deityType:#godType#][deityDomain:#domain#][spiritAnimal:#animal#]",
  ],
  "name": [
    "#namePart.capitalize#", "#namePart.capitalize##namePart#"
  ],
  "godType": [
    "#godlyAdjective# #godType#", "#godlyAdjective# #godType#",
    "#raregodType#", "archbishop", "demon", "god", "god",
    "goddess", "goddess", "patron saint", "pope", "archdemon"
  ],
  "raregodType": [
    "creator", "demiurge", "hedgewitch", "hierophant",
    "numen", "procreator", "progenitor"
  ],
  "godlyAdjective": [
    "absolute", "all-powerful", "antediluvian",
    "beloved", "despised", "divine", "evil", "exalted",
    "immortal", "infinite", "irrepressible",
    "most #godlyAdjective#", "overrated", "primordal",
    "sublime", "supreme", "timeless", "unavoidable",
    "underrated", "wicked", "widely ignored",
    "#adjective#",
  ],

  "domain": [
    "#nounToPluralise.s#", "#nounNotToPluralise#", "#newTech#",
    "#nounToPluralise.s#", "#nounNotToPluralise#", "#newTech#",
    "#nounToPluralise.s#", "#nounNotToPluralise#", "#newTech#",
    "#domain# and #domain#"
  ],


  "namePart": [
    "#syllable#", "#syllable#-#syllable#", "#syllable#'#syllable#", "#syllable##syllable#", "#syllable##syllable##syllable#"
  ],
  "syllable": [
    "#consonant##vowel#", "#vowel##consonant#"
  ],
  "consonant": [
    "#rareConsonant#", "b", "c", "ch", "cl", "cr", "d", "f", "g", "h", "j", "k", "kl", "kr", "l", "m", "m", "p", "ph", "qu", "r", "s", "st", "t", "th", "v", "w", "x", "y", "z", "zh"
  ],
  "rareConsonant": [
    "bb", "bh", "cc", "ck", "cs", "ct", "cw", "cz", "db", "dd", "jh", "ll", "mn", "ð", "þ", "pt", "q", "xx"
  ],
  "vowel": [
    "#rareVowel#", "a", "ae", "au", "e", "ea", "ee", "ei", "eo", "eu", "i", "ie", "io", "o", "oi", "oo", "ou", "u", "uo"
  ],
  "rareVowel": [
    "ä", "aï", "ao", "ay", "ï", "ia", "iu", "ö", "oa", "oe", "ü", "ua", "ue", "uu", "üü"
  ],
}