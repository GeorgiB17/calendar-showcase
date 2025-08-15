import Nav from "./components/Nav";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div>
      <Nav />
      <div style={{ marginTop: "80px" }}>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
