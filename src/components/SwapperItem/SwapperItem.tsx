import { useState } from 'react';
import clsx from 'clsx';

import InputCustom from '../InputCustom/InputCustom.tsx';
import ModalAssets from '../ModalAssets/ModalAssets.tsx';

import type { SwapperItemType } from '../../types/SwapperItem.types.ts';

import IconWallet from '../../assets/images/icon_wallet.svg?react';

import styles from './SwapperItem.module.scss';

type Props = {
    className: string;
} & SwapperItemType

function SwapperItem({
    className,
    direction,
    balance,
    image,
    imageAlt,
    symbol,
    iconArrow,
    currency,
    active
}: Props) {
    console.log('SwapperItem');

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [value, setValue] = useState('');

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    return (
        <div
            className={clsx(
                styles.SwapperItem,
                active && styles.SwapperItem_active,
                className
            )}
        >
            <div className={styles.SwapperItem__top}>
                <div className={styles.SwapperItem__topLeft}>
                    <span>
                        {direction === 'out' && 'You send'}
                        {direction === 'in' && 'You receive'}
                    </span>
                </div>
                <div className={styles.SwapperItem__topRight}>
                    <button className={clsx(
                        styles.SwapperItem__buttonWallet,
                        styles.SwapperItem__buttonWallet_active
                    )}>
                        <IconWallet />
                        <span>{balance}</span>
                    </button>
                </div>
            </div>
            <div className={styles.SwapperItem__center}>
                <div className={styles.SwapperItem__centerLeft}>
                    <button
                        className={styles.SwapperItem__button}
                        onClick={() => setModalIsOpen(true)}
                    >
                        <img
                            src={image}
                            width="120"
                            height="120"
                            alt={imageAlt}
                        />
                        <span>{symbol}</span>
                        {iconArrow()}
                    </button>
                </div>
                <ModalAssets
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                    title="Select Token"
                />
                <div className={styles.SwapperItem__centerRight}>
                    <InputCustom
                        className={styles.SwapperItem__InputCustom}
                        type="text"
                        id={`swap-${direction}-${symbol}`}
                        name={`swap-${direction}-${symbol}`}
                        value={value}
                        onChange={handleInputChange}
                        autoComplete="off"
                        placeholder="0"
                    />
                </div>
            </div>
            <div className={styles.SwapperItem__bottom}>
                <div className={styles.SwapperItem__bottomRight}>
                    <span>${currency}</span>
                </div>
            </div>
        </div>
    );
}

export default SwapperItem;
