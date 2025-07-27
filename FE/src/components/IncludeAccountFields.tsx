import React from 'react';
import { useTranslation } from 'react-i18next';

import type { ReceiveForm } from '@/types/Account';

const IncludeAccountFields: React.FC<ReceiveForm> = ({ form, onChange }) => {
    const { t } = useTranslation();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type, value } = e.target;

        if (type === 'checkbox') {
            onChange({
                ...form,
                [name]: Boolean(value),
            })
        } else {
            onChange({
                ...form,
                [name]: value,
            });
        }
    };

    return (
        <>
        <h3>{t('userinfotitle')}</h3>

        <table>
        <tbody>
            <tr>
                <td>{t('firstname')}</td>
                <td><input type="text" name="firstname" value={form.firstname} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('lastname')}</td>
                <td><input type="text" name="lastname" value={form.lastname} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('email')}</td>
                <td><input type="text" name="email" value={form.email} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('phone')}</td>
                <td><input type="text" name="phone" value={form.phone} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('address1')}</td>
                <td><input type="text" name="address1" value={form.address1} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('address2')}</td>
                <td><input type="text" name="address2" value={form.address2} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('city')}</td>
                <td><input type="text" name="city" value={form.city} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('state')}</td>
                <td><input type="text" name="state" value={form.state} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('zip')}</td>
                <td><input type="text" name="zip" value={form.zip} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('country')}</td>
                <td><input type="text" name="country" value={form.country} onChange={handleChange} /></td>
            </tr>
        </tbody>
        </table>

        <h3>{t('profiletitle')}</h3>

        <table>
        <tbody>
            <tr>
                <td>{t('lang')}</td>
                <td>
                    <select name="lang" value={form.lang} onChange={handleChange}>
                        <option value="english">english</option>
                        <option value="korean">korean</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>{t('favcategory')}</td>
                <td><select name="favcategory" value={form.favcategory} onChange={handleChange}>
                    <option value="FISH">FISH</option>
                    <option value="DOGS">DOGS</option>
                    <option value="REPTILES">REPTILES</option>
                    <option value="CATS">CATS</option>
                    <option value="BIRDS">BIRDS</option>
                </select></td>
            </tr>
            <tr>
                <td>{t('mylist')}</td>
                <td><input type="checkbox" name="mylist" onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>{t('mybanner')}</td>
                <td><input type="checkbox" name="mybanner" onChange={handleChange} /></td>
            </tr>
        </tbody>
        </table>
        </>
    );
}

export default IncludeAccountFields;