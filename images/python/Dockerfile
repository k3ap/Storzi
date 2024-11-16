FROM python:3.13-slim

# Set image metadata
LABEL org.opencontainers.image.source="https://github.com/Jelka-FMF/Storzi/tree/main/images/python"
LABEL org.opencontainers.image.description="Base Jelka FMF image for Python patterns"
LABEL org.opencontainers.image.licenses=MIT

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
