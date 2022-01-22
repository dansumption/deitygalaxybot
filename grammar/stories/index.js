const followerActions = require("./followerActions");
const deityActions = require("./deityActions");
const replyPrompt = require("./replyPrompts");
const replyStory = require("./replyStory");
const stating = require("./stating");
const questioning = require("./questioning");
const instructing = require("./instructing");
const doing = require("./doing");
const particulars = require("./particulars");
const punishment = require("./punishment");

const story = {
  story: particulars
};

module.exports = Object.assign(
  {},
  story,
  replyStory,
  deityActions,
  followerActions,
  { questioning, instructing, stating, doing, punishment, replyPrompt }
);
