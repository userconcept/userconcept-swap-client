import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import type { AssetItemType } from '../../types/AssetItem.types.ts';

import styles from './AssetItem.module.scss';

type Props = {
    className: string;
    onSelect: () => void;
} & AssetItemType

function AssetItem({
    className,
    symbol,
    name,
    image,
    price,
    diff24,
    onSelect
}: PropsWithChildren<Props>) {
    console.log('AssetItem');

    return (
        <li
            className={clsx(
                styles.AssetItem,
                className
            )}
            onClick={onSelect}
        >
            <img
                className={styles.AssetItem__img}
                src={image}
                alt={name}
            />
            <div className={styles.AssetItem__top}>
                <h3 className={styles.AssetItem__title}>{symbol}</h3>
                <div>${price}</div>
            </div>
            <div className={styles.AssetItem__bottom}>
                <div>{name}</div>
                <div>
                    <div className={styles[diff24.startsWith('-') ?
                        'AssetItem__grow_down' : 'AssetItem__grow_up'
                    ]}>
                        {diff24}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default AssetItem;
