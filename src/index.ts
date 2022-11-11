import { MatchResult } from "./MatchResult";

import { CsvFileReader } from "./CsvFileReader";

import { MatchReader } from "./MatchReader";

const csvFileReader = new CsvFileReader("football.csv");
csvFileReader.read();

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(matchReader.matches[0][0]);

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United Wins ${manUnitedWins} games`);
