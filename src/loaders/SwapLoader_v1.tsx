import { LoaderFunctionArgs } from 'react-router';
import { getDefaultStore } from 'jotai';
import { AssetItems } from '../data/AssetItems.data.ts';
import {
    fromAssetAtom,
    toAssetAtom
} from '../store/atoms.ts';

const store = getDefaultStore();

export function SwapLoader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const fromParam = url.searchParams.get('from');
    const toParam = url.searchParams.get('to');

    const from = AssetItems.find(
        item => item.symbol.toUpperCase() === fromParam?.toUpperCase()
    );

    const to = AssetItems.find(
        item => item.symbol.toUpperCase() === toParam?.toUpperCase()
    );

    if (from) {
        store.set(fromAssetAtom, from);
    }

    if (to) {
        store.set(toAssetAtom, to);
    }

    return null;
}
