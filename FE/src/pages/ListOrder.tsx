import React from 'react';
import { useTranslation } from 'react-i18next';

import { GOTO_ORDER_DETAILS } from '@/const';

const ListOrder: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div id="Content">
            <div id="Catalog">
            <h2>{t('myorder')}</h2>
                <table>
                <tbody>
                    <tr>
                        <th>{t('orderid')}</th>
                        <th>{t('date')}</th>
                        <th>{t('totalprice')}</th>
                    </tr>

                    {/* TO DO: 가져온 데이터를 이용해서 반복으로 보여줄 것. */}
                    <tr>
                        <td>
                            <a href={GOTO_ORDER_DETAILS}>Order ID</a>
                        </td>
                        <td>yyyy/mm/dd hh:mm:ss</td>
                        <td>$100.00</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListOrder;