const corpora = require("corpora-project");
const nounNotToPluralise = require("./noun-uncountable");
module.exports = {
  buildingMaterial: [
    "human hair",
    "tears",
    "darkness",
    "sorrow",
    "glass and steel",
    "polycarbon",
    "sand",
    "planished copper",
    "burnished gold",
    "sterling silver",
    "pig iron",
    "human cares",
    "human woe",
    "human happiness",
    "tweets",
    "human bones",
    "sheep skulls",
    "chitin",
    "insects",
    "clay and sheep dung",
    "#animal# blood",
    "jellyfish",
    "cartilage",
    "grammar",
    "hate",
    "happiness",
    "memories",
    "cornstarch",
    "diet Coke and Mentos",
    "greenery",
    "weapons-grade plutonium",
    "tears of the departed",
    "timber of a thousand-year-old #tree#",
    "iron forged in the fires of #placeName#",
    "life",
    "death",
    "taxes",
    "Euros"
  ],

  newTech: corpora.getFile("technology", "new_technologies").technologies,

  anyNoun: ["#nounNotToPluralise#", "#nounToPluralise#"]
};
