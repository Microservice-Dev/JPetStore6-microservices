import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BackLink from '@/components/BackLink';
import { GOTO_PRODUCT } from '@/const';

const Category: React.FC = () => {
    const { t } = useTranslation();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get('categoryId');

    return (
        <div id="Content">
            <BackLink />

            <div id="Catalog">

                <h2>{categoryId}</h2>

                <table>
                    <tr>
                        <th>{t('productid')}</th>
                        <th>{t('productname')}</th>
                    </tr>
                    
                    {/* TO DO: Category 정보 가져와서 반복문으로 끼워넣기 */}
                    <tr>
                        <td><a href={GOTO_PRODUCT + categoryId}>RP-SN-01</a></td>
                        <td>Rattlesnake</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Category;