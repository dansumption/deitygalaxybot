const deityAction = [
  "#deityCommand#",
  "#deityDoes#"
];
const deityCommand = ["#deityCommand#", "#commandVerb# you to #followerAction#",
  "booms \"#action.toUpperCase#\" from the sky",
  "commands you to #followerAction#",
  "compels you to #followerAction#",
  "demands that you #followerAction#",
  "mandates that you #followerAction#",
  "orders you to #followerAction#",
  "requests that you #followerAction#",
  "screams \"#action.toUpperCase#\"",
  "whispers that you should #followerAction#",
  "yells \"#action.toUpperCase#\"",
  "sends #bird##birdMember.a# fluttering down from the sky. Tied to its leg is a note: \"#followerAction#\""
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

