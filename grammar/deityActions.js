const deityCommand = [
  "#commandVerb.s# you to #followerAction#",
  "#shoutVerb.s# \"#followerAction.toUpperCase#\" from the sky",
  "whispers that you should #followerAction#",
  "sends #bird.a# fluttering down from the sky. Tied to its leg is a note: \"#followerAction#\"",
  "[servant:#role#]sends #deityTheir# #servant# riding up to you on a #animal#. The #servant# hands you a note which reads \"#followerAction#\"",
];
const deityDoes = [
  "appears in front of you and #commandVerb.s# to #deityRequest# your #anyNoun#",
  "conjures #nounToPluralise.a# from thin air",
  "gestures at you #adverb#",
  "gestures at your #nounToPluralise# #adverb#",
  "rattles a tin under your nose and asks for a donation to save the #animal.s#",
  "builds #dwelling.a# #qualifiedPlace#",
  "lives #placeFull#",
  "builds #adjective.a# #worshipPlace# to #deityDomain#",
  "asks whether you know anyone who can fix #deityTheir# #adjective# #newTech#, which is playing up again",
  // "cries tears of joy for unicorns to drink",
  // "shits on the earth to grow roses",
];
const deityMaking = [
  "spinning a web from #buildingMaterial#",
  "crocheting a blanket of #buildingMaterial#",
  "erecting #worshipPlace.a# made of #buildingMaterial#",
  "constructing #dwelling.a# out of #buildingMaterial#",
  "building a simulaca of #deityTheir#self out of #buildingMaterial#",
  "sculpting idols from #buildingMaterial#",
  "growing #flower.s# and #flower.s# in well-composted #buildingMaterial#"
];
const deityRequest = [
  "borrow", "impregnate", "despoil", "sit on", "fiddle with",
  "make babies with", "ennoble", "create life from",
  "begin a cult that worships", "judge"
];

module.exports = { deityCommand, deityDoes, deityRequest, deityMaking  };

