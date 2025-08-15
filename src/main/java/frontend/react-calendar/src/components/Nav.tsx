import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePic from "./ProfilePic";
import cat from "../assets/cat.png";

function Nav() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        background: "linear-gradient(to bottom, #f5f5f5, #e0e0e0)",
        padding: "15px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        borderBottom: "1px solid #e5e5e5",
        margin: 0,
        boxSizing: "border-box",
        zIndex: 1000, // big number
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "85px",
      }}
    >
      <div style={{ marginLeft: "-5px" }}>
        <ProfilePic src={cat} size={65} name="Georgi" />
      </div>

      <div>
        <button
          className="btn btn-success rounded-pill px-4 shadow-sm"
          onClick={() => alert("Create Event Clicked")}
        >
          Create Event
        </button>
      </div>
    </header>
  );
}

export default Nav;
