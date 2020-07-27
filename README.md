# Event Finder

### Purpose
  Deliver an event tracking web app that allows users to aggregate a collection of favorited events onto their own personal calendar and view detailed information for any chosen event.

### Problem
  Trouble keeping track of your calendar? Juggling a lot of events? Need a simple way of keeping track of your schedule?

### Solution
  - Events anywhere and everywhere
  - Register with Event Calendar and save the ones that pique your interest
  - Use Mapbox to find the address of your event

## MVP
### Current User Experience
- [ ] Calendar page
  - Each day populates with events (from an API)
  - Clicking on a day will show all events for that day (which can be favorited)
- [ ] Profile page 
  - Name
  - Email
  - Favorited events / amount(counter)
  - Profile pic
  - Address
- [ ] Favorite page
- [ ] Search Bar functionality
  - Location
  - Dates
  - types

## Stretch Goal
- Mobile friendly
  - favorite page be more vertical 
- Tracks age and Date of Birth for alerts
- Click on a venue
  - once clicked load venues calendar
- Map Box 
  - Venue Locations for events
- Check age for finding events

### Team Members(daily/Items we want to get done)
    Thomas - Front-end css/etc
        - [X]  D1 CSS
        - [X]  D2 CSS
        - [ ]  D3
        - [ ]  D4
        - [ ]  D5
        - [ ]  D6
    Louis - Back-end setup dev
        - [X]  D1 DB start up
        - [X]  D2 DB set up
        - [X]  D3 DB routing
        - [ ]  D4
        - [ ]  D5
        - [ ]  D6
    Jimmy - Front-end design/routing
        - [X]  D1 Initial planning for front-end
        - [X]  D2 Touch base with team + decompress Friday
        - [X]  D3 Scaffolding and CSS foundation laid
        - [ ]  D4
        - [ ]  D5
        - [ ]  D6
    Nesso - Bouncer(help where needed)
        - [X]  D1 Help as avaliable
        - [X]  D2 Help as avaliable
        - [X]  D3 Help as avaliable
        - [ ]  D4
        - [ ]  D5
        - [ ]  D6
# Issues - Anything that is taking some time and should be noted!
- With auth being a broken item as of the weekend we were going to have to avoid it until monday and then throw it into the starter code
- Jimmy discovered early on that the calendar was going to be in its self a challenge
  - We exchanged some messages toward that regard
- 
# Meetups (Scheduled Meeting times/Might not be used)
- [X] Meeting 1 7/23
  - Discussion of implementation of the application
  - Basic field to populate the database 
  - General discussion
    - Set the first 2 days of work to designate jobs as well as who may be helping
      - Git master branch was updated from Jimmy and Nesso 

- [X] Meeting 2 7/24
  - After Auth Class
    - Went over and discussed minute styling discussing dropdown menus etc
  - Made a repo for the back end to allow Louis to have some starter to alter 
  - Adjusted index.js and app.js to better follow todays lesson 
    - hopefully will be adjusted based on group knowledge!

- [X] Meeting 3 7/25
-  Saturday
 - Edited some css
 - Discussed some planning 
 - delegated more tasks 
 - lowered more expectations 
- Finally got solid footing to begin
- did actual beginning

- [ ] Meeting 4

- [ ] Meeting 5


# Wireframes

## Landing Page
![](/public/wireframe/Landing-Page-Wireframe.png)
## Main Calendar Page
![](/public/wireframe/Main-Page-Wireframe.png)
## Event Page
![](/public/wireframe/Event-Page-Wireframe.png)
## User Profile Page
![](/public/wireframe/Profile-Page-Wireframe.png)
## Users Favorites Page
![](/public/wireframe/Favorites-Page-Wireframe.png)

## ERD
https://drive.google.com/file/d/1rdZQrbXQxvStXyV9P8d1gnk8CbRNvxCt/view?usp=sharing

## Pitch Deck
 https://docs.google.com/presentation/d/12pGAecJtmeS1GFUZcL304D9aAapzU_ma3j8h-fevh7k/edit#slide=id.gc6f80d1ff_0_0




Nesso's meeting with Milcah - 
- Peer programming - one coder shows screen the other go along and give suggestions(Acts like a real life work enviroment)
  - helps with balancing weaknesses 
  - helps pull strengths
- Try to go through each line of code to reitterate everything
  - attmempt to refactor after 

- Check documentation for best practices 



- [ ] 7/26 Sarahs sunday walkthrough 

- [ ] 7/26 Sarahs sunday walkthrough 

1)	Creating a model depends on the structures that is wanted
2)	set up .env variables
a)	add JWT_TOKEN='whatever it is'
b)	CLIENT_URL=''
c)	MONGODC_URI=''
3)	those connect to the index.js
4)	jsonwebtoken, bcrypt, passport and passport-jwt for backend
a)	I should have had this done on the backend files already
5)	Create a /config/passport.js file path
6)	Sarah changed cosnt User from the mern auth to db to show we're referenceing the database
7)	changed all uses of User in page
8)	Make a user model - we have this i think Louis made a better one
a)	Sarah adjusted the user.js from models to better work for her app
i)	Why am I logging into this data base
(1)	Are we favoriting them?
(2)	are they for editing?
b)	added a reference to the db
i)	type array called watched bounties [{}]
(1)	if we don’t remember how to link
(2)	mongoose.Types.ObjectId (depends on the linked)
9)	export a user model in the index .js
10)	it will look similar to the other one except it is based on the db we are exporting
11)	cors info???
a)	nope lol
12)	Add the middle ware under the home route
a)	app.use and import all middleware that is going to be used
b)	Sarah added a note to make some routing
13)	added const passport = require('passport') ({the normal stuff})
14)	making a v1 folder for the version type as more api esq 
15)	app.use('/v1/auth', etc)
16)	in users.js
a)	we edited is 
i)	removed gravatar
ii)	added const db = require(filepath)
iii)	adjusted email(message): to message: 'Email already exists' this is acting as the error for creating 
b)	removed all essence of gravatar
17)	in the bcrypt.compair
a)	paylod = {...user}
b)	delete payload.password
c)	delete payload.email

18)	made edits to the router.get for the password.auth jtw route
19)	sarah made a new route file
i)	called userSaves.js
ii)	const express = require(‘express’) 
iii)	const router = express.Router()
b)	router.get(‘/savedBoutines’, (req,res) => {
c)	console.log(`Here are the Bounties for ${req.user.name}`)
d)	res.send(‘Love them bounties’)
e)	module.exports=router
20)	added the app.use to the server.js for the auth lock
21)	nodemon testing ----
22)	gives routes statuses for when they are running 
23)	be sure to have mongo running 
24)	use (whatever the db is)
25)	show collections – to check collections
26)	test using postman/insomnia
27)	test the correct path to make sure they work
28)	if you get back an unauth send you’re winning at life
a)	if not you’re still winning just having a harder time ^_^
29)	be sure to check the server command line to check if it is running properly
30)	you can check auth by getting a bearer token from the back end
31)	hit a roadblock with auth being an issue
a)	db.User.findById(mis previous code jwt_payload._doc._id)
32)	We searched a passport.js documentation to find a better way to get more auth info
a)	Console.log was changed to check for .sub from the docs 
i)	Came back undefined 
33)	Did some minor adjustments in the auth.js to change the findByOne()
34)	How to remove a specific field
a)	Let userToReturn = {req.user._doc}
b)	Delete userToReturn.password
c)	
d)	Res.json(req.userToReturn)
