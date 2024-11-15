# You do not need to modify this file if you are using the default Python base image
# Modify it only if using additional dependencies that are not available in the base image

FROM ghcr.io/jelka-fmf/pattern-base-python:latest

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Copy pattern files
COPY . .

# Install additional dependencies
RUN if [ -f requirements.txt ]; then pip install -r requirements.txt; fi

# Run the pattern script
ENTRYPOINT ["python", "main.py"]
