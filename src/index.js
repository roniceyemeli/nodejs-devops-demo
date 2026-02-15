import express from "express";
import { startMetricsServer } from "./utils/metrics.util.js";
import sequelize from "./sequelize-db.js";

const app = express();
app.use(express.json());

startMetricsServer(app);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

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

app.get("/health-check", (req, res) => {
  res.status(200).send("OK its working with ci/cd mise a jour ");
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
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "test") {
  // eslint-disable-next-line no-console
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
export default app;
