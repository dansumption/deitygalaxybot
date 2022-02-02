const macros = require("./macros");

const origin = {
  origin: [`${macros}#setDeity##setCharacter##initialStory#\n\n#replyPrompt#`],
  replyOrigin: [`${macros}#userHandle#\n#initialStory#\n\n#initialReply#`],
  replyWithDeity: [`${macros}#userHandle#\n#replyStory#`],
  replyWithLostDeity: [
    // TODO: add more variety beyond the "another deity has taken their place" schtick.
    `${macros}#userHandle# You call your deity, but another has taken their place. #origin#`
  ],
  searchOrigin: [
    `${macros}Deep beneath the Earth, the goddess Rheða sighs, and the ground around #placeName# quivers, giving #userHandle# belly-butterflies. It must be #today#.`
  ]
};

module.exports = origin;
