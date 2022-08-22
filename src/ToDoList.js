import {useState, useEffect} from 'react';


function App() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => {
        setToDo((toDo) => event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(!toDo) {
            return;
        }
        setToDo((toDo) => "");
        setToDos((currentArray) => [toDo, ...currentArray])
    }
    return (
    <div className="App">
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input value={toDo} type='text' placeholder='Write your to do..' onChange={onChange}></input>
            <button>Add To Do</button>
        </form>
        <hr></hr>
        <ul>
            {toDos.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
  );
}

export default App;
