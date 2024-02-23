FROM node:10-alpine

# Create a working directory and set it as the current directory
WORKDIR /home/node/app

# Copy only the package.json and package-lock.json files first
COPY package*.json ./

# Change ownership of the working directory to the 'node' user
RUN chown -R node:node /home/node/app

# Switch to the 'node' user
USER node

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY --chown=node:node . .

# Create a directory for the application data
VOLUME "/app/data/ms-node"

# Expose the application's port
EXPOSE 8080

# Define the command to run the application
CMD [ "node", "web.js" ]
