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


    
if __name__ == '__main__':
    app.run(debug=True)







data = pd.read_csv('Frnds4.csv', encoding='cp1252')

Generator = data.iloc[[random.randint(1, 236)], [1, 2, 3, 4]]

print (Generator)
