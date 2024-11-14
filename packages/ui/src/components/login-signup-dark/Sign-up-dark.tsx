import './Sign-up-dark.css';
import { Component, createSignal, onMount, Show } from 'solid-js';
import googleLogo from '../../../public/google.png';
import hideLogo from '../../../public/hide.png';


export const SignUpFormDark: Component = () => {
  const [loginStatus, setLoginStatus] = createSignal(null);
  const [loginInput, setLoginInput] = createSignal({
    usernameInput: '',
    passwordInput: '',
  });

  const [isClient, setIsClient] = createSignal(false);

  onMount(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  });

  return (
    <Show when={isClient()}>
      <div class="loginFormContainer">
        <form class="loginBox">
          <div class="login-image">
            {/* <img src={solidLogo} alt="solidLogo" /> */}
            <h1>Your Logo Here</h1>
          </div>
          <h2 class="signInText">Sign Up</h2>

          <input
            class="form-control"
            id="usernameInput"
            type="email"
            placeholder="Username"
          />
          <div class="password-container">
            <input
              class="form-control"
              id="passwordInput"
              type="password"
              placeholder="Password"
            />
            <img src={hideLogo} alt="hide logo" class="hide-logo" />
          </div>
          <button class="log-in-button" type="submit">
            Sign Up
          </button>
          <div class="lineBreakContainer"></div>
          <button class="google-button" type="button">
            <img src={googleLogo} class="google-logo" />
            Continue with Google
          </button>
        </form>
      </div>
    </Show>
  );
};
