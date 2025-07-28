import React from 'react';
import { useTranslation } from 'react-i18next';

import { GOTO_PRODUCT } from '@/const';

const IncludeMyList: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
        <p>{t('mylisttitle')} <br />
            {t('mylistcmt')}</p>
            <ul>
                <li>
                    <a href={GOTO_PRODUCT}>Product Name </a>
                    Product ID
                </li>
            </ul>
        </>
    )
}

export default IncludeMyList;