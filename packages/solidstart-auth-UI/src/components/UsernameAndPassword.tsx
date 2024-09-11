// function twoSum(num: number){
//     return num + 2;
// }

// module.exports = twoSum;

import { JSX, Component, createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';

// const UsernameAndPassword: Component = () => {
//   const [loginStatus, setLoginStatus] = createSignal('');
//   const [loginInput, setLoginInput] = createSignal({
//     usernameInput: '',
//     passwordInput: '',
//   });

//   return (
//     <div class= "loginFormContainer">
//       <input type="text" placeholder="Username" value={username()} onInput={(e) => setUsername(e.currentTarget.value)} />
//       <input type="password" placeholder="Password" value={password()} onInput={(e) => setPassword(e.currentTarget.value)} />
//       <button>Login</button>
//     </div>
//   );
// };

// export default UsernameAndPassword;

// packages/package2/src/components/UsernameAndPassword.tsx


const UsernameAndPassword = () => {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');

  return (
    <div>
      <input type="text" placeholder="Username" value={username()} onInput={(e) => setUsername(e.currentTarget.value)} />
      <input type="password" placeholder="Password" value={password()} onInput={(e) => setPassword(e.currentTarget.value)} />
      <button>Login</button>
    </div>
  );
};

export default UsernameAndPassword;



