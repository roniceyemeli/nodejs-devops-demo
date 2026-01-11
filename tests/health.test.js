import request from "supertest";
import app from "../src/index.js";

describe("Health Check Endpoint", () => {
  test("should return 200 and health status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status", "ok");
    expect(response.body).toHaveProperty("timestamp");
    expect(response.body).toHaveProperty("uptime");
  });

  test("should have valid ISO timestamp", async () => {
    const response = await request(app).get("/health");

    const timestamp = new Date(response.body.timestamp);
    expect(timestamp).toBeInstanceOf(Date);
    expect(timestamp.toString()).not.toBe("Invalid Date");
  });

  test("should have uptime as a number", async () => {
    const response = await request(app).get("/health");

    expect(typeof response.body.uptime).toBe("number");
    expect(response.body.uptime).toBeGreaterThan(0);
  });
});

describe("Root Endpoint", () => {
  test("should return 200 and welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("Welcome to Node.js DevOps Demo");
  });

  test("should return version information", async () => {
    const response = await request(app).get("/");

    expect(response.body).toHaveProperty("version");
    expect(response.body.version).toBe("1.0.0");
  });
});
