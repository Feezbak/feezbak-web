const dotenv = require("dotenv");

// Load environment variables from the .env file in your app's root directory
dotenv.config();

module.exports = {
  apps: [
    {
      name: process.env.REACT_APP_NAME,
      script: "serve",
      args: "-s build -p 8000",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
