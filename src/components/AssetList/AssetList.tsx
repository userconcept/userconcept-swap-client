import clsx from 'clsx';

import AssetItem from '../AssetItem/AssetItem.tsx';

import type { AssetItemType } from '../../types/AssetItem.types.ts';

import styles from './AssetList.module.scss';

type Props = {
    className: string;
    items: AssetItemType[];
}

function AssetList({
    className,
    items
}: Props) {
    console.log('AssetList');

    const renderItems = items.map((item: AssetItemType) =>
        <AssetItem
            className={styles.AssetList__AssetItem}
            key={item.id}
            {...item}
        />
    );

    return (
        <ul
            className={clsx(
                styles.AssetList,
                className
            )}
        >
            {renderItems}
        </ul>
    );
}

export default AssetList;
