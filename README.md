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
![MovieChoose - register page](/group-choose/imgs/wireframes/register@1x.png "register page") <br/>
login: <br/>
![MovieChoose - login page](/group-choose/imgs/wireframes/login@1x.png "login page") <br/>
about: <br/>
![MovieChoose - about page](/group-choose/imgs/wireframes/about@1x.png "about page") <br/>
movies index: <br/>
![MovieChoose - movies index page](/group-choose/imgs/wireframes/movies-index@1x.png "about page") <br/>
movies edit: <br/>
![MovieChoose - movies edit page](/group-choose/imgs/wireframes/movies-edit@1x.png "movies edt page") <br/>
movie list new: <br/>
![MovieChoose - movies new page](/group-choose/imgs/wireframes/movie-lists-new@1x.png "movie list new page") <br/>
movie lists index: <br/>
![MovieChoose - movie lists index](/group-choose/imgs/wireframes/movie-lists-index@1x.png "movie lists index page") <br/>
movie lists show: <br/>
![MovieChoose - movie lists show](/group-choose/imgs/wireframes/movie-lists-show@1x.png "movie lists show page") <br/>
### STRETCH WIREFRAMES
group choices new: <br/>
![MovieChoose - movie lists show](/group-choose/imgs/wireframes/group-choices-new@1x.png "group choices new") <br/>
group choices index: <br/>
![MovieChoose - movie lists show](/group-choose/imgs/wireframes/group-choices-index@1x.png "group choices index") <br/>
group choices show: <br/>
![MovieChoose - movie lists show](/group-choose/imgs/wireframes/group-choices-show@1x.png "group choices ") <br/>


## USER STORIES

> As a user, I want to be able to register and login with a shared group username/password combination. <br />
> As a user, I want to be able to be logged in on the same username, at the same time as my friends. <br />
> As a user, I want to be able to create new movie entries, new lists of these movies, and new choices for me and my friends to all contribute to. <br />
> As a user, I want to be able to delete entries singularly or by groups.<br />
> As a user, I want to randomize remaining possible choices. <br />

### MVP GOALS

> Build a full CRUD app with 7 RESTful routes.
> Build a full-stack application using Node.js, Mongoose, Express and EJS.
> Adhere to MVC methodologies.
> Deploy online via Heroku.

### STREATCH GOALS
> Full professional-quality styling
> Use a CSS framework
> Use EJS Partials
> To be able to register, login and sign out with a username and password.
> Use a third party API
> Group Choices architecture (aggregating Lists into arrays of Lists)
