import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { OrderFieldsForm } from '@/types/Order';
import type { ChangeEvent } from '@/types/Common';

import OrderPayment from '@/pages/Order/OrderPayment';
import OrderShipment from '@/pages/Order/OrderShipment';
import OrderConfirm from '@/pages/Order/OrderConfirm';
import OrderView from '@/pages/Order/OrderView';

interface modeProps {
    mode: 'payment' | 'ship' | 'confirm' | 'view';
}

const Order: React.FC<modeProps> = ({ mode }) => {
    const { t } = useTranslation();

    const [shipInfoRequired, setShipInfoRequired] = useState(false);
    const [paymentForm, setPaymentForm] = useState<OrderFieldsForm[]>(
        [
            { name: 'firstName', label: 'billToFirstName', value: '' },
            { name: 'lastName', label: 'billToLastName', value: '' },
            { name: 'address1', label: 'billAddress1', value: '' },
            { name: 'address2', label: 'billAddress2', value: '' },
            { name: 'city', label: 'billCity', value: '' },
            { name: 'state', label: 'billState', value: '' },
            { name: 'zip', label: 'billZip', value: '' },
            { name: 'country', label: 'billCountry', value: '' }
        ]
    );
    const [shipmentForm, setShipmentForm] = useState<OrderFieldsForm[]>(
        [
            { name: 'firstName', label: 'shipToFirstName', value: '' },
            { name: 'lastName', label: 'shipToLastName', value: '' },
            { name: 'address1', label: 'shipAddress1', value: '' },
            { name: 'address2', label: 'shipAddress2', value: '' },
            { name: 'city', label: 'shipCity', value: '' },
            { name: 'state', label: 'shipState', value: '' },
            { name: 'zip', label: 'shipZip', value: '' },
            { name: 'country', label: 'shipCountry', value: '' }
        ]
    )
    const handlePaymentFormChange = (updateForm: OrderFieldsForm[]) => {
        setPaymentForm(updateForm);
    }
    const handleShipmentFormChange = (updateForm: OrderFieldsForm[]) => {
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
    if (mode === 'payment') 
        return <OrderPayment 
                    paymentForm={paymentForm}
                    handlePaymentFormChange={handlePaymentFormChange}
                    shipInfoRequired={shipInfoRequired}
                    handleChange={handleChange}
                    t={t}
                />;
    else if (mode === 'ship')
        return <OrderShipment
                    shipmentForm={shipmentForm}
                    handleShipmentFormChange={handleShipmentFormChange}
                    t={t}
                />
    else if (mode === 'confirm')
        return <OrderConfirm
                    paymentForm={paymentForm}
                    shipmentForm={shipmentForm}
                    t={t}
                />
    else {
        return <OrderView
                    paymentForm={paymentForm}
                    shipmentForm={shipmentForm}
                    handlePaymentFormChange={handlePaymentFormChange}
                    handleShipmentFormChange={handleShipmentFormChange}
                    t={t}
                />
    }
}

export default Order;