# Train a Pytorch custom model for image classification

```bash
pip install ultralytics
sudo apt-get update
sudo apt-get install libgl1-mesa-glx

```

```bash
yolo classify train data=data model=yolov8m-cls.pt

#epochs=100

# 84.8ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/core/core1.png

# 91.9ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/xeon/xeon1.png

# 84.1ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/graphics/arc1.png

# 84.8ms
yolo classify predict model=runs/classify/train/weights/best.pt source=data/val/evo/evo1.png

```