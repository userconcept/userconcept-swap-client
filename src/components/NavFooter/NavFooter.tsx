import clsx from 'clsx';

import NavList from '../NavList/NavList.tsx';

import styles from './NavFooter.module.scss';

function NavFooter({ className }: { className: string; }) {
    console.log('NavFooter');

    return (
        <nav
            className={clsx(
                styles.NavFooter,
                className
            )}
        >
            <NavList className={styles.NavFooter__NavList} />
        </nav>
    );
}

export default NavFooter;
