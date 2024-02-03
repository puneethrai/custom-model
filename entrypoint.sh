#!/bin/bash

echo "----------------------------------------------------------------" | tee /mount_folder/result.txt 
echo "----------------RUN ORIGINAL CUSTOM PYTORCH MODEL---------------" | tee -a /mount_folder/result.txt 
echo "----------------------------------------------------------------" | tee -a /mount_folder/result.txt 

yolo predict model=/app/orig_pytorch_model/best.pt source=/app/testdata | tee -a /mount_folder/result.txt 

echo "----------------------------------------------------------------" | tee -a /mount_folder/result.txt 
echo "----------------RUN OPENVINO MODEL------------------------------" | tee -a /mount_folder/result.txt 
echo "----------------------------------------------------------------" | tee -a /mount_folder/result.txt 

yolo predict model=/app/best_openvino_model source=/app/testdata imgsz=224 task=classify | tee -a /mount_folder/result.txt 

echo "----------------------------------------------------------------" | tee -a /mount_folder/result.txt 
