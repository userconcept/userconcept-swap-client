import React from 'react';
import clsx from 'clsx';

import NavList from '../NavList/NavList.tsx';

import styles from './NavHeader.module.scss';

type Props = {
    className: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function NavHeader({
    className,
    onClick
}: Props) {
    console.log('NavHeader');

    return (
        <nav
            className={clsx(
                styles.NavHeader,
                className
            )}
            onClick={onClick}
        >
            <NavList className={styles.NavHeader__NavList} />
        </nav>
    );
}

export default NavHeader;
