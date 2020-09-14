# Binge📽
This project was generated with Angular CLI version 10.1.1.<br>
***
You just watched an amazing movie and thought "Wow! I wish i could watch more movies like this." and you ask a friend for his/her suggestions? <br>
Well, Binge is just the THING !<br>
**Binge** is a movie recommendation system that seeks to predict an item based rating/ preference a user would give to an item in past history.<br>
In one line -> **Specialized content for everyone.**
<br>
<br>
## So What are recommendation systems exaclty?
Recommendation Systems are a type of information filtering systems as they improve the quality of search results and provides items that are more relevant to the search item or are realted to the search history of the user.<br>
They are used to predict the **rating** or **preference** that a user would give to an item. Almost every major tech company has applied them in some form or the other: Amazon uses it to suggest products to customers, YouTube uses it to decide which video to play next on autoplay, and Facebook uses it to recommend pages to like and people to follow. Moreover, companies like Netflix and Spotify depend highly on the effectiveness of their recommendation engines for their business and success.
#### Types of Recommendation System :-

    1). Popularity Based
    2). Classification Based
    3). Content Based
    4). Collaborative Based
    5). Hybrid Based (Content + Collaborative)
    6). Association Based Rule Mining

In this project, we'll use Content based recommender system. This is based on product description. Here we would convert movie titles into a vector to find its cosine similarity. Similar movie would have a high cosine similarity and thus would be recommended to the user.<br>
We'll take use of the following parameters :-
1. **Movies**
2. **Overviews**
3. **Taglines** <br>

In simple words. We'll analyze the text used in descriptons of movies to find similarity between movies and on the basis of it, predict output.
***

## Steps to run the Project:

1. Clone this reposistory.

2. Install flask and other modules the Flask Api, open the ml-model directory and run `pip install -r requirements.txt (Python 2), or pip3 install -r requirements.txt` in cmd promt.

3. Now run `python app.py` or `flask run` in cmd promt to start the API.

4. Now return to root directory and open new command prompt, and run `npm i` to install the required packages.

5. Now run `npm start` to start the project.

6. Now search for Your Favourite movie to get recommendations.

# Demo 
**Click on image below for Youtube Video**

[![Link to my YouTube video!](https://github.com/ayushbathrey/Binge/blob/master/docs/short.gif)](https://www.youtube.com/embed/3SbYxrSDv6c)
