import './Button.module.css';
import {ButtonProps} from './Button.props.ts';
import cn from 'classnames';
import {FC} from 'react';

// Alternative create component type
export const ButtonAlt: FC<ButtonProps> = ({children, className, ...props}) => {

    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    );
}
function Button({children, className, ...props}: ButtonProps) {

    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    );
}

export default Button;