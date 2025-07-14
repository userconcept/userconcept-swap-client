import { useState } from 'react';
import { useAtomValue } from 'jotai';
import clsx from 'clsx';

import {
    toAssetAtom,
    toValueAtom,
    activeSlippageAtom
} from '../../store/atoms.ts';

import IconArrowDown from '../../assets/images/icon_arrow_down.svg?react';

import styles from './Collapse.module.scss';

function Collapse({ className }: { className: string; }) {
    console.log('Collapse');

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    const {
        symbol,
        decimals
    } = useAtomValue(toAssetAtom);

    const toValue = useAtomValue(toValueAtom);

    const slippage = useAtomValue(activeSlippageAtom);

    function minReceived() {
        return parseFloat((+toValue * (1 - slippage/100)).toFixed(decimals)).toString();
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
                                {`${slippage}%`}
                            </div>
                        </li>
                        <li className={styles.Collapse__item}>
                            <div className={styles.Collapse__itemLeft}>
                                Min. received
                            </div>
                            <div className={styles.Collapse__itemRight}>
                                {`≈${minReceived()} ${symbol}`}
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
