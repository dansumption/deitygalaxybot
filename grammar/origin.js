const macros = require("./macros");

const origin = {
  origin: [`${macros}#setDeity##setCharacter##story#`],
  replyOrigin: [`${macros}#userHandle# #initialReply#`],
  replyWithDeity: [`${macros}#userHandle# #replyStory#`],
  replyWithLostDeity: [
    `${macros}#userHandle# You call your deity, but another has taken their place. #origin#`
  ],
  searchOrigin: [
    `${macros}Deep beneath the Earth, the goddess Rheða sighs, and the ground around #placeName# quivers, giving #userHandle# belly-butterflies. It must be #today#.`
  ]
};

module.exports = origin;
