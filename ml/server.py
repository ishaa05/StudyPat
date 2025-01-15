from flask import Flask, jsonify
import cv2
from fastai.learner import load_learner
from plyer import notification

app = Flask(__name__)

# Load the model
posture_model = load_learner('posture_detector_model.pkl')

def notify_user():
    notification.notify(
        title='Posture Notification',
        message='Your current posture is BAD, Please Fix!',
        app_icon='notify-icon.ico',  
        timeout=10
    )

@app.route('/start-detection', methods=['GET'])
def start_posture_detection():
    detector = cv2.VideoCapture(0)
    ret, frame = detector.read()
    count = 0
    try:
        while ret:
            ret, frame = detector.read()
            posture = posture_model.predict(frame)[0]
            if posture == 'bad':
                count += 1
                if count == 50:
                    notify_user()
                    count = 0
            if not ret:
                break
        return jsonify({'status': 'Detection completed successfully!'})
    except Exception as e:
        return jsonify({'error': str(e)})
    finally:
        detector.release()

if __name__ == '__main__':
    app.run(debug=True)
