import styles from './styles.module.css';

import {Component} from "solid-js";

import solidLogo from './images/auth-logo.png';
import googleLogo from './images/google.png';
import hideLogo from './images/hide.png';

export const LoginForm: Component = () => {
  return (
    <div class={styles.loginFormContainer}>
      <form class={styles.loginBox}>
        <div class={styles["login-image"]}>
          <img src={solidLogo} alt="solidLogo"/>
        </div>
        <h2 class={styles["signInText"]}>Sign In</h2>

        <input class={styles["form-control"]} id="usernameInput" type="email" placeholder="Username"/>
        <div class={styles["password-container"]}>
          <input class={styles["form-control"]} id="passwordInput" type="password" placeholder="Password"/>
          <img src={hideLogo} alt="hide logo" class={styles["hide-logo"]}/>
        </div>
        <button class={styles["log-in-button"]} type="submit">Log In</button>
        <div class={styles["lineBreakContainer"]}>

        </div>
        <button class={styles["google-button"]} type="button">
          <img src={googleLogo} class={styles["google-logo"]} alt={"google-logo"}/>
          <span>Sign in with Google</span>
        </button>
        <div class={styles["newUserLine"]}>

          <p>New to Solid Auth?</p>

          <a href="#">Create New User</a>
        </div>
      </form>
    </div>
  );
};
