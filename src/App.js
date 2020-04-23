import React, { useState } from "react";
import { TopBar } from "./components/TopBar/index";
import Resume from "./components/Resume/index";
import Footer from "./components/Footer/index";

function App() {

  // store info about recurring user in local storage
  const pageIsVisited = () => {
    localStorage.setItem("isRecurring", true);
  }

  pageIsVisited();

  const [user, setUser] = useState(null);

  const handleInput = (value) => {
    setUser(value);
  };

  return (
    <>
      <TopBar handleInput={handleInput} />
      <Resume user={user} />
      <Footer />
    </>
  );
}

export default App;
