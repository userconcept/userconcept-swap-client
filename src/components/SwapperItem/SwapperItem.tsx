import React, { useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import clsx from 'clsx';

import {
    activeDirectionAtom,
    fromAssetAtom,
    toAssetAtom,
    fromValueAtom,
    toValueAtom,
    fromCurrencyAtom,
    toCurrencyAtom
} from '../../store/atoms.ts';

import InputCustom from '../InputCustom/InputCustom.tsx';
import ModalAssets from '../ModalAssets/ModalAssets.tsx';

import IconWallet from '../../assets/images/icon_wallet.svg?react';
import IconArrowDown from '../../assets/images/icon_arrow_down.svg?react';

import styles from './SwapperItem.module.scss';

type Props = {
    className: string;
    direction: "from" | "to";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SwapperItem({
    className,
    direction,
    onChange
}: Props) {
    console.log('SwapperItem');

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setActiveDirection = useSetAtom(activeDirectionAtom);

    const [asset] = useAtom(
        direction === 'from' ? fromAssetAtom : toAssetAtom
    );

    const [value] = useAtom(
        direction === 'from' ? fromValueAtom : toValueAtom
    );

    const [currency] = useAtom(
        direction === 'from' ? fromCurrencyAtom : toCurrencyAtom
    );

    const { symbol, name, image } = asset;

    function formatCurrency(val: number) {
        return val.toLocaleString('en-US', {
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
                        {direction === 'from' ? 'You send' : 'You receive'}
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
                        onClick={() => {
                            setModalIsOpen(true);
                            setActiveDirection(direction);
                        }}
                    >
                        {image && <img
                            src={image}
                            width="120"
                            height="120"
                            alt={name}
                        />}
                        <span>{symbol}</span>
                        {<IconArrowDown />}
                    </button>
                </div>
                <ModalAssets
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                    title="Select token"
                    direction={direction}
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
