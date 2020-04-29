import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);

  const handleInput = (value) => {
    setUser(value);
  };

  return (
    <>
      <div className="fake-topbar">.</div>
      <Topbar handleInput={handleInput} />
      <Resume user={user} />
      <Footer />
    </>
  );
}

export default App;
