// var argv = require("minimist")(process.argv.slice(2));

const strToProcess = `
1 Library Devouring
2–5 Children Kindly
6–8 Fortress Dreaming
9 Heralds Infinite
10–12 Keepers Glowing
13–15 Temple Dead
16–17 Betrayers Rotting
18–19 Hunters Raging
20–22 Union Golden
23–26 School Unborn
27–29 Seekers Blessed
30–33 Knights Chained
34–37 Order Sunken
38–39 Drinkers Broken
40–42 Choir Stirring
43–46 Sons Newborn
46–49 Daughters Golden
50–53 Servants Bloodied
54–56 Society Half
57–59 Army Forgotten
60–61 Wanderers Underground
62–63 Pilgrims Twisted
64–66 Contemplators Glorious
67–69 Movement Vengeful
70–74 Preachers Laughing
75–76 Revolution Elder
77–79 Mercy-Givers Loving
80–82 Council Undefeatable
82–83 Tower Timeless
84–85 Worshipers Striking
86–88 Observers Roaring
89 Beggars Inevitable
90–91 Witnesses Bright
92–93 Centre Jade
94–95 Garrison Iron
96–97 Engineers Bone
98–99 Family Silent
100 Chanters Pure
`;

let output1 = "collective: [\n";
let output2 = "cultDescription: [\n";
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
