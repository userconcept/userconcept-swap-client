import {
    ButtonHTMLAttributes,
    PropsWithChildren
} from 'react';
import clsx from 'clsx';

import IconClose from '../../assets/images/icon_close.svg?react';

import styles from './ButtonClose.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>

function ButtonClose({
    className,
    children,
    onClick
}: PropsWithChildren<Props>) {
    console.log('ButtonClose');

    return (
        <button
            className={clsx(
                styles.ButtonClose,
                className
            )}
            onClick={onClick}
        >
            <IconClose />
            <span className={styles.ButtonClose__text}>{children}</span>
        </button>
    );
}

export default ButtonClose;
