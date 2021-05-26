import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  const clearUser = () => {
    setPeople([]);
  };
  return (
    <main>
      <h2>{people.length} Birthdays Today</h2>
      <List people={people}></List>
      <button onClick={clearUser}>Clear</button>
    </main>
  );
}

export default App;
