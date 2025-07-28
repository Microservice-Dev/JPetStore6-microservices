import React from 'react';
import { useTranslation } from 'react-i18next';

import BackLink from '@/components/BackLink';

const ConfirmOrder: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div id='Content'>
            <BackLink />
            <div id='Catalog'>
                {t('confirmordercmt')}
                <table>
                <tbody>
                    <tr>
                        <th align="center" colSpan={2}>
                            <b><span style={{ fontSize: '16px' }}>{t('order')}</span></b><br />
                            <b><span style={{ fontSize: '14px' }}>{t('orderdate')} (yyyy/mm/dd hh:mm:ss)</span></b>
                        </th>
                    </tr>

                    <tr>
                        <th colSpan={2}>{t('billingaddress')}</th>
                    </tr>
                    <tr>
                        <td>{t('firstname')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('lastname')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('address1')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('address2')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('city')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('state')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('zip')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('country')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colSpan={2}>{t('shippingaddress')}</th>
                    </tr>
                    <tr>
                        <td>{t('firstname')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('lastname')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('address1')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('address2')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('city')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('state')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('zip')}:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{t('country')}:</td>
                        <td></td>
                    </tr>
                </tbody>
                </table>
                <form action="/order/newOrder?confirmed=true" method="post">
                    <input type="hidden" name="csrf" />
                    <input type="submit" className="Button" value="Confirm" />
                </form>

            </div>
        </div>
    );
}

export default ConfirmOrder;