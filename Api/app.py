from flask import Flask, request, jsonify
from flask_cors import CORS  
from PIL import Image
import pytesseract
import re
from datetime import datetime

app = Flask(__name__)
CORS(app)  

def perform_ocr(image_path):
    pytesseract.pytesseract.tesseract_cmd = r'/opt/homebrew/bin/tesseract'
    img = Image.open(image_path)
    return pytesseract.image_to_string(img)

def convert_date_to_month_key(date_text):
    try:
        date_obj = datetime.strptime(date_text, '%d %B %Y')
    except ValueError:
        try:
            date_obj = datetime.strptime(date_text, '%d-%m-%Y')
        except ValueError:
            print(f"Error parsing date: {date_text}")
            return None
    formatted_date = date_obj.strftime('%d-%m-%Y')
    return formatted_date

def extract_amounts_and_names(text):
    amount_pattern = re.compile(r'(?:=|z)\s*(\d+(?:\.\d{1,2})?)')
    date_pattern = re.compile(r'(\d{1,2} [A-Za-z]+ \d{4})')
    name_pattern = re.compile(r'\b[A-Z\s]{4,}\b')  

    extracted_amounts = []
    extracted_dates = []
    extracted_names = []

    for line in text.split('\n'):
        amount_match = amount_pattern.search(line)
        amount = amount_match.group(1) if amount_match else None
        if amount:
            extracted_amounts.append(float(amount))

        date_match = date_pattern.search(line)
        date = convert_date_to_month_key(date_match.group(1)) if date_match else None
        if date:
            extracted_dates.append(date)

        names = name_pattern.findall(line)
        if names:
            extracted_names.extend(names)

    return extracted_amounts, extracted_dates, extracted_names

@app.route('/process_image', methods=['GET', 'POST'])

def process_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    image_path = '/tmp/uploaded_image.jpeg'
    file.save(image_path)

    ocr_text = perform_ocr(image_path)
    extracted_amounts, extracted_dates, extracted_names = extract_amounts_and_names(ocr_text)

    return jsonify({
        'amounts': extracted_amounts,
        'dates': extracted_dates,
        'names': extracted_names
    })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=6060)
