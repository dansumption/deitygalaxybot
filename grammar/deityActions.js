const deityCommand = [
  "#commandVerb# you to #followerAction#",
  "booms \"#followerAction.toUpperCase#\" from the sky",
  "commands you to #followerAction#",
  "compels you to #followerAction#",
  "demands that you #followerAction#",
  "mandates that you #followerAction#",
  "orders you to #followerAction#",
  "requests that you #followerAction#",
  "screams \"#followerAction.toUpperCase#\"",
  "whispers that you should #followerAction#",
  "yells \"#followerAction.toUpperCase#\"",
  "sends #bird.a# fluttering down from the sky. Tied to its leg is a note: \"#followerAction#\"",
];
const deityDoes = [
  "appears in front of you and #commandVerb# to #deityRequest# your #anyNoun#",
  "conjures #nounToPluralise.a# from thin air",
  "gestures at you #adverb#",
  "gestures at your #nounToPluralise# #adverb#",
  "rattles a tin under your nose and asks for a donation to save the #animal.s#",
  "builds #placeFull#",
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

