from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
# Enable CORS so your Next.js app can talk to this backend
CORS(app) 

# Load the models
try:
    pipe = pickle.load(open('pipe.pkl', 'rb'))
    df = pickle.load(open('df.pkl', 'rb'))
except Exception as e:
    print(f"Error loading models: {e}")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # 1. Catch the data sent from Next.js
        data = request.json
        if not data:
            return jsonify({'error': 'No data received'}), 400

        # 2. Extract fields with safe defaults to prevent crashes
        # These keys must match your React formData state exactly
        company = data.get('brand', 'Dell')
        type_name = data.get('type', 'Notebook')
        ram = int(data.get('ram') or 8)
        weight = float(data.get('weight') or 1.5)
        
        # Binary conversions
        touchscreen = 1 if data.get('touchscreen') == 'Yes' else 0
        ips = 1 if data.get('ips') == 'Yes' else 0
        
        screen_size = float(data.get('screensize') or 15.6)
        resolution = data.get('resolution', '1920x1080')
        
        cpu = data.get('cpu', 'Intel Core i5')
        hdd = int(data.get('hdds') or 0)
        ssd = int(data.get('ssd') or 0)
        gpu = data.get('gpu', 'Intel HD Graphics 620')
        os = data.get('os', 'Windows 10')
        
        # 3. Calculate PPI
        try:
            x_res = int(resolution.split('x')[0])
            y_res = int(resolution.split('x')[1])
            ppi = ((x_res**2) + (y_res**2))**0.5 / screen_size
        except:
            ppi = 141.21 # Default fallback
        
        # 4. Format the array for the ML model
        # Ensure this order matches exactly what your model was trained on!
        query = np.array([company, type_name, ram, weight, touchscreen, ips, ppi, cpu, hdd, ssd, gpu, os], dtype=object)
        query = query.reshape(1, 12)
        
        # 5. Make the prediction
        prediction = int(np.exp(pipe.predict(query)[0]))
        
        # 6. Send result back
        return jsonify({'price': prediction})

    except Exception as e:
        print(f"Prediction Error: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)