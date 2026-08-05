// server.js
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static("public"));

// Basic route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js app running locally 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});