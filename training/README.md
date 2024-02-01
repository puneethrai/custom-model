# Train a Pytorch custom model for image classification

```bash
pip install ultralytics
sudo apt-get update
sudo apt-get install libgl1-mesa-glx

pip install openvino

```

```bash
cd training

yolo export model=runs/classify/train/weights/best.pt format=openvino

#epochs=100

# 63ms
benchmark_app -m runs/classify/train/weights/best_openvino_model/best.xml -hint latency -t 60

yolo predict model=runs/classify/train/weights/best_openvino_model source=data/val/core/core1.png imgsz=224

# 84.8ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/core/core1.png

# 91.9ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/xeon/xeon1.png

# 84.1ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/graphics/arc1.png

# 84.8ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/evo/evo1.png

```