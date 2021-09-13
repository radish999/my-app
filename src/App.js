import './App.css';
import { useState } from 'react'
import Home from './views/home'
function App() {
  let [count, setCount] = useState(0)
  let jsSq = [1, 2, 3, 4, 5, 6, 7, 8].filter(x => x % 2)
  return (
    <div className="App">
      {jsSq}-{count}
      <div onClick={() => setCount(() => count + 1)}>点击</div>
      <Home />
    </div>
  );
}

export default App;
