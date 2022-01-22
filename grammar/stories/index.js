const followerActions = require("./followerActions");
const deityActions = require("./deityActions");
const replyPrompt = require("./replyPrompts");
const replyStory = require("./replyStory");
const stating = require("./stating");
const questioning = require("./questioning");
const instructing = require("./instructing");
const doing = require("./doing");
const initialStory = require("./initialStory");
const punishment = require("./punishment");

module.exports = Object.assign(
  {},
  story,
  replyStory,
  deityActions,
  followerActions,
  {
    initialStory,
    questioning,
    instructing,
    stating,
    doing,
    punishment,
    replyPrompt
  }
);
