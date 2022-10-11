# Welcome to Appspace React FE Challenge

You can use the Readme to document and explain your decisions.

### Explain here your decisions:

---
## Introduction
Making this challenge was so fun for me. It's my first project outside ISDI Coders after two bootcamps, one as a student and the second one as an Assistant Teacher. Working on this challenge made me confirm that the last eight months of hard work really worth it. I felt so comfortable while doing this, implementing things that I've learned and taking knowledge of a lot of new things.

This proyect was started at 4/10/2022 and delivered to revision at 11/10/2022.

## About the app
The [Rick & Morty React FE Challenge](https://appspace-challenge-facundo-tolosa.netlify.app/)🔗 is a SPA that shows the entire list of characters of the Rick & Morty series. The user can search by name using the search bar, or use the filter by gender. Also, every character has a detail page showing more information about it, and a red or green dot depending on the status of the character: red if it's dead, and green if it's alive.

The app is fully responsive, it can be used in devices with a width of 300px foward. It has a breakpoint at 600px to improve the user interface depending if it is being used on a small or large device.


## Components list
### 🔹 Character
This component has the responsability to show received info from his parent via props: the image, name, species and the gender. It will also use the received id to show a button that will navigate to the path "/character/:id" when clicked.

### 🔹 CharacterDetail
This component has a similar responsability that the Character component, with the diference that it will show also the received origin, the episodes that the character appears on and a status circle that will be green if it's alive and red if it's dead.

This component style has a 600px width breakpoint so it will be seen different depending on the viewport's width.

### 🔹 CharacterList
This component will receive an array of characters and render as many Character components as it is in the array.

### 🔹 Error
This component has the responsability of showing an error message. An improvement that needs to be done here, it's that it should be a received message via props to have a proper error management and not the same message for every error. I will expand on this later at "Things that could improve the project".

### 🔹 Footer
This component will receive through props two functions that it will call respectively when one of the two buttons are clicked. It will also receive two numbers: the actual page and the total of pages. It will use this two numbers to know when to disable one of the two buttons, and it will also render the number of the actual page.

### 🔹 GenderFilter
This component will receive two functions that will set the state of it's parent component (CharactersPage). When a option is selected:  

- One of the received functions will set the actual page of it's parent to 1.  

- The other received function will set the request url of it's parent with a specific query param depending on the selected option.

### 🔹 SearchBar
This component has a similar responsability of the GenderFilter component, with the diference that this one has a text input instead of a select and needs to be submitted to use the received functions to set the state of it's parent.

### 🔹 Loading
This component has the responsability to show a spinner and a "Loading..." text.

### 🔹 Header
This component will show the Rick & Morty logo and a level one heading with the title of the app, and also my name 😬

## Pages
### 🔹 CharactersPage
This page will use the "useAPI" custom hook to fetch the data from the API. This custom hook uses the hook "useQuery" from react-query and return the same object. 
It may seem that taking this logic to a custom hook it's not necesary (and it's actually not...), but I wanted to work with at least one custom hook at this project to show that I'm used to do it.

From the returned object of the custom hook, at this page we will use three variables:
- isLoading: with a conditional rendering we will show the Loading component while this boolean is true.
- isError: with a conditional rendering we will show the Error component when this boolean is true.
- data: when it's defined and isLoading and isError are false, it will be used the necesary data from the API response (list of characters, next page, prev page, etc).

This page has a function for pagination, that will pass it two times via props to the Footer component. This function will set the "requestURL" state variable to the next page or previous page received at "data", depending if the previous or next button is pressed. The same thing applies to the "actualPage" state variable.

This page will also render the SearchBar and the GenderFilter components, and it will pass them via props the setter functions "setCurrentPage" and "setRequestURL".

Everytime that the state variable "requestURL" changes, the hook useQuery will automatically do a refetch, and the component will be rendered again and show the new data.

### 🔹 DetailPage
This page will use the hook "useParams" from react-router-dom to get the id of the character to ask to the API. It will use directly the useQuery hook to get the data and the booleans isLoading and isError.

It will use this two booleans in the same way that the CharactersPage use them, and when the data is defined it will render the CharacterDetail component passing it vía props the data about the character that it needs to show.

## Metrics

### 🚀 Lighthouse

<img src="https://i.ibb.co/jMGwzq6/Captura2.png" width="600">

I've used Lighthouse to check the performance, accesibility, best practices and SEO.
I find this tool very useful to view this metrics, get info about them and how to improve them.

### 📈 Testing

<img src="https://i.ibb.co/nrJ54Rq/Captura3.png" width="600">

The application is 100% tested with tests for each component and integration tests for CharactersPage and DetailPage.

## Some aclarations about the technologies used for the project
### 🔸 Mock Service Worker (MSW)
I integrated MSW in this project for mocking the responses from the API in the tests. I was used to mock Axios in each test suite but then I read an [article by Kent C. Dodds](https://kentcdodds.com/blog/stop-mocking-fetch/)🔗 explaining why this is a bad idea and why MSW is a better alternative.

### 🔸 React-query
I had never worked with this library until now. I was used to fetch data in a component using the hooks useEffect and useState, but for this project I've been recommended to try this, and I'm so glad that I did it.

It can be seen in my project that I've started doing the requests to the api with the native hooks and then refactored to use React-query and that change saved me a lot of lines in the code, and also now it's much more legible.

I've also seen that when you create a new query client, you can set a lot of options about the fetching: stale-while-revalidate pattern, cache policy, times to retry when a request fails, etc. I didn't implement any of them at this proyect because I wanted to keep it simple, but I'm interested on keep researching about this things.

### 🔸 Styled components
This library was used for giving a particular CSS style to each React component. I find it so confortable to work with because it makes so easy to individualize each DOM element to give styles to it. 

It also provides some cool features like nesting and the posibility to use a Theme Provider which I did to have some colors and fonts saved in a unique place, which could make it easier if that needs to be changed later.

One particular thing that could be seen in my code is the way that I use the TSX tags that Styled Components generates: 
I'm used to use only one tag for each component because I found it more easier to debug CSS later if the class names of the tags are put by me and no the ones that Styled Components generates. Despite this, it's only an habit that I have and I would feel also confortable making one styled tag for each style that I need to implement.

### 🔸 React Router DOM
I used React Router DOM to implement routing at the application. Routes are the core of Single Page Applications, since React focuses only on building user interfaces and it doesn't provide a built-in solution for routing.


## Things that could improve the project
### The app is not able to order the items.
One problem that I wasn't able to sort is to order the items. I tried to do it by the name of the character but the API already has them ordered (without taking into account the first five characters). 

Also, I prepared this application to take advantage of the pagination that the API provides to the consumer, and for ordering all the items I should make a request for all of them, order them, and then show them with a pagination made at the front. This is the only solution that I thinked of, and I'm not happy with it because it won't make sense to ask for data that you probably won't show.

### When you go back from the DetailPage, you start at CharactersPage from the beginning.
This happens because all the state variables from CharactersPage get lost when you render the DetailPage, so you loose the currentPage and the requestURL.
A possible solution for this would be to add a Context to the app and extract this two variables to it, so they won't get lost as you navigate through the app.

### Error handling
The application has only one error message, and this could be improved by showing custom messages for each error code that the API returns.


## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

---

#### If you feel the need to extend the webpack config you can use this command.

### `npm run eject`
