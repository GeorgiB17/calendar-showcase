import { useState } from "react";
import "../css/app.css";
import LoadingModal from "./LoadingModal";
import ErrorModal from "./ErrorModal";

type LoginProps = {
  onLoginSuccess: () => void;
};

function Login({ onLoginSuccess }: Readonly<LoginProps>) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("", {
        //////////////////////////////////////////// There aint no controller for this shit
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed login");
      }
      onLoginSuccess();
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingModal text="Logging in..." />;
  }

  if (isError) {
    return (
      <ErrorModal
        text="Login failed. Please try again."
        onClose={() => setIsError(false)}
      />
    );
  }

  return (
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
              type="text"
              id="username"
              name="username"
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
        </form>
      </div>
    </div>
  );
}

export default Login;
