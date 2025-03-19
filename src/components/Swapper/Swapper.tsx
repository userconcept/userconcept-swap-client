import clsx from 'clsx';

import SwapperItem from '../SwapperItem/SwapperItem.tsx';

import IconArrowDown from '../../assets/images/icon_arrow_down.svg?react';
import IconSwapVert from '../../assets/images/icon_swap_vert.svg?react';

import styles from './Swapper.module.scss';

function Swapper({ className }: { className: string; }) {
    console.log('Swapper');

    return (
        <div
            className={clsx(
                styles.Swapper,
                className
            )}
        >
            <SwapperItem
                className={styles.Swapper__SwapperItem}
                direction="out"
                balance="0"
                image="/images/image_usdt.png"
                imageAlt="USDT"
                symbol="USDT"
                iconArrow={IconArrowDown}
                currency="0"
                active={true}
            />
            <SwapperItem
                className={styles.Swapper__SwapperItem}
                direction="in"
                balance="0"
                image="/images/image_ton.png"
                imageAlt="TON"
                symbol="TON"
                iconArrow={IconArrowDown}
                currency="0"
            />
            <button
                className={styles.Swapper__swapperButton}
            >
                <IconSwapVert />
                <span>Change Swap Direction</span>
            </button>
        </div>
    );
}

export default Swapper;
