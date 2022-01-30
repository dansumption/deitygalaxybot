const deityActions = require("./deityActions");
const doing = require("./doing");
const followerActions = require("./followerActions");
const initialStory = require("./initialStory");
const instructing = require("./instructing");
const punishment = require("./punishment");
const questioning = require("./questioning");
const replyPrompt = require("./replyPrompts");
const replyStory = require("./replyStory");
const stating = require("./stating");
const storyChunks = require("./storyChunks");

module.exports = Object.assign(
  {},
  replyStory,
  deityActions,
  followerActions,
  storyChunks,
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
