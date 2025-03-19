import { useState } from 'react';
import clsx from 'clsx';

import IconArrowDown from '../../assets/images/icon_arrow_down.svg?react';

import styles from './Collapse.module.scss';

function Collapse({ className }: { className: string; }) {
    console.log('Collapse');

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div
            className={clsx(
                styles.Collapse,
                isOpen && styles.Collapse_active,
                className
            )}
        >
            <div
                className={styles.Collapse__header}
                onClick={handleClick}
            >
                <div className={styles.Collapse__title}>Details</div>
                <IconArrowDown />
            </div>
            {isOpen &&
                <div className={styles.Collapse__body}>
                    <ul className={styles.Collapse__list}>
                        <li className={styles.Collapse__item}>
                            <div className={styles.Collapse__itemLeft}>
                                Max. slippage
                            </div>
                            <div className={styles.Collapse__itemRight}>
                                1%
                            </div>
                        </li>
                        <li className={styles.Collapse__item}>
                            <div className={styles.Collapse__itemLeft}>
                                Min. received
                            </div>
                            <div className={styles.Collapse__itemRight}>
                                ≈0.99 TON
                            </div>
                        </li>
                        <li className={styles.Collapse__item}>
                            <div className={styles.Collapse__itemLeft}>
                                Price impact
                            </div>
                            <div className={styles.Collapse__itemRight}>
                                ≈0.15%
                            </div>
                        </li>
                        <li className={styles.Collapse__item}>
                            <div className={styles.Collapse__itemLeft}>
                                Blockchain fee
                            </div>
                            <div className={styles.Collapse__itemRight}>
                                ≈0.15 TON
                            </div>
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
}

export default Collapse;
