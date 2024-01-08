import Button from './components/Button/Button.tsx';
import {useState, MouseEvent} from 'react';
import Input from './components/Input/Input.tsx';

function App() {

	const [counter, setCounter] = useState<number>(0);
	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};

	return (
		<>
			<Button onClick={addCounter}>Button</Button>
			<Button appearance='big' onClick={addCounter}>Button</Button>
			<Input placeholder='Email'/>
		</>
	);
}

export default App;
