# Advanced State Management Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**
This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **advanced state management**. During this sprint, you studied **the reducer pattern, and redux**. In your challenge this week, you will demonstrate your mastery of these skills by creating the **Smurf Village Database**!

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this challenge, you are to build a Smurfs village database utilizing Redux as your state management system. Build this challenge from the ground up using what you have learned about state management.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What problem does the context API help solve?

- The Context API was created to solve a specific problem in react, sharing state down a component tree. Similar to the solution that Redux and React-Redux libraries solve, this solution prevents prop drilling. Prop drilling is when you have to continuously pass props down through a component tree in order for a component “way down” in the application to use that prop. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- A `store` holds the whole state tree of your application.
- An `reducers` are functions that mutate a `store`.
- An `actions` are functions that show ways how to mutate `store`.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is the "global" state that all components in the component tree can access.
- Component state is state that is local to a single component and cannot be seen outside of this component.
- I used component state to save user input in form and also used application state when form is submitted.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.
- It inserts axios requests and promises in our `actions`

5. What is your favorite state management system you've learned and this sprint? Please explain why!

- My favorite is Context API, because it is much simple to connect and understand it in compare to Redux.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

* [*] `fork & clone` this repository.
* [*] `cd` into the forked copy of this repository.

#### Setup Server Code
* [*] `cd` into the server folder of this repository.
* [*] **RUN** `npm install` to retrieve all `server-side` the dependencies.
* [*] **RUN** `node server.js` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
* [*] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an array with one smurf in it returned to you. This is an array that your **API** will be using to store our Smurf Data.

#### Setup Client Code
* [*] `cd ../client` into the client folder of this repository.
* [*] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
* [*] **RUN** `npm install` to retrieve all `client-side` the dependencies.
* [*] **RUN** `npm start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

### Task 2: Project Requirements
Your finished project must include all of the following requirements:

* [*] Plan and implement how you are going to manage your state for your application
* [*] You _must_ use Redux as your state management system
* [*] Complete the tasks listed within:
  * `./reducers/index.js`
  * `./actions/index.js`
  * `./index.js`
  * `./App.js`
  * `./components/AddForm.js`
  * `./components/Smurf.js`
  * `./components/SmurfDisplay.js`
* [*] You completed application should do the following:
  * Fetch and display data from the included server code on mounting.
  * Provide the user a form for adding in the Name, Position, Nickname and Description of a new Smurf.
  * Allow new smurfs to be added to the list when the submit smurf button is pressed.
  * Displays an error alert when name, position or nickname is not included in the submission.
  * Include the word "Error" and "name/position/nickname" in the rendered error alert as approprate.
  * Does NOT display an error alert when description is left blank.
  * Display an error alert if a smurf is submitted with a name already assigned to a smurf.
  * Include the word "Error" and the returned server error message in the rendered error alert as approprate.
  * DO NOT REMOVE ANY data-testid FIELDS FROM THE CODE. These fields are used for internal grading of your sprints. While we don't recommend using testid in most cases, it is necessary our grading systems currently.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: CodeGrade Setup

For submission, please setup the webhook needed to push your submission to codegrade. 

* [*] [Visit this link for instuctions on how to setup webhooks for codegrade.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

**Note that you can ignore the npm run:test:watch command**




#### Resource: API documentation 

##### GET '/smurfs'

* [ ] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
* [ ] Double check that your response from the server is an array of smurfs.

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];
```

##### POST '/smurfs'

* [ ] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

* [ ] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  },
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```


### Task 3: Stretch Goals 

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Build a smurf profile page with using react-router and dynamic url params  
* [ ] Using React Testing Library, test one or more of your components (not any component that fetches data though)

## Submission format
To submit, simply push your latest commit to the master branch and the CodeGrade webhook you setup will run automatically.