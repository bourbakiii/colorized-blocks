import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const Button: FC<IButtonProps> = ({children, ...rest}) => {
    return (
        <button
            {...rest}
            className={`text-white transition duration-500 bg-gray-800 hover:bg-gray-900 hover:opacity-90  outline-none  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ${rest.className || ''}`}
        >{
            children
        }</button>
    )
};
export {Button};