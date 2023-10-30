const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: String,
    lines: [
        {
            type: Schema.Types.ObjectId,
            ref: "Line",
        },
    ],
});

module.exports = mongoose.model("Comment", CommentSchema);
