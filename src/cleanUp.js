import {useState, useEffect} from 'react';

function Hello() {
    useEffect(() => {
        console.log('created');
        return () => {console.log('bye')};
    },[]);
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => {
        setShowing((current) => !current);
    }  
    return (
    <div className="App">
      Clean Up
      <hr></hr>
      {showing ? <Hello></Hello> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
