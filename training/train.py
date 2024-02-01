from ultralytics import YOLO

model = YOLO('yolov8m-cls')
model.train(data='/data')
model.export()