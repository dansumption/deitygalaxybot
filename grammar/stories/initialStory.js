// TODO - more about how deities look
module.exports = [
  `In #deityPlace#, 
#deityClause#,
#actionClause#.
`,

  `#deityClause#,
From #deityPlace#,
#actionClause#.
`,

  `
#deityClause#,
#actionClause#,
Near #deityPlace#.
`,

  `We worship
#deityClause#,
Join us!
#followerAction.capitalize#
At #deityPlace#.
`,

  `When #deityClause#
Is Angered
All who offend them
Will be #deityPunishment#
In #deityPlace#.
`,

  `On #festival#
In #deityPlace#
We gather
To worship
#deityClause#.
`,

  `
#deityClause#
Takes the form
Of #adjective.a# #animal#
Wearing #buildingMaterial#
Yet #adverb# more #adjective#.
`,

  `#deityClause#
Appears in #deityPlace#
With #adjective.a# #bodyPart#
And #nounToPluralise.a#.
`,

  `#deityClause#
Wears #adjective.a# #clothing#
Made of #colours# #buildingMaterial#,
When #verbIng#
In #deityPlace#.
`,

  `#deityClause#
Sits in #deityPlace#,
Their #bodyPart#
Growing #moreOrLess# #adjective#
This a sign
That #deityName# feels
#adjective.capitalize#.
`

  // "The #bodyPart# of #deityFull# is made of #adjective# #buildingMaterial# but #deityTheir# #bodyPart# feels more like #buildingMaterial#.",
  // "#deityFull# has #bodyPart.a# of #buildingMaterial#, #bodyPart.a# of #buildingMaterial# & #bodyPart.a# of #buildingMaterial#, but remains #adjective#.",
  // "#deityFull# looks like #adjective.a# #famousPerson# made of #buildingMaterial#, but #moreOrLess# #adjective#."
  // "Wanna know what I just saw #deityFull# do?",
  // "Sometimes I suspect that there are more deities than worshippers. Who ever heard of #deityFull#?",
  // "Summoning gods can be a dangerous business. Who just summoned #deityFull#",
  // "The gods can sense that you need guidance. #deityFull# is awaiting your call.",
  // "To perform obesiance to #deityFull# #followerAction#.",
  // "To perform service to #deityFull# #deityRequest# your #anyNoun#.",
  // "Those who anger #deityFull# are liable to be #deityPunishment#.",
  // "#deityFull# exists purely #reason#.",
  // "Those who value #deityDomain# should pledge their soul to #deityName#, for #deityName# is #deityType# of #deityDomain#.",
  // "#deityFull# has a spirit animal: #adjective.a# #spiritAnimal#.",
  // "GOD-APPEAL: today, #festival#, the #deityType.s.capitalizeAll# Benevolent Fund issue an appeal on behalf of #deityName#, #problemDeity#.",
  // "Could you adopt a deity? There are literally millions of gods and godesses out there waiting for a worshipper like you. For example, #deityFull# could do with a new #role#.",
  // "In #dwelling.a# #deityPlace#, #deityFull# is #making#.",
  // "It is traditional to eat #anyFood# on #festival#, to guarantee the goodwill of #deityFull# over the following year.",
  // "The only approved way of #meditating# #deityFull# is to #followerAction#. Reply to this tweet if you reckon you're up to that.",
  // "To become the #role# of #deityFull# you must first sacrifice #nounToPluralise.a# at the #festival#.",
  // "When #meditating# #deityFull# you must #wear# your #bodyPart# in #buildingMaterial# #reason#.",
  // "When you are #making#, be sure to spend time #meditating# #deityFull# for that way lies #abstract#.",
  // "#deityFull# has been trapped in #dwelling.a# for #takesTime#. They were lured there by #name#, #godType# of #domain#, using #nounToPluralise.a#.",
  // "#deityFull# lives in #dwelling.a# #deityPlace#. Nearby, #characterName# builds #dwelling.a#.",
  // "#deityName# became #deityType# of #deityDomain# after beating #deityTheir# #relative# #name# in #contest.a#.",
  // "#historicTime.capitalize#, #deityFull# created #nounToPluralise.a# and called it #adjective.capitalize# #namePart.capitalize#.",
  // "Could you ever care for #deityType.a#? For #adjective.a# #deityType# like #deityName#? #deityName# is a respected authority on #deityDomain#.",
  // "In the #dwelling# of #deityFull# there's #adjective.a# #nounToPluralise# which signifies #nounNotToPluralise#.",
  // "When the World was young, #deityName# introduced humanity to #deityDomain#. This led #adverb# to the discovery of #nounToPluralise.s#.",
  // "When you worship #deityName#, you #verb# #deityDomain#. In many ways, you also #deityRequest# #spiritAnimal.s#.",
  // '#deityName# (#nationality# for "The #adjective.capitalize# One") is mostly called upon by people who are #verbIng# #deityDomain#, although some call on #deityThem# for help #verbIng# #nounNotToPluralise#.',
  // "#deityFull# has a gift of #nounNotToPluralise# for the first follower to celebrate #festival#.",
  // "#deityFull# looks like #adjective.a# #animal# dressed in #buildingMaterial#, only a little more #adjective#.",
  // "#deityFull# has #adjective.a# #bodyPart# which looks like #nounToPluralise.a#.",
  // "The #bodyPart# of #deityFull# is made of #adjective# #buildingMaterial# but #deityTheir# #bodyPart# feels more like #buildingMaterial#.",
  // "#deityFull# has #bodyPart.a# of #buildingMaterial#, #bodyPart.a# of #buildingMaterial# & #bodyPart.a# of #buildingMaterial#, but remains #adjective#.",
  // "#deityFull# wears #adjective.a# #clothing# when #verbIng#. It's made of #colours# #buildingMaterial#.",
  // "When the #bodyPart# of #deityFull# grows #moreOrLess# #adjective#, it is usually a sign that they are feeling #adjective#.",
  // "#deityFull# looks like #adjective.a# #famousPerson# made of #buildingMaterial#, but #moreOrLess# #adjective#."

  /////

  // TODO: set up something like #deityCurrent#
  //    which uses #deityFull# for initial tweets and #deityName# later.
  //    Then use this to replace #deityName# in doing, stating, etc.
  //
  // Once done, add this initial stories back in:
  // "We need to talk about \\#deities. #doing#",
  // "Talk to me about \\#pantheism. #doing#",
  // "There are so many deities out there. Maybe this one's for you? #doing#",
];
