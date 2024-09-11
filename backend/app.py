import pandas as pd
import numpy as np
import random
import requests
import threading
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["*"]}})

@app.route('/')
def index():
    return 'Hello World!'

@app.route('/getepisode')
def get_episode():
    data = pd.read_csv('friends.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 236)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x

@app.route('/getepisodehimym')
def get_episode_himym():
    data = pd.read_csv('himym.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 208)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x

@app.route('/getepisodetbbt')
def get_episode_tbbt():
    data = pd.read_csv('tbbt.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 250)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x

@app.route('/getepisodemodernfamily')
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

@app.route('/getepisodegot')
def get_episode_got():
    data = pd.read_csv('got.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 73)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x

@app.route('/getepisodesimpsons')
def get_episode_simpson():
    data = pd.read_csv('simpsons.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 705)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x

@app.route('/getepisodecommunity')
def get_episode_community():
    data = pd.read_csv('community.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 110)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x

@app.route('/getepisodeiasip')
def get_episode_iasip():
    try:
        data = pd.read_csv('iasip.csv', encoding='cp1252')
        print(f"Data read from CSV: {data.head()}")
        print(f"Data shape: {data.shape}")
        print(random.randint(1, 162))
        Generator = data.iloc[[random.randint(1, 150)], [1, 2, 3, 4, 5, 6, 7]]
        print(f"Generated data: {Generator}")
        x = Generator.to_json()
        return x
    except Exception as e:
        print(f"Error in /getepisodeiasip: {e}")
        return jsonify({"error": "Internal Server Error"}), 500
# def get_episode_iasip():
#     data = pd.read_csv('iasip.csv', encoding='cp1252')
#     Generator = data.iloc[[random.randint(1, 162)], [1, 2, 3, 4, 5, 6, 7]]
#     x = Generator.to_json()
#     return x

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
    app.run(debug=True, host='0.0.0.0')

# Additional code for testing
data = pd.read_csv('Frnds4.csv', encoding='cp1252')
Generator = data.iloc[[random.randint(1, 236)], [1, 2, 3, 4]]
print(Generator)