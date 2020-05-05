import React, { useState, useEffect } from "react";
import InfoModal from "./components/Modal";
import Topbar from "./components/Topbar";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";
import { pageIsVisited } from "./utils/pageIsVisited";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

function App() {
  const info = <FontAwesomeIcon icon={faInfo} />;

  const [modalShow, setModalShow] = useState(true);
  const [username, setUsername] = useState("");

  const handleUsername = (data) => {
    setUsername(data);
    console.log(username + "state zaktualizowany");
  };

  // hide modal for recurring user
  useEffect(() => {
    if (localStorage.getItem("isRecurring") === "true") {
      setModalShow(false);
    }
  }, []);

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
      <Topbar handleUsername={handleUsername} />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
