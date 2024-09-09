#flask run --host=

import pandas as pd
import numpy as np
import random

from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

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
    Generator = data.iloc[[random.randint(1, 110)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x

@app.route('/getepisodecommunity')
def get_episode_community():
    data = pd.read_csv('community.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 110)], [1, 2, 3, 4, 5, 6, 7]]
    x = Generator.to_json()
    return x

@app.route('/getepisodetmkoc')
def get_episode_tmkoc():
    try:
        # Specify the encoding as 'utf-8' when reading the CSV file
        data = pd.read_csv('tmkoc.csv', encoding='utf-8')
    except UnicodeDecodeError:
        # If 'utf-8' fails, try 'cp1252'
        data = pd.read_csv('tmkoc.csv', encoding='cp1252')
    
    # Generate a random episode
    random_index = random.randint(0, len(data) - 1)
    episode = data.iloc[random_index, [1, 2, 3, 4, 5, 6, 7]]
    
    # Convert the episode to JSON
    episode_json = episode.to_json()
    
    return (episode_json)



    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')







data = pd.read_csv('Frnds4.csv', encoding='cp1252')

Generator = data.iloc[[random.randint(1, 236)], [1, 2, 3, 4]]

print (Generator)
