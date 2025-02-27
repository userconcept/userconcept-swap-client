import clsx from 'clsx';

import NavList from '../NavList/NavList.tsx';

import stylesHeader from '../Header/Header.module.scss';
import styles from './NavHeader.module.scss';

type Props = {
    className: string;
    isActive: boolean;
}

function NavHeader({
    className,
    isActive
}: Props) {
    console.log('NavHeader');

    return (
        <nav
            className={clsx(
                styles.NavHeader,
                className,
                isActive && stylesHeader.Header__NavHeader_active
            )}
        >
            <NavList className={styles.NavHeader__NavList} />
        </nav>
    );
}

export default NavHeader;
