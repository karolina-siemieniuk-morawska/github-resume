import React, { useState } from "react";
import InfoModal from "./components/Modal";
import Topbar from "./components/Topbar";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";

const setShowModalTrue = () => {
  sessionStorage.setItem("showModal", true);
};

const isUserFirstVisit = () => {
  return sessionStorage.getItem('showModal') !== 'true';
}

function App() {
  console.log(isUserFirstVisit());
  const [ username, setUsername ] = useState("");
  const [ show, setShow ] = useState(isUserFirstVisit());

  const handleClose = () => {
    setShow(false);
    setShowModalTrue();
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <InfoModal show = {show} handleClose = {handleClose} />
      <Topbar setUsername = {setUsername} handleShow = {handleShow} />
      <Resume username = {username} />
      <Footer />
    </>
  );
}

export default App;
