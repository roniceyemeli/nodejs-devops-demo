import express from "express";

const app = express();
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Node.js DevOps Demo",
    version: "1.0.0",
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Error handling middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});

// Start server only if not in test environment
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  // eslint-disable-next-line no-console
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
export default app;
