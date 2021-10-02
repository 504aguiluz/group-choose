## PROJECT NAME
> **MOVIE CHOOSE** <br/>
An app to help groups decide on which movie to watch

## PROJECT DESCRIPTION
> **Movie Choose** is a new way to help groups of people decide together on what to watch. 
<br /><br /> **Movie Choose** will allow friends to make lists of movies, then filter, delete and randomize choices based on group preferences.
<br /><br />

## MODELS
**Movies** = {
    title: String,
    genre: String,
    submittedBy: String,
    yearMade: Num,
    director: String,
    actors: [String], 
    tags: [String],
    rating: Num
}
<br />
**Users** = {
    username: {
        type: String, 
        required: true,
        unique: true
    }, 
    password: {
        type: String, 
        required: true,
        unique: true
    }
}
<br />
**Lists** = {
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movies' }],
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
}

## ROUTES
> register: (/users/register) <br />
> login: (/users/login) <br />
> about: (/about) <br />
#### CREATE
> movie lists NEW:(/lists/new) <br />
> movie lists POST:(/lists/) <br />
#### READ
> movie lists INDEX: (/lists/) <br />
> movie lists SHOW:(/lists/:id) <br />
> movies INDEX: (/movies/) <br />
#### UPDATE
> movies EDIT: (/movies/:id/edit) <br />
> movies UPDATE: (/movies/:id/) <br />
#### DELETE
> movies DELETE: (/movies/:id/) <br />
## STRETCH ROUTES
> group choices NEW: (/groupchoices/new) <br />
> group choices INDEX: (/groupchoices/) <br />
> group choices SHOW: (/groupchoices/:id) <br />


## WIREFRAMES
register: <br/>
![MovieChoose - register page](public/css/wireframes/register@1x.png "register page") <br/>
login: <br/>
![MovieChoose - login page](public/css/wireframes/login@1x.png "login page") <br/>
about: <br/>
![MovieChoose - about page](public/css/wireframes/about@1x.png "about page") <br/>
movies index: <br/>
![MovieChoose - movies index page](public/css/wireframes/movies-index@1x.png "about page") <br/>
movies edit: <br/>
![MovieChoose - movies edit page](public/css/wireframes/movies-edit@1x.png "movies edt page") <br/>
movie list new: <br/>
![MovieChoose - movies new page](public/css/wireframes/movie-lists-new@1x.png "movie list new page") <br/>
movie lists index: <br/>
![MovieChoose - movie lists index](public/css/wireframes/movie-lists-index@1x.png "movie lists index page") <br/>
movie lists show: <br/>
![MovieChoose - movie lists show](public/css/wireframes/movie-lists-show@1x.png "movie lists show page") <br/>



## USER STORIES
<ul>
<li> As a user, I want to be able to register and login with a shared group username/password combination.</li>
<li> As a user, I want to be able to be logged in on the same username, at the same time as my friends.</li>
<li> As a user, I want to be able to create new movie entries, new lists of these movies, and new choices for me and my friends to all contribute to.</li>
<li> As a user, I want to be able to delete entries singularly or by groups</li>
<li> As a user, I want to randomize remaining possible choices.</li>
</ul>

### MVP GOALS
<ul>
    <li> Build a full CRUD app with 7 RESTful routes.</li>
    <li> Build a full-stack application using Node.js, Mongoose, Express and EJS.</li>
    <li> Adhere to MVC methodologies.</li>
    <li> Deploy online via Heroku.</li>
</ul>

### STRETCH GOALS
<ul>
    <li> Full professional-quality styling</li>
    <li> Use a CSS framework</li>
    <li> Use EJS Partials</li>
    <li> Use a third party API</li>
</ul>
