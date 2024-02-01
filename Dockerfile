# Stage 1: Build and install packages
FROM ubuntu:20.04 as builder

# Avoid interactive dialog during build
ARG DEBIAN_FRONTEND=noninteractive

# Update and install necessary packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3-pip \
    python3-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip
RUN python3 -m pip install --upgrade pip

# Install OpenVINO and Ultralytics
RUN pip install openvino-dev ultralytics

# Stage 2: Create minimal runtime image
FROM ubuntu:20.04

# Copy installed packages from builder stage
COPY --from=builder /usr/local /usr/local

# Set up environment variables
ENV PATH="/usr/local/bin:${PATH}"
ENV PYTHONPATH="/usr/local/lib/python3.8/site-packages:${PYTHONPATH}"

# Install runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3-minimal \
    libgomp1 \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the entrypoint script into the container
COPY entrypoint.sh /app/
COPY testdata /app/

# Make sure the script is executable
RUN chmod +x /entrypoint.sh

# Set the entrypoint to run your script
ENTRYPOINT ["/app/entrypoint.sh"]

# The CMD can be used to provide default arguments to the entrypoint script
CMD []
