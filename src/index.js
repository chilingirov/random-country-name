var uniqueRandomArray = require("unique-random-array");
var countryNames = require("./country-names.json");

module.exports = {
    all: countryNames,
    random: uniqueRandomArray(countryNames)
};