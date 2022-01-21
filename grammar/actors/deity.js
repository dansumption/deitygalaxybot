// TODO: stop compound deity names from getting too long.
module.exports = {
  setDeity: [
    "#deityPronouns#" +
      "[deityName:#name#]" +
      "[deityType:#godType#]" +
      "[deityDomain:#domain#]" +
      "[spiritAnimal:#animal#]" +
      "[spiritBird:#bird#]" +
      "[deityPlace:#qualifiedPlace#]" +
      "[deityPunishment:#punishment#]"
  ],
  deityFull: ["#deityName#, #deityType# of #deityDomain#,"],
  otherDeity: ["#name# #godType# of #domain#"],
  deityPronouns: [
    "[#setPronouns#][deityThey:#pronounSubject#][deityThem:#pronounObject#][deityTheir:#pronounPossesive#][deityTheirs:#pronounPossesives#]"
  ],
  godType: [
    "#godlyAdjective# #godType#",
    "#raregodType#",
    "god",
    "goddess",
    "godhead",
    "patron saint"
  ],
  raregodType: [
    "angel",
    "archangel",
    "archbishop",
    "archdemon",
    "atua",
    "celestial being",
    "creator",
    "demigod",
    "demiurge",
    "demon",
    "deva",
    "divinity",
    "egregore",
    "goddexx",
    "hedgewitch",
    "hierophant",
    "household deity",
    "idol",
    "numen",
    "pope",
    "procreator",
    "progenitor",
    "supreme being"
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
    "#nounToPluralise.a# in #town#",
    "#nounNotToPluralise#",
    "#newTech#"
    // "#domain# and #domain#"
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
