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
    data = pd.read_csv('Frnds4.csv', encoding='cp1252')
    Generator = data.iloc[[random.randint(1, 236)], [1, 2, 3, 4]]
    x = Generator.to_json()
    return x
     
  


    
if __name__ == '__main__':
    app.run(debug=True)







data = pd.read_csv('Frnds4.csv', encoding='cp1252')

Generator = data.iloc[[random.randint(1, 236)], [1, 2, 3, 4]]

print (Generator)
