import clsx from 'clsx';

import IconSwapHoriz from '../../assets/images/icon_swap_horiz.svg?react';

import styles from './Rate.module.scss';

function Rate({ className }: { className: string; }) {
    console.log('Rate');

    return (
        <div
            className={clsx(
                styles.Rate,
                className
            )}
        >
            <div className={styles.Rate__left}>
                Rate
            </div>
            <div className={styles.Rate__right}>
                <span>1 USDT</span>
                <span className={styles.Rate__separator}>≈</span>
                <span>0.28693 TON</span>
                <button className={styles.Rate__button}>
                    <IconSwapHoriz />
                    Update currency rate
                </button>
            </div>
        </div>
    );
}

export default Rate;
