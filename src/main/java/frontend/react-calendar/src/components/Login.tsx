
import { useState } from "react";
import "../css/app.css";
import LoadingModal from "./LoadingModal";
import ErrorModal from "./ErrorModal";

type LoginProps = {
    onLoginSuccess: () => void;
};


function Login({onLoginSuccess,}: Readonly<LoginProps>) {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   const response = await fetch("", {
//////////////////////////////////////////// There aint no controller for this shit



 }
  if(isLoading) {
    return <LoadingModal text="Logging in..." />;
  } 
  
  
  if(isError) {
    return <ErrorModal text="Login failed. Please try again." onClose={() => setIsError(false)} />;
  }
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>


  )



}

export default Login;