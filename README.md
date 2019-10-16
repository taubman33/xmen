# X-FACEBOOK

![](https://media.giphy.com/media/loAnHAy04UviE/giphy.gif)

Professor X has decided to replace Cerebro with a new social media site called X-Facebook where X-Men can check out each other's profiles online. He's created high fidelity wireframes that you can check out below. It's your job to build them.

## Getting Started
- Fork and clone this repo.
- **DO NOT** type `create-react-app`. The React app is already provided in this repository.
- `cd` into your cloned repo and use `npm i` to install dependencies. `Axios` and `react-router-dom` have already been provided.
- Set up `Router` in your `index.js` file.
- Turn your `App.js` file into a class component.

## Component Heirarchy
Your finished app should have a heirarchy as follows:

```js
<App /> 
  - <Header />
  - <main></main>
    - <Heroes /> // page with all the heroes
    - <Profile /> // page with selected hero
  - <Footer />
```

## Getting Heroes 
Let's start with the `<Heroes />` Component. This is a **functional** component that, upon mounting, should use axios to hit the X-Men database Professor X created really late last night. Then, it should map through the resulting list of heroes and render them onto the screen.

The endpoint you'll need for your `axios.get` request is `https://basic-superhero-api.herokuapp.com/superheros`. Upon a successful request, you'll need to add this list of superheroes to the state of `App.js` and pass it to to `<Heroes />` through props.

When you map through the heroes, keep in mind that each hero will need to **link** to its corresponding hero. You will need to put each X-Men's `hero_id` in the link url and the corresponding route path will need to have that `hero_id` as a `/:slug`, so that you can pass the `hero_id` to the `<Profile>` as props in the route when it's rendered.

## Profiling Heroes
We're going to do something **CRAZY** here. We're going to make our `<Profile />` componentent **a stateful class component**.

Upon mounting, this component should do an axios get request to `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10112156875431003/${this.props.heroId}`. That call should provide loads of details on the selected hero. Add that hero to `<Profile>`'s state.

Render the hero's image and details. As there will be a millisecond where you don't have a hero set in state, you'll need to use conditional rendering to only return the hero's details once the hero has been added to state.

## Wireframes

#### Heroes Page
If you click on a hero, it should take you to their profile page.
![](https://res.cloudinary.com/briandanger/image/upload/v1571231252/screencapture-localhost-3001-2019-10-16-09_04_43_gegz6e.png)

#### Profile Page
![](https://res.cloudinary.com/briandanger/image/upload/v1571230954/screencapture-localhost-3001-339-2019-10-16-09_00_44_obwk73.png)
