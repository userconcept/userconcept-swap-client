import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import type { AssetItemType } from '../../types/AssetItem.types.ts';

import styles from './AssetItem.module.scss';

type Props = {
    className: string;
} & AssetItemType

function AssetItem({
    className,
    symbol,
    name,
    image
}: PropsWithChildren<Props>) {
    console.log('AssetItem');

    return (
        <li
            className={clsx(
                styles.AssetItem,
                className
            )}
        >
            <img
                className={styles.AssetItem__img}
                src={image}
                alt={name}
            />
            <div className={styles.AssetItem__top}>
                <h3 className={styles.AssetItem__title}>{symbol}</h3>
            </div>
            <div className={styles.AssetItem__bottom}>
                <div className={styles.AssetItem__subtitle}>{name}</div>
            </div>
        </li>
    );
}

export default AssetItem;
