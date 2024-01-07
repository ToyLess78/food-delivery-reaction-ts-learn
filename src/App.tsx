
import './App.css'
import Button from './components/Button/Button.tsx';
import {useState, MouseEvent} from 'react';

function App() {

    const [counter, setCounter] = useState<number>(0);
    const addCounter = (e: MouseEvent) => {
        console.log(e);
    }

  return (
    <>
<Button onClick={addCounter}>Button</Button>
    </>
  )
}

export default App
