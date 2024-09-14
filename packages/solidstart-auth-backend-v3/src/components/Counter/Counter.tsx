import styles from './styles.module.css';

import {Component, createSignal} from "solid-js";

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button class={styles.increment} onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()}
    </button>
  );
}
