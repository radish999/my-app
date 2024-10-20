import { useState } from 'react';
import logo from '../../../src/logo.svg';
const C = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  const element = <div>hello element</div>
  function getGreeting(user) {
    return user?  <div>{user}</div> : <img src={logo} alt="" />
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me {getGreeting()}
      </button>
      {element}
      <div>Hello 一灯！</div>
    </div>
  );
}
export default C;
