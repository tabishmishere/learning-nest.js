# We need base image first to run our first application then we move to the next stage to build our application.
# Use Node.js image
FROM node:20-alpine

# Now, we're setting a working directory for our application inside the container. This is where all our application files will be located.
# Create app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build NestJS app
RUN npm run build

# Expose NestJS port
EXPOSE 3000

# Start app
CMD ["node", "dist/main.js"]