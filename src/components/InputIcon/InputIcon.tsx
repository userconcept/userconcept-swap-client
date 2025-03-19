import React, {
    HTMLInputAutoCompleteAttribute,
    PropsWithChildren
} from 'react';
import clsx from 'clsx';

import styles from './InputIcon.module.scss';

type Props = {
    className: string;
    type: "text" | "email" | "password";
    id: string;
    name: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    placeholder?: string;
}

function InputIcon({
    className,
    type,
    id,
    name,
    value,
    onChange,
    autoComplete,
    placeholder,
    children
}: PropsWithChildren<Props>) {
    console.log('InputIcon');

    return (
        <div
            className={clsx(
                styles.InputIcon,
                className
            )}
        >
            <input
                className={styles.InputIcon__input}
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                placeholder={placeholder}
            />
            {children}
        </div>
    );
}

export default InputIcon;
