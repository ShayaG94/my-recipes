const express = require("express");
const mongoose = require("mongoose");
const Recipe = require("./models/recipe");
const { Line } = require("./models/line");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/my_recipes");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome my_recipes by K&G productions!");
});

app.get("/recipes", async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

app.get("/recipes/new", (req, res) => {
    res.send("New recipe form");
});

app.post("/recipes", async (req, res) => {
    const recipe = new Recipe(req.body.recipe);
    for (let data of req.body.content) {
        const line = new Line(data);
        await line.save();
        recipe.content.push(line);
    }
    await recipe.save();
    res.json(recipe);
});

app.get("/recipes/:id", async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findById(id).populate("content");
    res.json(recipe);
});

app.put("/recipes/:id", async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(id, { ...req.body.recipe });
    for (let data of req.body.content) {
        await Line.findByIdAndUpdate(data.id, data);
    }
    await recipe.populate("content");
    res.json(recipe);
});

app.delete("/recipes/:id", async (req, res) => {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    res.send(`Deleted a recipe: ${deletedRecipe.title}`);
});

app.listen(3300, () => {
    console.log("Listening on port 3300");
});
