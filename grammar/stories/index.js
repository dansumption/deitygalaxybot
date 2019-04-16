const followerActions = require("./followerActions");
const deityActions = require("./deityActions");
const replyStory = require("./replyStory");
const stating = require("./stating");
const questioning = require("./questioning");
const instructing = require("./instructing");
const doing = require("./doing");

const story = {
  story: [].concat(stating, questioning, instructing, doing)
};

module.exports = Object.assign(
  {},
  story,
  replyStory,
  deityActions,
  followerActions,
  { questioning, instructing, stating, doing }
);
