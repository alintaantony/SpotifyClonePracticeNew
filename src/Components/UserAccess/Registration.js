import stylesForReg from "./Registration.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import SpotifyTitle from "../UI/SpotifyTitle";

const Registration = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={stylesForReg.mainContainer}>
        <SpotifyTitle/>
        <br/>
        <h1>
          <b>Sign up for free to start listening.</b>
        </h1>
      <form onSubmit={submitHandler}>
        <Input
          label="What's your email?"
          id="email"
          type="email"
          placeholder="Enter your email."
        />
        <Input
          label="Confirm your email"
          id="confirmEmail"
          type="email"
          placeholder="Enter your email again."
        />
        <Input
          label="Create a password"
          id="password"
          type="password"
          placeholder="Create a password."
        />
        <Input
          label="What should we call you?"
          id="username"
          type="text"
          placeholder="Enter a profile name."
        />
        <Input
          label="What's your date of birth?"
          id="dob"
          type="date"
          placeholder="Enter your date of birth."
        />
        <Button id="signupButton" type="submit">
          Sign up
        </Button>
      </form>
      <p className={stylesForReg.loginLink}>Have an account? <a href=''>Log in</a></p>
    </div>
  );
};

export default Registration;
