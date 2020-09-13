# Binge📽
This project was generated with Angular CLI version 10.1.1.<br>
***
You just watched an amazing movie and thought "Wow! I wish i could watch more movies like this." and you ask a friend for his/her suggestions? <br>
Well, Binge is just the THING !
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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
