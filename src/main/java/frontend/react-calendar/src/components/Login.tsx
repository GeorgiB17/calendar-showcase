import { useState } from "react";
import "../css/app.css";
import LoadingModal from "./LoadingModal";
import ErrorModal from "./ErrorModal";
import type { User, Event } from "./Types";

type LoginProps = {
  onLoginSuccess: () => void;
  switchToRegister: () => void;
  setEvents: (events: Event[]) => void;
  setUser: (user: User) => void;
};

function Login({
  onLoginSuccess,
  switchToRegister,
  setEvents,
  setUser,
}: Readonly<LoginProps>) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const existingUser = {
      username,
      password,
    };
    try {
      const url = `http://localhost:5003/api/users/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(existingUser),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Invalid username or password");
      }
      const responseData = await response.json();
      setUser(responseData.user);
      setEvents(responseData.events);

      onLoginSuccess();
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            width: "350px",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "24px", color: "#333" }}>Gogi Calendar</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px", textAlign: "left" }}>
              <label
                htmlFor="username"
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontWeight: "500",
                }}
              >
                Username
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
            </div>
            <div style={{ marginBottom: "24px", textAlign: "left" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontWeight: "500",
                }}
              >
                Password
              </label>
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
                name="password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#4CAF50",
                color: "#fff",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Login
            </button>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  id="inlineTextButton"
                  onClick={switchToRegister}
                >
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {isLoading && <LoadingModal text="Logging in..." />}
      {isError && (
        <ErrorModal
          text="Login failed. Please try again."
          onClose={() => setIsError(false)}
        />
      )}
    </>
  );
}

export default Login;
