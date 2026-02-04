module.exports = {
  apps: [
    {
      name: "node-app",
      script: "./src/index.js",
      env_production: {
        NODE_ENV: "production",
        PORT: 5000,
      },
      env_development: {
        NODE_ENV: "development",
        PORT: 5000,
      },
    },
  ],
};
