import styles from './Button.module.css';
import {ButtonProps} from './Button.props.ts';
import cn from 'classnames';
import {FC} from 'react';

// Alternative create component type
export const ButtonAlt: FC<ButtonProps> = ({children, className, ...props}) => {

	return (
		<button className={cn(styles['button'], styles['accent'], className)} {...props}>{children}</button>
	);
};

function Button({children, className, appearance = 'small', ...props}: ButtonProps) {

	return (
		<button className={cn(styles['button'], styles['accent'], className, {
			[styles['small']]: appearance === 'small',
			[styles['big']]: appearance === 'big'
		})} {...props}>{children}</button>
	);
}

export default Button;