import React from "react";
import logo from "./logo.svg";

function SignUp() {
  return (
    <div className="sign-up">
      <img src={logo} alt="logo" />
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <button type="button">Sign up with Google</button>
    </div>
  );
}

export default SignUp;
