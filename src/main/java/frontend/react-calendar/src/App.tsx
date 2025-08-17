import Nav from "./components/Nav";
import "./css/App.css";
import Calendar from "./components/Calendar";
import CreateEventModal from "./components/CreateEventModal";
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

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

export default App;
