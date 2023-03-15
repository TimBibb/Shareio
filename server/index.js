const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Add a route handler for the "/" path
app.get("/", (req, res) => {
  res.status(200).json({ message: "Health check passed" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
