import { useState } from 'react';
import clsx from 'clsx';

import SwapperItem from '../SwapperItem/SwapperItem.tsx';

import IconSwapVert from '../../assets/images/icon_swap_vert.svg?react';

import { AssetItems } from '../../data/AssetItems.data.ts';

import styles from './Swapper.module.scss';

function Swapper({ className }: { className: string; }) {
    console.log('Swapper');

    const [fromAsset, setFromAsset] = useState(AssetItems[0]);
    const [toAsset, setToAsset] = useState(AssetItems[1]);

    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    const [fromCurrency, setFromCurrency] = useState(0);
    const [toCurrency, setToCurrency] = useState(0);

    function trimDecimals(value: number, decimals: number): string {
        // const factor = Math.pow(10, decimals);
        // return (Math.round(value * factor) / factor).toString();
        return parseFloat(value.toFixed(decimals)).toString();
    }

    function changeFromValue(value: string) {
        if (!+value) return '';
        const result = (+value * fromAsset.price / toAsset.price);
        return trimDecimals(result, toAsset.decimals);
    }

    function changeToValue(value: string) {
        if (!+value) return '';
        const result = (+value * toAsset.price / fromAsset.price);
        return trimDecimals(result, fromAsset.decimals);
    }

    function changeFromCurrency(value: string) {
        return +value * fromAsset.price;
    }

    function changeFromToCurrency(value: string) {
        return +value * fromAsset.price / toAsset.price * toAsset.price;
    }

    function changeToCurrency(value: string) {
        return +value * toAsset.price;
    }

    function changeToFromCurrency(value: string) {
        return +value * toAsset.price / fromAsset.price * fromAsset.price;
    }

    function handleChangeFromValue(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.replace(',', '.');
        if (!/^[0-9]*\.?[0-9]*$/.test(value)) return;

        const decimal = value.split('.')[1];
        if (decimal && decimal.length > fromAsset.decimals) return;

        setFromValue(value);
        setToValue(changeFromValue(value));
        setFromCurrency(changeFromCurrency(value));
        setToCurrency(changeFromToCurrency(value));
    }

    function handleChangeToValue(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.replace(',', '.');
        if (!/^[0-9]*\.?[0-9]*$/.test(value)) return;

        const decimal = value.split('.')[1];
        if (decimal && decimal.length > toAsset.decimals) return;

        setToValue(value);
        setFromValue(changeToValue(value));
        setToCurrency(changeToCurrency(value));
        setFromCurrency(changeToFromCurrency(value));
    }

    const reverseAssets = () => {
        setFromAsset(toAsset);
        setToAsset(fromAsset);
        setFromValue(toValue);
        setToValue(fromValue);
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div
            className={clsx(
                styles.Swapper,
                className
            )}
        >
            <SwapperItem
                className={styles.Swapper__SwapperItem}
                direction="from"
                symbol={fromAsset.symbol}
                name={fromAsset.symbol}
                image={fromAsset.image}
                decimals={fromAsset.decimals}
                price={fromAsset.price}
                diff24={fromAsset.diff24}
                currency={fromCurrency}
                value={fromValue}
                onChange={handleChangeFromValue}
            />
            <SwapperItem
                className={styles.Swapper__SwapperItem}
                direction="to"
                symbol={toAsset.symbol}
                name={toAsset.symbol}
                image={toAsset.image}
                decimals={toAsset.decimals}
                price={toAsset.price}
                diff24={toAsset.diff24}
                currency={toCurrency}
                value={toValue}
                onChange={handleChangeToValue}
            />
            <button
                className={styles.Swapper__swapperButton}
                onClick={reverseAssets}
            >
                <IconSwapVert />
                <span>Change swap direction</span>
            </button>
        </div>
    );
}

export default Swapper;
