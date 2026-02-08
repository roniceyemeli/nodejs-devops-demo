import client from "prom-client";

/**
 * =========================
 * Prometheus Metrics Setup
 * =========================
 */

// Collect default Node.js metrics (CPU, memory, event loop, etc.)
client.collectDefaultMetrics();

/**
 * REST API response time histogram
 */
export const restResponseTimeHistogram = new client.Histogram({
  name: "rest_response_time_duration_seconds",
  help: "REST API response time in seconds",
  labelNames: ["method", "route", "status"],
  buckets: [
    0.05, // 50ms
    0.1, // 100ms
    0.2,
    0.5,
    1,
    2,
    5, // 5s
    10, // 10s
  ],
});

/**
 * Database response time histogram
 */
export const databaseResponseTimeHistogram = new client.Histogram({
  name: "db_response_time_duration_seconds",
  help: "Database response time in seconds",
  labelNames: ["operation", "success"],
});

/**
 * =========================
 * Metrics Bootstrap
 * =========================
 */
export const startMetricsServer = (app) => {
  /**
   * Metrics endpoint
   */
  app.get("/metrics", async (_req, res) => {
    res.setHeader("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
  });

  /**
   * Global response time middleware
   * MUST be registered AFTER routes
   */
  app.use((req, res, next) => {
    // Avoid self-scraping noise
    if (req.path === "/metrics") {
      return next();
    }

    const endTimer = restResponseTimeHistogram.startTimer();

    res.on("finish", () => {
      endTimer({
        method: req.method,
        route: req.route?.path || req.path,
        status: res.statusCode,
      });
    });

    next();
  });

  console.log("✅ Prometheus metrics initialized");
};
