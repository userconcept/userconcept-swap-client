import { useState } from 'react';
import { useAtomValue } from 'jotai';
import clsx from 'clsx';

import {
    fromAssetAtom,
    toAssetAtom
} from '../../store/atoms.ts';

import IconSwapHoriz from '../../assets/images/icon_swap_horiz.svg?react';

import styles from './Rate.module.scss';

function Rate({ className }: { className: string; }) {
    console.log('Rate');

    const [
        direction,
        setDirection
    ] = useState<'forward' | 'reverse'>('forward');

    const fromAsset = useAtomValue(fromAssetAtom);
    const toAsset = useAtomValue(toAssetAtom);

    function calculateRate() {
        if (direction === 'forward') {
            return parseFloat((
                fromAsset.price / toAsset.price
            ).toFixed(toAsset.decimals)).toString();
        }

        if (direction === 'reverse') {
            return parseFloat((
                toAsset.price / fromAsset.price
            ).toFixed(fromAsset.decimals)).toString();
        }
    }

    function handleChangeDirection() {
        setDirection((prev) => (
            prev === 'forward' ? 'reverse' : 'forward'
        ));
    }

    const fromSymbol =
        direction === 'forward' ? fromAsset.symbol : toAsset.symbol;

    const toSymbol =
        direction === 'forward' ? toAsset.symbol : fromAsset.symbol;

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
                <span>{`1 ${fromSymbol}`}</span>
                <span className={styles.Rate__separator}>≈</span>
                <span>{`${calculateRate()} ${toSymbol}`}</span>
                <button
                    className={styles.Rate__button}
                    onClick={handleChangeDirection}
                >
                    <IconSwapHoriz />
                    Update currency rate
                </button>
            </div>
        </div>
    );
}

export default Rate;
