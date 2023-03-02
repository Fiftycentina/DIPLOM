import { useState } from 'react';
import List from './components/List';

const App = () => {
  // const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // const handleClick = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  const products = ['Phone', 'Book', 'Laptop', 'PC'];

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleChange} />
      <List products={products} />
      {text === 'secret' ? <p>SECRET</p> : null}

      {/* <p>{count}</p>
      <button onClick={handleClick}>+</button> */}
    </div>
  );
};

export default App;
