# Binge Movie Recommendation System.

In this project, we use Content based recommender system. This is based on product description. Here we convert movie titles into a vector to find its cosine similarity. Similar movie would have a high cosine similarity and thus would be recommended to the user.

We'll take use of the following parameters :-

- Movies
- Overviews
- Taglines

In simple words. We'll analyze the text used in descriptions of movies to find similarity between movies and on the basis of it, predict output.

## Steps to run the Project:

1. Clone this reposistory.
2. Install flask and other modules the Flask Api, open the ml-model directory and run "pip install -r requirements.txt (Python 2), or pip3 install -r requirements.txt" in cmd promt.
3. Now run "python app.py" or "Flask run" in cmd promt to start the API.
4. Now return to root directory and open new command prompt, and run "npm i" to install the required packages.
5. Now run "npm start" to start the project.
6. Now search for Your Favourite movie to get recommendations.