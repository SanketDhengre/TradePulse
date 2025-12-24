const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchems");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
