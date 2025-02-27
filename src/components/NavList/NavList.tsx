import clsx from 'clsx';

import NavItem from '../NavItem/NavItem.tsx';

import { NavItems } from '../../data/NavItems.data.ts';

import styles from './NavList.module.scss';

function NavList({ className }: { className: string; }) {
    console.log('NavList');

    const renderItems = NavItems.map(item =>
        <NavItem
            className={styles.NavList__NavItem}
            href={item.href}
            key={item.id}
        >
            {item.text}
        </NavItem>
    );

    return (
        <ul className={clsx(
            styles.NavList,
            className
        )}>
            {renderItems}
        </ul>
    );
}

export default NavList;
