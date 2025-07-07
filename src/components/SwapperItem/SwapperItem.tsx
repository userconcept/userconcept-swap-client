import React, { useState } from 'react';
import clsx from 'clsx';

import InputCustom from '../InputCustom/InputCustom.tsx';
import ModalAssets from '../ModalAssets/ModalAssets.tsx';

import type { AssetItemType } from '../../types/AssetItem.types.ts';

import IconWallet from '../../assets/images/icon_wallet.svg?react';
import IconArrowDown from '../../assets/images/icon_arrow_down.svg?react';

import styles from './SwapperItem.module.scss';

type Props = {
    className: string;
    direction: string;
    currency: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<AssetItemType, 'id'>

function SwapperItem({
    className,
    direction,
    symbol,
    name,
    image,
    currency,
    value,
    onChange
}: Props) {
    console.log('SwapperItem');

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function formatCurrency(currency: number) {
        return currency.toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    return (
        <div
            className={clsx(
                styles.SwapperItem,
                className
            )}
        >
            <div className={styles.SwapperItem__top}>
                <div className={styles.SwapperItem__topLeft}>
                    <span>
                        {direction === 'from' && 'You send'}
                        {direction === 'to' && 'You receive'}
                    </span>
                </div>
                <div className={styles.SwapperItem__topRight}>
                    <button className={clsx(
                        styles.SwapperItem__buttonWallet
                    )}>
                        <IconWallet />
                        <span>0</span>
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
                            alt={name}
                        />
                        <span>{symbol}</span>
                        {<IconArrowDown />}
                    </button>
                </div>
                <ModalAssets
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                    title="Select token"
                />
                <div className={styles.SwapperItem__centerRight}>
                    <InputCustom
                        className={styles.SwapperItem__InputCustom}
                        type="text"
                        id={`swap-${direction}-${symbol}`}
                        name={`swap-${direction}-${symbol}`}
                        value={value}
                        onChange={onChange}
                        autoComplete="off"
                        placeholder="0"
                    />
                </div>
            </div>
            <div className={styles.SwapperItem__bottom}>
                <div className={styles.SwapperItem__bottomRight}>
                    <span>${formatCurrency(currency)}</span>
                </div>
            </div>
        </div>
    );
}

export default SwapperItem;
