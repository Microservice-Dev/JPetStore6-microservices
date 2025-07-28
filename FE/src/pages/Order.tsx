import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import IncludeOrderFields from '@/components/IncludeOrderFields';
import type { OrderFieldsForm } from '@/types/Order';
import type { ChangeEvent } from '@/types/Common';

import { GOTO_CONFIRM, GOTO_SHIP } from '@/const';

interface modeProps {
    mode: 'payment' | 'ship';
}

// mode에 따른 form label 받기.
function getLabels(mode: string) {
    if (mode === 'payment') {
        return {
            firstName: 'billToFirstName',
            lastName: 'billToLastName',
            address1: 'billAddress1',
            address2: 'billAddress2',
            city: 'billCity',
            state: 'billState',
            zip: 'billZip',
            country: 'billCountry'
        };
    }
    else {
        return {
            firstName: 'shipToFirstName',
            lastName: 'shipToLastName',
            address1: 'shipAddress1',
            address2: 'shipAddress2',
            city: 'shipCity',
            state: 'shipState',
            zip: 'shipZip',
            country: 'shipCountry'
        };
    };
}

const Order: React.FC<modeProps> = ({ mode }) => {
    const { t } = useTranslation();

    const formLabels = getLabels(mode);
    const [shipInfoRequired, setShipInfoRequired] = useState(false);
    const [paymentForm, setPaymentForm] = useState<OrderFieldsForm>(() => {
        return {
            firstName: '',
            lastName: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        };
    });
    const [shipmentForm, setShipmentForm] = useState<OrderFieldsForm>(() => {
        return {
            firstName: '',
            lastName: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        };
    });
    const handlePaymentFormChange = (updateForm: OrderFieldsForm) => {
        setPaymentForm(updateForm);
    }
    const handleShipmentFormChange = (updateForm: OrderFieldsForm) => {
        setShipmentForm(updateForm);
    }

    const handleChange = (e: ChangeEvent) => {
        if (e.target.checked) {
            setShipInfoRequired(true);
        }
        else {
            setShipInfoRequired(false);
        }
    };
    
    if (mode === 'payment') {
        // 결제 수단 모드인 경우.
        return (
            <div id="Content">
                <div id="Catalog">
                    <form action="/order/newOrder" method="post">
                        <table>
                        <tbody>
                            <tr>
                                <th colSpan={2}>{t('paymentdetails')}</th>
                            </tr>
                            <tr>
                                <td>{t('cardtype')}:</td>
                                <td>
                                    <select name="order.cardType">
                                        <option value="Visa">Visa</option>
                                        <option value="MasterCard" >MasterCard</option>
                                        <option value="American Express">American Express</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>{t('cardnumber')}:</td>
                                <td>
                                    <input type="text" name="creditCard" /> * Use a fakenumber!
                                </td>
                            </tr>
                            <tr>
                                <td>{t('expirydate')}:</td>
                                <td>
                                    <input type="text" name="expiryDate" />
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={2}>{t('billingaddress')}</th>
                            </tr>
                            <IncludeOrderFields formLabels={formLabels} form={paymentForm} onChange={handlePaymentFormChange}/>
                            <tr>
                                <td colSpan={2}>
                                    <input type="checkbox" name="shippingAddressRequired" onChange={handleChange}/>
                                    {t('shipdiff')}
                                </td>
                            </tr>
                        </tbody>
                        </table>
                        <input type="hidden" name="csrf" />
                        {/* TO DO: 추후, submit으로 보내지 않을 수 있음. */}
                        { shipInfoRequired && <a className="Button" href={GOTO_SHIP}> {t('continue')}</a> }
                        { !shipInfoRequired && <a className="Button" href={GOTO_CONFIRM}> {t('continue')}</a> }
                    </form>
                </div>
            </div>
        );
    }
    else {
        // Ship 모드인 경우.
        return (
            <div id="Content">
                <div id="Catalog">
                    <form action="/order/newOrder" method="post">
                        <table>
                        <tbody>
                            <tr>
                                <th colSpan={2}>{t('shippingaddress')}</th>
                            </tr>
                            <IncludeOrderFields formLabels={formLabels} form={shipmentForm} onChange={handleShipmentFormChange} />
                        </tbody>
                        </table>
                        <input type="hidden" name="csrf" />
                        <a className="Button" href={GOTO_CONFIRM}> {t('continue')}</a>
                    </form>
                </div>
            </div>
        );
    }
}

export default Order;