import "../css/app.css";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";
import LoadingModal from "./LoadingModal";
import { useState } from "react";
import type { User } from "./Types";

type RegisterProps = {
  toggleRegister: () => void;
};

function Register({ toggleRegister }: Readonly<RegisterProps>) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newUser = {
      name,
      username,
      email,
      password,
      createdEvents: [],
    } as User;
    try {
      const response = await fetch("http://localhost:5003/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to register");
      }
      console.log("User registered:", newUser);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2 className="text-xl font-semibold mb-4">Register</h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                type="button"
                onClick={toggleRegister}
                className="btn btn-primary rounded-pill px-4 shadow-sm"
              >
                Back
              </button>
              <button
                type="submit"
                className="btn btn-primary rounded-pill px-4 shadow-sm"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {isLoading && <LoadingModal text="Registering..." />}
      {isError && (
        <ErrorModal
          text="Registration failed. Please try again."
          onClose={() => setIsError(false)}
        />
      )}
      {isSuccess && (
        <SuccessModal
          text="Registration successful!"
          onClose={() => {
            setIsSuccess(false);
            toggleRegister();
          }}
        />
      )}
    </>
  );
}

export default Register;
