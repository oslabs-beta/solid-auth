//@ts-nocheck

import './Login-UI-dark.css';
import { Component, createSignal } from 'solid-js';
import solidLogo from '/solid-auth-logo.png';
import solidLogoLight from '/solid-logo-light.png'
import googleLogo from '/google.png';
import hideLogo from '/hide.png';
import { useNavigate } from '@solidjs/router';

const LoginFormDark: Component = () => {

    const [loginStatus, setLoginStatus] = createSignal(null)
    const [loginInput, setLoginInput] = createSignal({
        usernameInput: '',
        passwordInput: '',
    });

    const navigate = useNavigate();

    const handleCreateNewUser = () => navigate('/sign-up')

    return (
        <div class="loginFormContainer">
          <form class="loginBox">
            <div class="login-image">
              {/* <img src={solidLogoLight} alt="solidLogoLight" /> */}
            <h1>Your Logo Here</h1>

            </div>
            <h2 class="signInText">Sign In</h2>

              <input class='form-control' id="usernameInput" type="email" placeholder="Username" />
            <div class='password-container'>
              <input class='form-control' id="passwordInput" type="password" placeholder="Password" />
              <img src={hideLogo} alt="hide logo" class='hide-logo'/>
            </div>
            <button class="log-in-button" type="submit">Log In</button>
            <div class="lineBreakContainer">

            </div>
            <button class="google-button" type="button">
              <img src={googleLogo} class="google-logo" />
              Sign in with Google
            </button>
            <div class='newUserLine'>

              <p>New to Solid Auth?</p>

              <a href="#" onClick={handleCreateNewUser}>Create New User</a>

            </div>
          </form>
        </div>
      );
    };




export default LoginFormDark;
