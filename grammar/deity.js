module.exports = {
  setDeity: [
    "#setPronouns#" +
      "[deityName:#name#]" +
      "[deityType:#godType#]" +
      "[deityDomain:#domain#]" +
      "[spiritAnimal:#animal#]" +
      "[spiritBird:#bird#]" +
      "[deityPlace:#qualifiedPlace#]"
  ],
  deityFull: ["#deityName#, #deityType# of #deityDomain#,"],
  otherDeity: ["#name# #godType# of #domain#"],
  setPronouns: [
    "[deityThey:they][deityThem:them][deityTheir:their][deityTheirs:theirs]",
    "[deityThey:she][deityThem:her][deityTheir:her][deityTheirs:hers]",
    "[deityThey:he][deityThem:him][deityTheir:his][deityTheirs:his]",
    "[deityThey:it][deityThem:it][deityTheir:its][deityTheirs:its]"
  ],
  godType: [
    "#godlyAdjective# #godType#",
    "#godlyAdjective# #godType#",
    "#raregodType#",
    "archbishop",
    "demon",
    "god",
    "god",
    "goddess",
    "goddess",
    "patron saint",
    "pope",
    "archdemon"
  ],
  raregodType: [
    "creator",
    "demiurge",
    "hedgewitch",
    "hierophant",
    "numen",
    "procreator",
    "progenitor"
  ],
  godlyAdjective: [
    "#adjective#",
    "absolute",
    "all-powerful",
    "antediluvian",
    "beloved",
    "despised",
    "divine",
    "evil",
    "exalted",
    "immortal",
    "infinite",
    "irrepressible",
    "most #godlyAdjective#",
    "overrated",
    "primordal",
    "sublime",
    "supreme",
    "timeless",
    "unavoidable",
    "underrated",
    "wicked",
    "widely ignored"
  ],
  domain: [
    "#nounToPluralise.s#",
    "#nounNotToPluralise#",
    "#newTech#",
    "#nounToPluralise.s#",
    "#nounNotToPluralise#",
    "#newTech#",
    "#nounToPluralise.s#",
    "#nounNotToPluralise#",
    "#newTech#",
    "#nounToPluralise.s#",
    "#nounNotToPluralise#",
    "#newTech#",
    "#domain# and #domain#"
  ]
};
