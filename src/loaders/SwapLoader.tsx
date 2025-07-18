import { LoaderFunctionArgs } from 'react-router';
import { AssetItems } from '../data/AssetItems.data.ts';

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

    return { from, to };
}
