import Nav from "./components/Nav";
import "./css/App.css";
import Calendar from "./components/Calendar";
import CreateEventModal from "./components/CreateEventModal";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);
  const toggleRegister = () => setShowRegister((prev) => !prev);
  const toggleIsLoggedIn = () => setIsLoggedIn((prev) => !prev);

  if (isLoggedIn) {
    return (
      <div>
        <Nav onOpenModal={() => setShowModal(true)} />
        {showModal && <CreateEventModal onClose={toggleModal} />}
        <div style={{ marginTop: "100px" }}>
          <Calendar />
        </div>
      </div>
    );
  }
  if (showRegister) {
    return <Register toggleRegister={toggleRegister} />;
  }
  return (
    <Login
      onLoginSuccess={toggleIsLoggedIn}
      switchToRegister={toggleRegister}
    />
  );
}

export default App;
