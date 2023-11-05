module.exports = {
  apps: [
    {
      name: "your-react-app", // Replace with your app name
      script: "node_modules/react-scripts/scripts/start.js",
      args: "start",
      interpreter: "node",
      interpreter_args: "node_modules/.bin/react-scripts",
      watch: true,
      env: {
        NODE_ENV: "development", // Set your desired NODE_ENV
        PORT: process.env.PORT || 3000, // Use the environment variable directly, or default to 3000
      },
      env_production: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3001, // Use the environment variable directly, or default to 3001
      },
    },
  ],
};
