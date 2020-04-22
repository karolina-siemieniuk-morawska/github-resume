import React, { useState } from "react";
import { TopBar } from "./components/TopBar/index";
import Resume from "./components/Resume/index";

function App() {
  const [user, setUser] = useState(null);

  const handleInput = (value) => {
    setUser(value);
  };

  return (
    <>
      <TopBar handleInput={handleInput} />
      <Resume user={user} />
    </>
  );
}

export default App;
