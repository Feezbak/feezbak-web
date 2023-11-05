const dotenv = require("dotenv");

// Load environment variables from the .env file in your app's root directory
dotenv.config();

module.exports = {
  apps: [
    {
      name: process.env.REACT_APP_NAME,
      script: "yarn",
      args: "start",
      env: {
        PORT: process.env.PORT || 3500, // Use the value from .env if available, or default to 3000
      },
    },
  ],
};
