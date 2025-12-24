const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchems");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };
