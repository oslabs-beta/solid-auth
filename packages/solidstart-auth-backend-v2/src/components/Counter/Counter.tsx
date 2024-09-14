// import './styles.module.css';

import {Component, createSignal} from "solid-js";

const styles = () => {
  return (
    {
      increment: {
        "font-family": "inherit",
        "font-size": "inherit",
        padding: "1em 2em",
        color: "#335d92",
        "background-color": "rgba(68, 107, 158, 0.1)",
        "border-radius": "2em",
        border: "2px solid rgba(68, 107, 158, 0)",
        outline: "none",
        width: "200px",
        "font-variant-numeric": "tabular-nums"
      },
      "increment:focus": {
        "border": "2px solid #335d92",
      },
      ".increment:active": {
        "background-color": "rgba(68, 107, 158, 0.2)"
      }
    }
  )
}

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button style={styles().increment} onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()}
    </button>
  );
}
