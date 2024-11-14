import './Login-UI-light.css';
import { Component, createSignal, onMount, Show } from 'solid-js';
import solidLogo from '/solid-auth-logo.png';
import solidLogoLight from '/solid-logo-light.png'
import googleLogo from '/google.png';
import hideLogo from '/hide.png';

//code to set up interface for user to add custom logo - haven't finished
// interface LoginFormLightProps {
//   logo?: string  // `logo` can be a URL (string) 
// }
// export const LoginFormLight: Component<LoginFormLightProps>  = (props) => {

export const LoginFormLight: Component = () => {

    const [loginStatus, setLoginStatus] = createSignal(null)
    const [loginInput, setLoginInput] = createSignal({
        usernameInput: '',
        passwordInput: '',
    });

    const [isClient, setIsClient] = createSignal(false);

    onMount(() => {
      if (typeof window !== 'undefined'){
        setIsClient(true)
      }
    });

    return (
      <Show when={isClient()}>
        <div class="loginFormContainer">
          <form class="loginBox">
            <div class="login-image">
              {/* <img src={props.logo} alt="Your Logo Here" /> */}
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
          </form>
        </div>
        </Show>
      );
    };


