# X-FACEBOOK

![](https://media.giphy.com/media/loAnHAy04UviE/giphy.gif)

Professor X has decided to replace Cerebro with a new social media site called X-Facebook where X-Men can check out each other's profiles online. He's created high fidelity wireframes that you can check out below. It's your job to build them.

## Getting Started
- Fork and clone this repo.
- `cd` into your cloned app and create a new React App.
  - Don't like having your React app nested a directory down? Try `npx create-react-app .` from inside the root directory (there should only be one) to convert it into a React app of its own!
- Open your app with `code .` and launch it in the browser with `npm start`.
- Import and set up `Router` in your `index.js` file.
- Turn your `App.js` file into a class component.
- Sign up for an API key at https://superheroapi.com/index.html. Signing up requires a Facebook account, so if you don't have one, then feel free to borrow this one (please use responsibly): `10112156875431003`.

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

<details><summary>Hint</summary>
  
  Don't forget to import axios from axios and Route from react-router-dom in your App.js!

</details>

## Header and Footer 
Your `<Header />` will need to contain a link to your home page, which in this case is the `<Heroes />` component. 

<details><summary>Hint</summary>
  
  Don't forget to import Link from react-router-dom!

</details>

<details><summary>Hint</summary>
  
  When you set up the Route path for `<Heroes />`, remember that the paths for home pages must be exact!

</details>

## Getting Heroes 
Let's start with the `<Heroes />` Component. When this component mounts, it should make an axios call that hits the X-Men database Professor X created really late last night. It should then map through the resulting list of heroes and render them onto the screen. Write the method that makes the axios call in `App.js` and pass it down as props to `<Heroes />`

The endpoint you'll need for this `axios.get` request is `https://basic-superhero-api.herokuapp.com/superheros`. Upon a successful request, you'll need to add this list of superheroes to the state of `App.js` and pass it to to `<Heroes />` through props as well.

You may notice that this url is different from the one listed above and does not require an access key as it was created in-house by instructors GA. Professor X forgot to make an endpoint that returns multiple mutants, apparently.

When you map through the heroes, keep in mind that each hero will need to **link** to its corresponding hero **Route**. You will need to put each X-Men's `hero_id` in the link url and the corresponding route path will need to have that `hero_id` as a `/:slug`, so that you can pass the `hero_id` to the `<Profile>` as props in the route when it's rendered.

**NOTE:** While there are various ways that you can pass the necessary hero id to `<Profile />`, for this assignment, you **MUST** do it using the route.

<details><summary>Hint</summary>
  
  Don't forget to import Link from react-router-dom!
  
</details>

<details><summary>Hint</summary>
  
  When you map through each hero, you will need to wrap each hero `<div>` with a `<Link>`
  
</details>

<details><summary>Hint</summary>
  
  In that last hint, this is what I was talking about specifically.
  
  ```
  props.heroes.map(hero => (
    <Link to={`/${hero.hero_id}`} key={hero.id} >
      // hero details
    </Link>
  ))
  ```
  
  
</details>

<details><summary>Hint</summary>
  
  Confused about passing the `hero_id` as props through the route? Review the [Advanced Router lesson](https://git.generalassemb.ly/sei-nyc-dinosaurs/Advanced-React-Router).
  
</details>

## Profiling Heroes
We're going to do something **CRAZY** here. We're going to make our `<Profile />` componentent **stateful**, either by setting it up as a class component or by using hooks.

Upon mounting, this component should do an axios get request to `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/${this.props.heroId}`. That call should provide loads of details on the selected hero. Add that hero to `<Profile>`'s state.

Render the hero's image and details. As there will be a millisecond where you don't have a hero set in state, you'll need to use conditional rendering to only return the hero's details once the hero has been added to state.

Feel free to include different details about the superheroes than just what's shown in the wireframes.

## Styling
Try your best to match the wireframes below.

<details><summary>Hint</summary>
  
CSS Grid is a great solution for the `<Heroes />` layout.
  
</details>

## Make it X-Tremely Good
- Import a cool comic book or graffiti font to add some X-Men flavor to your app's appearance.
- Add hover statuses to your hero cards and your home link
- Use conditional rendering to only make the `Home` link appear on the `<Portfolio />` page.
- Explore the `box-shadow` property in CSS to give your cards a 3D pop out look. Try to not only adjust the size of the shadow, but also its blur.
- Use the CSS property `position: sticky` to keep the `<Header />` visible at all time.

## Wireframes

#### Heroes Page
If you click on a hero, it should take you to their profile page.
![](https://res.cloudinary.com/briandanger/image/upload/v1571231252/screencapture-localhost-3001-2019-10-16-09_04_43_gegz6e.png)

#### Profile Page
![](https://res.cloudinary.com/briandanger/image/upload/v1571230954/screencapture-localhost-3001-339-2019-10-16-09_00_44_obwk73.png)
