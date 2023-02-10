# Alkymi Take Home Project

Details on implementation are listed below. This project was created with `createReactApp`. So, the following commands can be used to validate all of the scenarios listed below.
1. `npm install`
2. `npm start`
3. `npm test`
## Tasks

- [X] Implement the requirements and design layout above as a React application.
- [X] Architecture can be webpack/babel/React or spun from createReactApp.
TypeScript is optional.
  - createReactApp was used to generate this project
- [X] Raw CSS or Module SASS/SCSS should be used for styling. Styled-components
are disallowed.
  - CSS is used for styling
- [X] The layout should be responsive but does not need to be pixel perfect.
  - I utilized media queries to be able create a mobile view of the table
- [X] Request and store the data from API.
- [X] Utilize Redux/ReduxToolkit for stateful storage
  - I used the ReduxToolKit to request the data from the API. I also updated the cache directly to simulate the user being able to remove rows from the table (this would make an actual PUT request in a real scenario)
- [X] JSON output should be fetched from a mock backend endpoint: GET https://private-39e16-alkymiexercise.apiary-mock.com/list
- [X] Add a feature that you think would improve the user experience.
  - I added an example of displaying the error to the end user in the table
  - The inputs in the table are being updated by the type field dynamically
     - For example, if the response defines the type as `date`, it will define the input as that type in the DOM
  - I transform the response so that the `results` has access to the `fields` data. This allows me to be able to use these labels in the mobile view
- [X] Include Documentation or a ReadMe (You're Here!)
- [X] Write one or more tests demonstrating how your application would be tested (Jest with
either react-test-renderer and/or React TestingLibrary).
  - I ran short on time, but I decided to test the `TableCell` component
    - Tests to make sure that a cell with a `validation_error` renders the component in an error state
    - Tests to make sure that error state is removed if a correct date is entered
    - Tests to make sure `readonly` cells are rendered correctly. i.e. not contained in an `input`
