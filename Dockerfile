FROM ultralytics/ultralytics:latest-cpu

# Set the working directory in the container
WORKDIR /app

# Copy the Python script and entrypoint script into the container
COPY entrypoint.sh /app/
COPY orig_pytorch_model /app/orig_pytorch_model/
COPY best_openvino_model /app/best_openvino_model/
COPY testdata /app/testdata/

# Make the entrypoint script executable
RUN chmod +x /app/entrypoint.sh

# Set the entrypoint to use the script
ENTRYPOINT ["/app/entrypoint.sh"]

# Default command (can be overridden)
CMD []