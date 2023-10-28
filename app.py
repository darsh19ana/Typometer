from flask import Flask, render_template, request, jsonify
import random
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_sentence')
def get_sentence():
    with open('sentences.json', 'r') as file:
        sentences = json.load(file)
    sentence = random.choice(sentences)
    return jsonify({'sentence': sentence})

if __name__ == '__main__':
    app.run(debug=True)
