# You do not need to modify this file if you are using the default JavaScript base image
# Modify it only if using additional dependencies that are not available in the base image

FROM ghcr.io/jelka-fmf/pattern-base-javascript:latest

# Set working directory
WORKDIR /app

# Copy pattern files
COPY . .

# Run the pattern script
ENTRYPOINT ["node", "main.js"]
