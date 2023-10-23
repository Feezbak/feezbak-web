# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the remaining project files to the working directory
COPY . .

# Build the React app
RUN yarn build

# Expose the container port to the outside world
EXPOSE 3000

# Define the command to run your React app
CMD ["yarn", "start"]