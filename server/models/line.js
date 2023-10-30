const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LineSchema = new Schema({
    body: String,
});

module.exports.LineSchema = LineSchema;
module.exports.Line = mongoose.model("Line", LineSchema);
