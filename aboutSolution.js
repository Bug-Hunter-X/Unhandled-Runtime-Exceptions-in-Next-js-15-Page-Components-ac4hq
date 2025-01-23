```javascript
// pages/aboutSolution.js

export default function About() {
  try {
    // Simulate a potential error
    const someVariable = 10 / 0 //this will throw an error 
    console.log(someVariable);
    return (
      <div>
        <h1>About Page</h1>
        <p>Some Variable: {someVariable}</p>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error on About Page</h1>
        <p>An error occurred: {error.message}</p>
      </div>
    );
  }
}
```