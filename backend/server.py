from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from model import Model

app = Flask(__name__)

model = None
data = None

@app.route("/api/v1/machine-learning/upload", methods=["GET", "POST"])
def upload_file():
    global data, model
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    try:
        data = pd.read_csv(file)
        
        target_column = request.form.get('target_column', None)
        model_type = request.form.get('model_type', 'linear_regression')
        
        model = Model(model_type=model_type)
        
        X, y = model.transform_data(data, target_column=target_column)
        model.train_model(X, y)
        
        return jsonify({"message": "File successfully uploaded and model trained"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/v1/machine-learning/predict", methods=["POST"])
def predict():
    global model
    if model is None:
        return jsonify({"error": "Model is not trained yet"}), 400

    try:
        input_data = request.get_json()
        if not input_data:
            return jsonify({"error": "No input data provided"}), 400

        input_df = pd.DataFrame(input_data)
        X_test = np.array(input_df)

        predictions = model.make_predictions(X_test)
        
        return jsonify({"predictions": predictions.tolist()}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)