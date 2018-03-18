const deityAction = [
  "#deityCommand#",
  "#deityDoes#"
];
const deityCommand = ["#deityCommand#", "#commandVerb# you to #action#",
  "booms \"#action.toUpperCase#\" from the sky",
  "commands you to #action#",
  "compels you to #action#",
  "demands that you #action#",
  "mandates that you #action#",
  "orders you to #action#",
  "requests that you #action#",
  "screams \"#action.toUpperCase#\"",
  "whispers that you should #action#",
  "yells \"#action.toUpperCase#\"",
  "sends #bird##birdMember.a# fluttering down from the sky. Tied to its leg is a note: \"#action#\""
];
const deityDoes = [
  "appears in front of you and #commandVerb# to #deityRequest# your #noun#",
  "conjures #noun.a# from thin air",
  "gestures at you #simpleAdverb#",
  "is building #dwelling.a# in #placeName#",
  "is living in #dwelling.a# in #placeName#",
  "builds a small shrine to #deityDomain#",
];
const deityRequest = [
  "borrow", "impregnate", "despoil", "sit on", "fiddle with",
  "make babies with", "ennoble", "create life from",
  "begin a cult that worships", "judge"
];

module.exports = { deityAction, deityCommand, deityDoes, deityRequest };

