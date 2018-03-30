module.exports = {
  deityCommand: [
    "#commandVerb.s# you to #followerAction#",
    '#shoutVerb.s# "#followerAction.toUpperCase#" from the sky',
    '#deliverMessage# "#followerAction#"',
    'sends #bird.a# fluttering down from the sky. Tied to its leg is a note: "#followerAction#"',
    '[servant:#role#]sends #deityTheir# #servant# riding up to you on a #animal#. The #servant# #deliverMessage# "#followerAction#"',
    "#commandVerb.s# you to #deityRequest# your #anyNoun#"
  ],
  deliverMessage: [
    "hands you a note which reads",
    "sings you a ballad, which begins",
    "reads from a stone tablet the words:",
    "whispers in your ear",
    "semaphores to you the message",
    "spells out in sign-language the words",
    "hands you #miscObject.a#, on which is written",
    "whispers that you should",
    "delivers, through the medium of interpretive dance, the message"
  ],
  deityDoes: [
    "appears in the form of #deityTheir# spirit animal, #adjective.a# #spiritAnimal#. The #spiritAnimal# looks at you #adverb# and #animalVerb.s#",
    "conjures #nounToPluralise.a# from thin air",
    "gestures at you #adverb#",
    "gestures at your #nounToPluralise# #adverb#",
    "rattles a tin under your nose and asks for a donation to save the #animal.s#",
    "builds #dwelling.a# #qualifiedPlace#",
    "lives #dwelling.a# #qualifiedPlace#",
    "builds #adjective.a# #worshipPlace# to #deityDomain#",
    "asks whether you know anyone who can fix #deityTheir# #adjective# #newTech#, which is playing up again",
    "cries tears of #liquid#, which form into a pool; #animal.s# gather around the pool to drink"
    // "cries tears of joy for unicorns to drink",
    // "shits on the earth to grow roses",
  ],
  busyActivity: [
    "is having a #liquid# shower",
    "has a #adjective# headache",
    "shuffles away #adverb#",
    "shoots you a look that could kill"
  ],
  busyInstruction: [
    ". Come back later",
    ", and can't talk to you right now",
    ". Perhaps this is not the best time to call?",
    ". They might respond if you call a little louder?",
    ". Maybe you ought to respect #deityName#'s privacy a little more?"
  ],
  deityMaking: [
    "spinning a web from #buildingMaterial#",
    "crocheting a blanket of #buildingMaterial#",
    "erecting #worshipPlace.a# made of #buildingMaterial#",
    "constructing #dwelling.a# out of #buildingMaterial#",
    "building a simulacrum of #deityThem#self out of #buildingMaterial#",
    "sculpting idols from #buildingMaterial#",
    "growing #flower.s# and #flower.s# in a compost of #buildingMaterial#"
  ],
  deityRequest: [
    "borrow",
    "impregnate",
    "despoil",
    "sit on",
    "fiddle with",
    "make babies with",
    "ennoble",
    "create life from",
    "begin a cult that worships",
    "judge"
  ],

  godToGodActivity: [
    "playing #game# with",
    "comparing #nounToPluralise.s# with",
    "chewing the fat with",
    "trying to build a bigger #worshipPlace# than",
    "cooking some #foodItem.s# for"
  ]
};
