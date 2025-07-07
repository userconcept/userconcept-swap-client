import React, { HTMLInputAutoCompleteAttribute } from 'react';
import clsx from 'clsx';

import styles from './InputCustom.module.scss';

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

function InputCustom({
    className,
    type,
    id,
    name,
    value,
    onChange,
    autoComplete,
    placeholder
}: Props) {
    console.log('InputCustom');

    return (
        <input
            className={clsx(
                styles.InputCustom,
                className
            )}
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            placeholder={placeholder}
            inputMode="decimal"
            pattern="^([0-9]+([.,][0-9]*)?|[0-9]*[.,][0-9]+)$"
        />
    );
}

export default InputCustom;
