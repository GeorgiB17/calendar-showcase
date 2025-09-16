import Nav from "./components/Nav";
import "./css/app.css";
import Calendar from "./components/Calendar";
import CreateEventModal from "./components/CreateEventModal";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import type { Event, User } from "./components/Types";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const toggleModal = () => setShowCreateEventModal((prev) => !prev);
  const toggleRegister = () => setShowRegister((prev) => !prev);
  const toggleIsLoggedIn = () => setIsLoggedIn((prev) => !prev);
  const [events, setEvents] = useState<Event[]>([]);
  const [user, setUser] = useState<User | null>(null);

  if (isLoggedIn) {
    return (
      <div className="app-background">
        <Nav onOpenModal={() => setShowCreateEventModal(true)} user={user} />
        {showCreateEventModal && (
          <CreateEventModal
            onClose={toggleModal}
            user={user!}
            updateEvents={setEvents}
          />
        )}
        <div style={{ marginTop: "100px" }}>
          <Calendar events={events} />
        </div>
      </div>
    );
  }
  if (showRegister) {
    return <Register toggleRegister={toggleRegister} />;
  }
  return (
    <div className="app-background">
      <Login
        setEvents={setEvents}
        setUser={setUser}
        onLoginSuccess={toggleIsLoggedIn}
        switchToRegister={toggleRegister}
      />
    </div>
  );
}

export default App;
