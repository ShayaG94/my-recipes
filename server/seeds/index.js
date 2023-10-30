const mongoose = require("mongoose");
const { ingredients, units, dishes } = require("./seedHelpers");
const Recipe = require("../models/recipe");
const { Line } = require("../models/line");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/my_recipes");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async (limit) => {
    await Recipe.deleteMany({});
    for (let i = 0; i < limit; i++) {
        const recipe = new Recipe({
            title: `${sample(dishes)}`,
        });
        const ingredientsAmount = Math.floor(Math.random() * 3) + 3;
        for (let i = 0; i < ingredientsAmount; i++) {
            const line = new Line({
                body: `${Math.floor(Math.random() * 10) + 1} ${sample(units)} ${sample(ingredients)}`,
            });
            recipe.content.push(line);
            await line.save();
        }
        await recipe.save();
    }
};

seedDB(10).then(() => {
    db.close();
});
