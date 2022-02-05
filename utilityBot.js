// var argv = require("minimist")(process.argv.slice(2));

const strToProcess = `
1 Sword Hated
2–5 Snake Hidden
6–8 Child Disgraced
9 Egg Bankrupt
10–12 Cloud Disgusting
13–15 Light Outlawed
16–17 Star Enemies of another Cult
18–19 Father Tiny
20–22 Maw Weak
23–26 Song Fake
27–29 Colour Forgotten
30–33 Gate Nobody Cares
34–37 Ship Mocked
38–39 Death Discouraged
40–42 Sea Hunted
43–46 Shadow Weakened
46–49 Giants Underground
50–53 General Unknown
54–56 Truth Hardly Known
57–59 Lie Feared
60–61 King Taboo
62–63 Queen Too Old to Criticise
64–66 Force Too Big to Fail
67–69 Swarm Somewhat Liked
70–74 Fleet Charitable
75–76 Horror Tolerated
77–79 Beauty Wealthy
80–82 Spire Sprawling
82–83 Crystals Allies of another Cult
84–85 Pantheon Respected
86–88 Throne Front for a Business
89 Web Actively Recruiting
90–91 Eye Fashionable
92–93 Hand Strong
94–95 Shield Powerful
96–97 Skull Legendary
98–99 Weed Beloved
100 Mist Council-Sanctioned
`;

let output1 = "symbol: [\n";
let output2 = "standing: [\n";
strToProcess.split("\n").flatMap(line => {
  // const match = line.match(/(\d+)(–(\d+))? (.+)(&(.+))?/);
  const match = line.match(/(\d+)(–(\d+))? ([^ ]+)( (.+))?/);
  if (match) {
    // console.log(match);
    const from = Number(match[1]);
    const to = match[3] || from;
    const column1 = (match[4] || "").replace("'", "\\'");
    const column2 = (match[6] || "").replace("'", "\\'");
    const number = to - from;

    for (let i = 0; i <= number; i++) {
      output1 += `\t\t'${column1}',\n`;
      if (column2) {
        output2 += `\t\t'${column2}',\n`;
      }
    }
  } else {
    // console.log("No match in ", line);
  }
});

output1 += `\t],\n`;
output2 += `\t],\n`;

console.log(`module.exports = {\n\t${output1}\n\t${output2}\n};`);
