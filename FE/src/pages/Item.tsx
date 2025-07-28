import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BackLink from '@/components/BackLink';
import { CART } from '@/const';
import itemImg from '@images/snake1.gif';

const Item: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const itemId = queryParams.get('itemId');

    // 달러 표시로 변경.
    const price = 18.50.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    
    return (
        <div id="Content">
            <BackLink />

            <div id="Catalog">
            <table>
            <tbody>
                <tr>
                    <td>
                        {/* TO DO: itemImg는 동적으로 만들어줘야 됨. */}
                        <img src={itemImg} style={{ verticalAlign: 'bottom' }}></img> 
                        Doubles as a wach dog
                    </td>
                </tr>
                <tr>
                    <td><b> {itemId} </b></td>
                </tr>
                <tr>
                    <td><b><span style={{ fontSize: '16px' }}>Venomless Rattlesnake</span></b></td>
                </tr>
                <tr>
                    <td>Rattlesnake</td>
                </tr>
                <tr>
                    <td>
                        {/* TO DO: stock이 0 이하인 경우도 처리 필요. */}
                        10000 in stock.
                    </td>
                </tr>
                <tr>
                    <td>{price}</td>
                </tr>

                <tr>
                    <td><a className="Button" href={CART}>{t('addtocart')}</a></td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
    );
}

export default Item;