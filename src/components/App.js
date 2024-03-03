import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// App component renders the main content
function App() {
  return (
    <div className="App">
      {/* Display current date and time */}
      <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>
      <h1>Now</h1>
      {/* Description of JSX */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      {/* Render ExampleComponent */}
      <ExampleComponent />
      {/* Render TestComponent */}
      <TestComponent />
    </div>
  );
}

export default App;
