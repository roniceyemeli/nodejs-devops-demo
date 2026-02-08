FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /app
EXPOSE 5000

# Copy package files
COPY package.json package-lock.json* ./

# Create .env file
RUN touch .env

# Install dependencies WITHOUT running prepare script
RUN npm ci --ignore-scripts

# Or if you want npm install:
# RUN npm install --ignore-scripts

# Copy application code
COPY . .

# Start the application
CMD [ "npm", "start" ]