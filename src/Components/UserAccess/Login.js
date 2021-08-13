import Input from "../UI/Input";
import Button from "../UI/Button";
import SpotifyTitle from "../UI/SpotifyTitle";
import styleforLog from "./Login.module.css";

const Login=()=>{
    const submitHandler = (event) => {
        event.preventDefault();
      };
    return(
        <div className={styleforLog.maincontainer}>
            <SpotifyTitle/>
            <br/>
            <h3>
          <b>To continue, login to Spotify.</b>
            </h3>
            <br/>
            <form onSubmit={submitHandler}>
                <Input
                label="Email Address"
                id="email"
                type="email"
                placeholder="Email Address"
                />
                 <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Password"
                />
                <Button id="loginButton" type="submit">LOG IN </Button>


            </form>
            <br/>
            <hr></hr>
            <br/>
            <p className={styleforLog.linkpara}><b>Don't have an account?</b></p>
            <Button id="signupButton" >SIGN UP FOR SPOTIFY</Button>

        </div>

    );
}

export default Login;