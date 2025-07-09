import type { AssetItemType } from '../types/AssetItem.types.tsx';

export const AssetItems: AssetItemType[] = [{
    id: '1',
    symbol: 'USDT',
    name: 'Tether USDT',
    image: 'https://userconcept.github.io/userconcept-swap-client/images/image_usdt.png',
    decimals: 6,
    price: 1.00,
    diff24: '0.00%'
}, {
    id: '2',
    symbol: 'TON',
    name: 'Toncoin',
    image: 'https://userconcept.github.io/userconcept-swap-client/images/image_ton.png',
    decimals: 9,
    price: 2.88,
    diff24: '3.31%'
}, {
    id: '3',
    symbol: 'NOT',
    name: 'Notcoin',
    image: 'https://userconcept.github.io/userconcept-swap-client/images/image_not.png',
    decimals: 9,
    price: 0.001875,
    diff24: '-8.32%'
}, {
    id: '4',
    symbol: 'REDO',
    name: 'Resistance Dog',
    image: 'https://userconcept.github.io/userconcept-swap-client/images/image_redo.png',
    decimals: 9,
    price: 0.05158,
    diff24: '4.59%'
}];
