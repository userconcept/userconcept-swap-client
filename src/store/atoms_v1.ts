import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';
import { AssetItems } from '../data/AssetItems.data.ts';
import type { AssetItemType } from '../types/AssetItem.types.ts';

function getAssetFromQuery(
    paramName: 'from' | 'to'
): AssetItemType | undefined {
    if (typeof window === 'undefined') return undefined;

    const searchParams = new URLSearchParams(window.location.search);
    const symbol = searchParams.get(paramName);

    if (!symbol) return undefined;

    return AssetItems.find(
        item => item.symbol.toUpperCase() === symbol.toUpperCase()
    );
}

export const activeDirectionAtom = atom<'from' | 'to'>('from');

export const fromAssetAtom = atomWithDefault<AssetItemType>(
    () => getAssetFromQuery('from') ?? AssetItems[0]
);

export const toAssetAtom = atomWithDefault<AssetItemType>(
    () => getAssetFromQuery('to') ?? AssetItems[1]
);

export const fromValueAtom = atom<string>('');
export const toValueAtom = atom<string>('');

export const fromCurrencyAtom = atom<number>(0);
export const toCurrencyAtom = atom<number>(0);

export const activeSlippageAtom = atom<number>(5);
