const { deityCommand } = require("./deityActions");
module.exports = {
  story: [
    // #deityName# #deityType# #deityDomain# #spiritAnimal#
    // #deityThey# #deityThem# #deityTheir# #deityTheirs#
    // #followerAction#

    "To become the #role# of #deityFull# you must first sacrifice #nounToPluralise.a# at the #festival#.",
    "When #meditationAction# #deityFull# you must #clothe# your #bodyPart# in #buildingMaterial#.",
    "The only approved way of #meditationAction# #deityFull# is to #followerAction#.",
    "In #dwelling.a# #deityPlace#, #deityFull# and #characterName# are #making#.",
    "#deityFull# loves #characterName#. #deityName# really loves #characterObject#, and #characterSubject# loves #deityThem# back.",

    '#deityFull# writes in #writingStyle# letters: "#followerAction#".',
    "Could you ever care for #deityType.a#? For #adjective.a# #deityType# like #deityName#? #deityName# is a respected authority on #deityDomain#.",
    "#deityFull# is hiring a new #role# to shake things up #deityPlace#. Are you suitably qualified?",
    "When you worship #deityName#, you #verb# #deityDomain#. In many ways, you also #deityRequest# #spiritAnimal.s#.",
    'In #dwelling.a# #deityPlace#, #deityFull# cries "eschew your #belief#, only by worshipping #deityDomain# will you be saved".',
    "#deityFull# appears in the form of #deityTheir# spirit animal, #adjective.a# #spiritAnimal#. The #spiritAnimal# looks at you #adverb# and #animalAction.s#.",

    // two people?
    "#deityFull# is #twoPersonAction# #characterName# #deityPlace#.",
    "#deityFull# is admiring #characterName# in a mirror-smooth pool of #nounNotToPluralise#.",
    "#deityFull# conjures #nounToPluralise.a# from thin air, and offers it to you. Do you accept?",
    "#deityFull# gestures at your #nounToPluralise# #adverb#. How do you respond?",
    "#deityFull# rattles a tin under your nose and asks for a donation to save the #animal.s#.",
    "#deityFull# begs you to search your soul. Can you find space for #nounNotToPluralise#?",
    "#deityFull# prompts you to examine your life. Is there room there for #nounToPluralise.s#?",
    "#deityFull# lives in #dwelling.a# #deityPlace#. Nearby, #characterName# builds #dwelling.a#.",
    "#deityFull# has a gift of #nounNotToPluralise# for the first follower to celebrate #festival#",
    "#deityFull# builds #adjective.a# #worshipPlace# to #deityDomain#. Will you worship there?",
    '#deityFull# whispers "has anyone ever told you, #characterName# looks just like #adjective.a# #famousPerson#?"',
    "#deityFull# plays with #characterName# in #band.a# #deityPlace#. CDs are on sale at the merch stall.",

    "#deityFull# asks whether you know anyone who can fix #deityTheir# #adjective# #newTech#, which is playing up again.",
    "#deityFull# cries tears of #liquid#, which form into a pool; #animal.s# gather around the pool to drink.",
    "#deityFull# pushes the first bud of #flower.a# through the earth's mantle of #buildingMaterial#.",
    '#deityFull# says "where there is #quality#, may we bring #quality#. Where there is #quality#, may we bring #quality#".',
    '#deityFull# cries "may the person who is without #quality# cast the first #miscObject#". What do you cast?',
    "#deityFull# shits out a huge mound of #buildingMaterial#. Immediately, #flower.s# start to grow out of the mound towards you...",
    "#deityFull# climbs #tree.a# tree in order to better survey #deityTheir# domain. What's that on the horizon?",
    "#deityFull# #busyActivity#.",
    "#wind.a.capitalize# stirs the #tree# trees. #deityFull# sighs #adverb#.",
    "#deityFull# created the universe in #takesTime#. But only the part of the universe that pertains to #deityDomain#.",

    "In #dwelling.a# #deityPlace#, #deityFull# is #making#.",
    "#deityFull# is #making# for the forthcoming #festival#.",
    "#deityFull# is #making#, and thinks you should do likewise.",
    "#deityFull# spends #takesTime# #meditationAction# #object#.",
    "#deityFull# just made an extremely #jokeAdjective# joke about #adjective# #nounToPluralise.s#.",
    "#deityFull# is decorating #deityTheir# #dwelling# #deityPlace#, with a wallpaper of #nounToPluralise.s# upon #nounNotToPluralise#.",

    "GOD-APPEAL: today, #festival#, the #deityType.s.capitalizeAll# Benevolent Fund issue an appeal on behalf of #deityName#, #problemDeity#.",
    "#deityFull# is usually worshipped during #festival#.",
    "In the #dwelling# of #deityFull# there's #adjective.a# #nounToPluralise# which signifies #nounNotToPluralise#.",
    "#deityFull# builds #dwelling.a# #deityPlace#. What do you put in it?",
    "When the World was young, #deityFull# introduced humanity to #deityDomain#. This led #adverb# to the discovery of #nounToPluralise.s#.",

    "Could you adopt a deity? There are literally millions of gods and godesses out there waiting for a worshipper like you. Why not worship #deityFull# today?"
  ].concat(deityCommand.map(command => `#deityFull##adverbClause#${command}.`))
};
