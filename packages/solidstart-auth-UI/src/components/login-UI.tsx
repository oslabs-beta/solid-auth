//@ts-nocheck

import './login-UI.css';
import { Component, createSignal } from 'solid-js';
import solidLogo from '../../public/solid-auth-logo.png';
import googleLogo from '../../public/google.png';
import hideLogo from '../../public/hide.png';

export const LoginForm: Component = () => {

    const [loginStatus, setLoginStatus] = createSignal(null)
    const [loginInput, setLoginInput] = createSignal({
        usernameInput: '',
        passwordInput: '',
    });

    return (
        <div class="loginFormContainer">
          <form class="loginBox">
            <div class="login-image">
              <img src={solidLogo} alt="solidLogo" />
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

              <a href="#">Create New User</a>

            </div>
          </form>
        </div>
      );
    };


