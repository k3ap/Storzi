FROM node:22-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entrypoint script
COPY entrypoint.sh .

# Run the entrypoint script
CMD ["/bin/sh", "entrypoint.sh"]
