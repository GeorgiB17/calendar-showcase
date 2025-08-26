import Nav from "./components/Nav";
import "./css/App.css";
import Calendar from "./components/Calendar";
import CreateEventModal from "./components/CreateEventModal";
import { useState } from "react";
import Login from "./components/Login";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);

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
  return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
}

export default App;
