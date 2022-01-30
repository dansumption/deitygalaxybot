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
const dwelling = dwellings.concat(settings, venues, worshipPlace);
const qualifiedPlace = unqualifiedPlace.concat(
  atPlace.map(place => `at ${place}`),
  inPlace.map(place => `in ${place}`),
  onPlace.map(place => `on ${place}`)
);
const placeName = atPlace.concat(inPlace, onPlace);
module.exports = {
  anyPlace,
  atPlace,
  dwelling,
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
