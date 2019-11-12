const beeper = require("beeper");
const cf = require("colorfy");
const readlineSync = require("readline-sync");

const makeRainbow = () => {
  console.log(
    cf()
      .txt("\n")
      .ansi("9", "rainbow\n")
      .ansi("3", "rainbow\n")
      .ansi("2", "rainbow\n")
      .ansi("6", "rainbow\n")
      .ansi("4", "rainbow\n")
      .ansi("17", "rainbow\n")
      .txt("\n")
      .colorfy()
  );
  beeper("*-*-*-*");
};

const makegrayRainbow = () => {
  console.log(
    cf()
      .txt("\n")
      .white("rainbow\n")
      .llgrey("rainbow\n")
      .lgrey("rainbow\n")
      .dgrey("rainbow\n")
      .ddgrey("rainbow\n")
      .black("rainbow\n")
      .txt("\n")
      .colorfy(),
    cf()
      .white("Anyway,It's also a rainbow.Only sad")
      .colorfy()
  );
};

if (readlineSync.keyInYN("A little rainbow on a gray day?")) {
  makeRainbow();
} else {
  makegrayRainbow();
}
