import express from "express";

const app = express();

// middleware for json
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Welcome to Random Thoughts!");
});

app.get("/about", (req, res) => {
  res.json({
    message:
      "A blog exploring diverse interests, including recipes, languages, and coding.",
  });
});

app.post("/contact", (req, res) => {
  const data = req.body;
  res.json({ message: "Contact recieved.", data });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `User ID recieved: ${id}` });
});

app.get("/search", (req, res) => {
  const { term, sort } = req.query;
  res.json({ message: `Search Query recieved: term=${term}, sort=${sort}` });
});

//bonus
app.get("/joke", async (req, res) => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch joke." });
  }
});

const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    error: 404,
    message: "Route not found.",
  });
};
app.use(notFoundHandler);

app.listen(3000, () => {
  console.log("Server Intialized! Running on Port 3000!");
});
