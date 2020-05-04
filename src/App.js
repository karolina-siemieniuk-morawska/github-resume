import React, { useState, useEffect } from "react";
import InfoModal from "./components/Modal";
import Topbar from "./components/Topbar";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

// store info about recurring user in local storage
export const pageIsVisited = () => {
  localStorage.setItem("isRecurring", true);
};

function App() {
  const info = <FontAwesomeIcon icon={faInfo} />;

  const [modalShow, setModalShow] = useState(true);
  const [username, setUsername] = useState(null);

  // hide modal for recurring user
  useEffect(() => {
    if (localStorage.getItem("isRecurring") === "true") {
      setModalShow(false);
    }
  }, []);

  const handleUser = (username) => {
    setUsername(username);
  };

  return (
    <>
      <Button
        className="info-button"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        {info}
      </Button>
      <InfoModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          pageIsVisited();
        }}
      />
      <div className="fake-topbar">.</div>
      <Topbar handleUser={handleUser} />
      <Resume username={username} />
      <Footer />
    </>
  );
}

export default App;
