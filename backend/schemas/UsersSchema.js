const { Schema } = require("mongoose");

const UsersSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        passwordHash: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = { UsersSchema };
