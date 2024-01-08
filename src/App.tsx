import Button from './components/Button/Button.tsx';
import {useState, MouseEvent} from 'react';
import Input from './components/Input/Input.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Menu} from './pages/Menu/Menu.tsx';
import {Cart} from './pages/Cart/Cart.tsx';
import {Error} from './pages/Error/Error.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Menu/>
	},
	{
		path: '/Cart',
		element: <Cart/>
	},
	{
		path: '*',
		element: <Error/>
	}
]);

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
			<RouterProvider router={router}/>

		</>
	);
}

export default App;
