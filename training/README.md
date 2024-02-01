# Train a Pytorch custom model for image classification

### Dev Envr.
```bash
pip install ultralytics
sudo apt-get update
sudo apt-get install libgl1-mesa-glx
```
### Training
```bash
cd training

# 84.8ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/core/core1.png

# 91.9ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/xeon/xeon1.png

# 84.1ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/graphics/arc1.png

# 84.8ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/evo/evo1.png
```

### Util commands to test
```bash
pip install openvino
benchmark_app -m runs/classify/train/weights/best_openvino_model/best.xml -hint latency -t 60

# 63ms
yolo predict model=runs/classify/train/weights/best_openvino_model source=data/val/core/core1.png imgsz=224
```