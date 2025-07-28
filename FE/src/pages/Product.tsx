import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BackLink from '@/components/BackLink';
import { GOTO_ITEM, CART } from '@/const';

const Product: React.FC = () => {
    const { t } = useTranslation();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get('productId');

    // 달러 표시로 변경.
    const price = 18.50.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return (
        <div id="Content">
            <BackLink />

            <div id="Catalog">
                <h2>{productId}</h2>

                <table>
                <tbody>
                    <tr>
                        <th>{t('itemid')}</th>
                        <th>{t('productid')}</th>
                        <th>{t('productdesc')}</th>
                        <th>{t('listprice')}</th>
                        <th>&nbsp;</th>
                    </tr>
                    <tr>
                        <td><a href={GOTO_ITEM + "EST-11"}>EST-11</a></td>
                        <td>{productId}</td>
                        <td>Venomless</td>
                        <td>{price}</td>
                        <td><a className="Button" href={CART}>{t('addtocart')}</a></td>
                    </tr>
                </tbody>
                </table>
                </div>
        </div>
    );
}

export default Product;