import { useAtom } from 'jotai';
import clsx from 'clsx';

import {
    fromAssetAtom,
    toAssetAtom,
    fromValueAtom,
    toValueAtom,
    fromCurrencyAtom,
    toCurrencyAtom
} from '../../store/atoms.ts';

import SwapperItem from '../SwapperItem/SwapperItem.tsx';

import IconSwapVert from '../../assets/images/icon_swap_vert.svg?react';

import styles from './Swapper.module.scss';

function Swapper({ className }: { className: string; }) {
    console.log('Swapper');

    const [fromAsset, setFromAsset] = useAtom(fromAssetAtom);
    const [toAsset, setToAsset] = useAtom(toAssetAtom);

    const [fromValue, setFromValue] = useAtom(fromValueAtom);
    const [toValue, setToValue] = useAtom(toValueAtom);

    const [fromCurrency, setFromCurrency] = useAtom(fromCurrencyAtom);
    const [toCurrency, setToCurrency] = useAtom(toCurrencyAtom);


    function trimDecimals(value: number, decimals: number): string {
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
                onChange={handleChangeFromValue}
            />
            <SwapperItem
                className={styles.Swapper__SwapperItem}
                direction="to"
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
