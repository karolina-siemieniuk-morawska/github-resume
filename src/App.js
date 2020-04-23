import React, { useState } from "react";
import { TopBar } from "./components/TopBar/index";
import Resume from "./components/Resume/index";
import Footer from "./components/Footer/index";

function App() {

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
