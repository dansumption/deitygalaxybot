module.exports = {
  setDeity: [
    "#deityPronouns#" +
      "[deityName:#name#]" +
      "[deityType:#godType#]" +
      "[deityDomain:#domain#]" +
      "[spiritAnimal:#animal#]" +
      "[spiritBird:#bird#]" +
      "[deityPlace:#qualifiedPlace#]"
  ],
  deityFull: ["#deityName#, #deityType# of #deityDomain#,"],
  otherDeity: ["#name# #godType# of #domain#"],
  deityPronouns: [
    "[#setPronouns#][deityThey:#pronounSubject#][deityThem:#pronounObject#][deityTheir:#pronounPossesive#][deityTheirs:#pronounPossesives#]"
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
  ],
  problemDeity: [
    "who is losing control of #deityDomain#",
    "struggling #deityType# of #deityDomain#",
    "the disgraced former #deityType# of #deityDomain#",
    "the #deityType# whose domain over #deityDomain# has been brought into question",
    "who nobody likes any more",
    "who nobody ever really liked anyway",
    "(I know, right: WHO???)"
  ]
};
