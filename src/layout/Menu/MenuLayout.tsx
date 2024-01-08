import {Link, Outlet, useLocation} from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button.tsx';
import {useEffect} from 'react';
import cn from 'classnames';

export function Layout() {
	const location = useLocation();
	useEffect(() => {

	}, [location]);
	console.log(location);
	return <>
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img className={styles['avatar']} src='/avatar.png' alt='Avatar'/>
					<div className={styles['name']}>
                        Current User
					</div>
					<div className={styles['email']}>
                        current@mail.com
					</div>

				</div>
				<div className={styles['menu']}>
					<Link to='/' className={cn(styles['link'], {[styles.active]: location.pathname === '/'})}>
						<img src='/menu-icon.svg' alt='Menu icon'/>
                        Menu</Link>
					<Link to='/cart' className={styles['link']}>
						<img src='/cart-icon.svg' alt='Cart icon'/>
                        Cart</Link>
				</div>
				<Button className={styles['exit']}>
					<img src='/exit-icon.svg' alt='Exit icon'/>
                    Logout
				</Button>
			</div>
			<div>
				<Outlet/>
			</div>

		</div>
	</>;
}