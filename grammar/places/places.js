// const helperUtils = require('../../utils/helperUtils');

const atPlace = require("./atPlace");
const dwellings = require("./dwelling");
const inPlace = require("./inPlace");
const onPlace = require("./onPlace");
const pilgrimageSite = require("./pilgrimageSite");
const room = require("./room");
const unqualifiedPlace = require("./unqualifiedPlace");
const worshipPlace = require("./worshipPlace");

const corpora = require("corpora-project");
const settings = corpora
  .getFile("archetypes", "setting")
  .settings.reduce(
    (allSettings, currentSetting) =>
      allSettings.concat(currentSetting.synonyms.concat([currentSetting.name])),
    []
  );

const venues = corpora
  .getFile("geography", "venues")
  .categories.reduce(
    (allVenues, currentCategory) =>
      allVenues.concat(
        currentCategory.categories.map(category =>
          category.name.replace(/\(.*\)/, "").replace(/.* \/ (.*)/, "$1")
        )
      ),
    []
  );

const anyPlace = inPlace.concat(atPlace, onPlace);

const fillOutArray = (arr, phrase) => {
  arr.map(item => `${phrase} ${item}`);
};
const dwelling =
  //  fillOutArray(
  dwellings;
// .concat(settings, room, venues, worshipPlace)
// .map(item => `#adjective.a# #adjective# ${item}`);
// );

const qualifiedPlace = unqualifiedPlace.concat(
  atPlace.map(place => `at ${place}`),
  inPlace.map(place => `in ${place}`),
  onPlace.map(place => `on ${place}`)
);

const fullPlace = [
  "#adverb.a# #adjective#\n#adjective.capitalize# #dwelling#\n#qualifiedPlace.capitalize#"
];
const placeName = atPlace.concat(inPlace, onPlace);
module.exports = {
  anyPlace,
  atPlace,
  dwelling,
  fullPlace,
  inPlace,
  onPlace,
  pilgrimageSite,
  placeName,
  qualifiedPlace,
  room,
  settings,
  unqualifiedPlace,
  venues,
  worshipPlace
};
