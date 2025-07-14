import { atom } from 'jotai';
import { AssetItems } from '../data/AssetItems.data.ts';
import type { AssetItemType } from '../types/AssetItem.types.ts';

export const activeDirectionAtom = atom<'from' | 'to'>('from');

export const fromAssetAtom = atom<AssetItemType>(AssetItems[0]);
export const toAssetAtom = atom<AssetItemType>(AssetItems[1]);

export const fromValueAtom = atom<string>('');
export const toValueAtom = atom<string>('');

export const fromCurrencyAtom = atom<number>(0);
export const toCurrencyAtom = atom<number>(0);

export const activeSlippageAtom = atom<number>(5);
