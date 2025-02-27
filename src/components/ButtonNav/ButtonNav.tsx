import {
    ButtonHTMLAttributes,
    PropsWithChildren
} from 'react';
import clsx from 'clsx';

import IconMenu from '../../assets/images/icon_menu.svg?react';
import IconClose from '../../assets/images/icon_close.svg?react';

import styles from './ButtonNav.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>

type CustomProps = { isActive: boolean; }

function ButtonNav({
    className,
    children,
    isActive,
    onClick
}: PropsWithChildren<Props> & CustomProps) {
    console.log('ButtonNav');

    return (
        <button
            className={clsx(
                styles.ButtonNav,
                isActive && styles.ButtonNav_active,
                className
            )}
            onClick={onClick}
        >
            <IconMenu />
            <IconClose />
            <span className={styles.ButtonNav__text}>{children}</span>
        </button>
    );
}

export default ButtonNav;
