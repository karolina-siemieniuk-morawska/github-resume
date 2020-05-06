import React, { useState } from "react";
import InfoModal from "./components/Modal";
import Topbar from "./components/Topbar";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";

const setShowModalTrue = () => {
  localStorage.setItem("showModal", true);
};

const isUserFirstVisit = () => {
  return localStorage.getItem("showModal") !== "true";
};

function App() {
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(isUserFirstVisit());

  const handleClose = () => {
    setShow(false);
    setShowModalTrue();
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="fake-topbar"></div>
      <InfoModal show={show} handleClose={handleClose} />
      <Topbar setUsername={setUsername} handleShow={handleShow} />
      <Resume username={username} />
      <Footer />
    </>
  );
}

export default App;
