#!/bin/bash

yolo predict model=/app/weights/best_openvino_model source=/app/testdata imgsz=224
