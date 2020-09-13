# Using flask to make an api 
# import necessary libraries and functions 
from flask import Flask, jsonify, request
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity

import warnings; warnings.simplefilter('ignore')

movies = pd.read_csv('movies_metadata.csv')
links_small = pd.read_csv('links_small.csv')
# These unique movie ids will be used as primary index for referring each movie

links_small = links_small[links_small['tmdbId'].notnull()]['tmdbId'].astype('int')
# we need to make sure that the ID column of our main dataframe is clean and of (type) integer to impliment error free cosine function 


def convert(n):   # integer conversion of IDs 
    try:
        return int(n)
    except:
        return np.nan
movies['id'] = movies['id'].apply(convert)
movies = movies.drop([19730, 29503, 35587])
movies['id'] = movies['id'].astype('int')
Fmovies = movies[movies['id'].isin(links_small)]

# building model based on text of every movie in the dataset & then use it over cosine similarity to predict nearest recommendations

Fmovies['tagline'] = Fmovies['tagline'].fillna('')
Fmovies['description'] = Fmovies['overview'] + Fmovies['tagline']
Fmovies['description'] = Fmovies['description'].fillna('')  # replacing NaN values with an empty string

# constructing the required TF-IDF matrix by fitting and transforming the data

tf = TfidfVectorizer(analyzer='word',ngram_range=(1, 2),min_df=0, stop_words='english') 
tfidf_matrix = tf.fit_transform(Fmovies['description'])
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix) # initializing cosine similarity matrix
# trying to construct a reverse map of indices & movie titles.

Fmovies = Fmovies.reset_index()
titles = Fmovies['title']
indices = pd.Series(Fmovies.index, index=Fmovies['title'])

# creating a Flask app 
app = Flask(__name__) 

# on the terminal type: curl http://127.0.0.1:5000/ 
# returns hello world when we use GET. 
# returns the data that we send when we use POST. 
@app.route('/', methods = ['GET', 'POST']) 
def home(): 
	if(request.method == 'GET'): 

		data = "default text"
		return jsonify({'data': data}) 


# A simple function to calculate the square of a number 
# the number to be squared is sent in the URL when we use GET 
# on the terminal type: curl http://127.0.0.1:5000 / home / 10 
# this returns 100 (square of 10) 
@app.route('/title/<string:title>', methods = ['GET']) 
# def disp(title): 
# 	list=['sdf','svsdvs','dsds','sdfs']
# 	print('hfchfj')
# 	return jsonify({'suggestion': list})

def get_recommendations(title):
    idx = indices[title]
    
    sim_scores = list(enumerate(cosine_sim[idx])) # getting the pairwsie similarity scores of all movies with that movie
    
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True) # sorting the movies based on the similarity scores
    
    sim_scores = sim_scores[1:11] # getting the scores of the 10 most similar movies
    
    movie_indices = [i[0] for i in sim_scores]  # gettng the movie indices
    
    data=titles.iloc[movie_indices]
    
    result=[]
    
    for i in data:
    	result.append(i)

    return jsonify({'suggestion':result})

# driver function 
if __name__ == '__main__': 	

	app.run(debug = True) 
