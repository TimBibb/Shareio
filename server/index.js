// server.js
const express = require("express");
const app = express();

// Import route files
const usersRoutes = require("./routes/users");
const moodEntriesRoutes = require("./routes/moodEntries");
const meditationProgressRoutes = require("./routes/meditationProgress");
const journalEntriesRoutes = require("./routes/journalEntries");

// Use the routes as middleware
app.use("/api/users", usersRoutes);
app.use("/api/users/:userId/mood_entries", moodEntriesRoutes);
app.use("/api/users/:userId/meditation_progress", meditationProgressRoutes);
app.use("/api/users/:userId/journal_entries", journalEntriesRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
