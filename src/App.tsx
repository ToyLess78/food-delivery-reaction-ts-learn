import Button from './components/Button/Button.tsx';
import {useState, MouseEvent} from 'react';
import Input from './components/Input/Input.tsx';
import {Route, Routes} from 'react-router-dom';
import {Menu} from './pages/Menu/Menu.tsx';
import {Cart} from './pages/Cart/Cart.tsx';
import {Error} from './pages/Error/Error.tsx';

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
			<div>
				<a href='/'>Menu</a>
				<a href='/cart'>Cart</a>
			</div>
			<Routes>
				<Route path='/' element={<Menu/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='*' element={<Error/>}/>
			</Routes>
		</>
	);
}

export default App;
