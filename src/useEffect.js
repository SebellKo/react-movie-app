import {useState, useEffect} from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => {
    setValue((current) => current + 1);
  }
  const onChange = (event) => {
    setKeyword((keyword) => event.target.value);
  }
  const iRunOnlyOnce = () => {
    console.log('I run only once');
  }
  console.log('call an api');
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5){
      console.log('I run only keword changed');
    }
  }, [keyword]);
  useEffect(() => {
    console.log('I run only counter changed');
  }, [counter]);
  useEffect(() => {
    console.log('I run keyword & counter changed');
  }, [keyword, counter]);
  return (
    <div className="App">
      <h1>useEffect</h1>
      <input value = {keyword} type='text' placeholder="Search here.." onChange={onChange}></input>
      <h2>{counter}</h2>
      <button onClick={onClick}>+</button>
    </div>
  );
}

export default App;
