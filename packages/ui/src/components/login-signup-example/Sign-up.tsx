import './Sign-up.css';
import { Component, createSignal } from 'solid-js';
// import solidLogo from '/solid-auth-logo.png';
// import googleLogo from '/google.png';
// import hideLogo from '/hide.png';
import solidLogo from '../../../public/solid-auth-logo.png';
import googleLogo from '../../../public/google.png';
import hideLogo from '../../../public/hide.png';
// import { useNavigate } from '@solidjs/router';


interface SignUpFormProps {
  newLogin?: () => void;    //optional event handler for the link
}

export const SignUpForm: Component<SignUpFormProps> = (props) => {

    const [loginStatus, setLoginStatus] = createSignal(null)
    const [loginInput, setLoginInput] = createSignal({
        usernameInput: '',
        passwordInput: '',
    });

    // const navigate = useNavigate();

    // const handleLogin = () => {
    //   navigate('/login-UI');
    // };

    return (
        <div class="loginFormContainer">
          <form class="loginBox">
            <div class="login-image">
              <img src={solidLogo} alt="solidLogo" />
            </div>
            <h2 class="signInText">Sign Up</h2>

              <input class='form-control' id="usernameInput" type="email" placeholder="Username" />
            <div class='password-container'>
              <input class='form-control' id="passwordInput" type="password" placeholder="Password" />
              <img src={hideLogo} alt="hide logo" class='hide-logo'/>
            </div>
            <button class="log-in-button" type="submit">Sign Up</button>
            <div class="lineBreakContainer">

            </div>
            <button class="google-button" type="button">
              <img src={googleLogo} class="google-logo" />
              Continue with Google
            </button>
            <div class='newUserLine'>

              <p>Already have an account?</p>

              <a href="#" onClick={props.newLogin}>Log In</a>

            </div>
          </form>
        </div>
      );
    };

// export default SignUpForm;
