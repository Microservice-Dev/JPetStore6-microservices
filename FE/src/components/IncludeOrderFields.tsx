import React from 'react';
import { useTranslation } from 'react-i18next';

import type { onReceiveOrderProps} from '@/types/Order';
import type { ChangeEvent } from '@/types/Common';

// 서로 다른 form에서 키 값을 맞춰주기 위함.
const keyDict: Record<string, string> = {
    billToFirstName: 'firstName',
    billToLastName: 'lastName',
    billAddress1: 'address1',
    billAddress2: 'address2',
    billCity: 'city',
    billState: 'state',
    billZip: 'zip',
    billCountry: 'country',

    shipToFirstName: 'firstName',
    shipToLastName: 'lastName',
    shipAddress1: 'address1',
    shipAddress2: 'address2',
    shipCity: 'city',
    shipState: 'state',
    shipZip: 'zip',
    shipCountry: 'country',
}

const IncludeOrderFields: React.FC<onReceiveOrderProps> = ({ formLabels, form, onChange }) => {
    const { t } = useTranslation();
    const {
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zip,
        country,
    } = formLabels;

    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target;
        const key = keyDict[name];
        console.log(key, value);
        onChange({
            ...form,
            [key]: value,
        });
    };

    return (
        <>
            <tr>
                <td>{t('firstname')}:</td>
                <td><input type="text" name={firstName} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('lastname')}:</td>
                <td><input type="text" name={lastName} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('address1')}:</td>
                <td><input type="text" name={address1} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('address2')}:</td>
                <td><input type="text" name={address2} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('city')}:</td>
                <td><input type="text" name={city} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('state')}:</td>
                <td><input type="text" name={state} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('zip')}:</td>
                <td><input type="text" name={zip} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('country')}:</td>
                <td><input type="text" name={country} onChange={handleChange} /></td>
            </tr>
        </>
    )
}

export default IncludeOrderFields;