#!/bin/bash

echo "----------------------------------------------------------------"
echo "----------------RUN ORIGINAL CUSTOM PYTORCH MODEL---------------"
echo "----------------------------------------------------------------"

yolo predict model=/app/orig_pytorch_model/best.pt source=/app/testdata

echo "----------------------------------------------------------------"
echo "----------------RUN OPENVINO MODEL------------------------------"
echo "----------------------------------------------------------------"

yolo predict model=/app/best_openvino_model source=/app/testdata imgsz=224 task=classify

echo "----------------------------------------------------------------"


