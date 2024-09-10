import pandas as pd
import random
import requests
import threading
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def get_episode_modern():
    data = pd.read_csv('modern_family.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 250)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x 

@app.route('/getepisodetheoffice')
def get_episode_office():
    data = pd.read_csv('the_office.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 188)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x

@app.route('/getepisodebrooklyn99')
def get_episode_brooklyn():
    data = pd.read_csv('b99.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 153)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x

# Function to make the HTTP GET request
def reload_website():
    url = 'https://episode-randomizer-8ij4.onrender.com'
    try:
        response = requests.get(url)
        print(f"Reloaded at {pd.Timestamp.now()}: Status Code {response.status_code}")
    except requests.RequestException as e:
        print(f"Error reloading at {pd.Timestamp.now()}: {e}")

# Function to set up an interval for the reload_website function
def set_interval(func, sec):
    def func_wrapper():
        set_interval(func, sec)
        func()
    t = threading.Timer(sec, func_wrapper)
    t.start()
    return t

# Set the interval to 30 seconds
set_interval(reload_website, 30)

if __name__ == '__main__':
    app.run(debug=True)