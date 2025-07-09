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
                <div className={styles.AssetItem__topRight}>${price}</div>
            </div>
            <div className={styles.AssetItem__bottom}>
                <div className={styles.AssetItem__subtitle}>{name}</div>
                <div className={styles.AssetItem__bottomRight}>
                    <div className={styles[diff24.startsWith('-') ?
                        'AssetItem__growDown' : 'AssetItem__growUp'
                    ]}>
                        {diff24}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default AssetItem;
