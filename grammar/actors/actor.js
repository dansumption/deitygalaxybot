module.exports = {
  setPronouns: [
    "[pronounSubject:they][pronounObject:them][pronounPossesive:their][pronounPossesives:theirs]",
    "[pronounSubject:she][pronounObject:her][pronounPossesive:her][pronounPossesives:hers]",
    "[pronounSubject:he][pronounObject:him][pronounPossesive:his][pronounPossesives:his]",
    "[pronounSubject:it][pronounObject:it][pronounPossesive:its][pronounPossesives:its]"
  ],

  setCharacter: [
    "[characterName:you][characterSubject:you][characterObject:you][characterPossesive:your][characterPossesives:yours]",
    "#setPronouns#[characterName:#name# the #role#][characterSubject:#pronounSubject#][characterObject:#pronounObject#][characterPossesive:#pronounPossesive#][characterPossesives:#pronounPossesives#]",
    "#setPronouns#[characterName:#adjective.a# #role#][characterSubject:#pronounSubject#][characterObject:#pronounObject#][characterPossesive:#pronounPossesive#][characterPossesives:#pronounPossesives#]",
    "#setPronouns#[characterName:#otherDeity#][characterSubject:#pronounSubject#][characterObject:#pronounObject#][characterPossesive:#pronounPossesive#][characterPossesives:#pronounPossesives#]",
    "#setPronouns#[characterName:#deityTheir.capitalize#self][characterSubject:#deityThey.capitalize#][characterObject:#deityThem.capitalize#][characterPossesive:#deityTheir.capitalize#][characterPossesives:#deityTheirs.capitalize#]"
  ]
};
