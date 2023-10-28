import React from "react";
import logo from "./logo.svg";

function SignUp() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button>Sign up with Google</button>
    </div>
  );
}

export default SignUp;
