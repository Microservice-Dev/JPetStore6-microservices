import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import IncludeAccountFields from '@/components/IncludeAccountFields';
import type { AccountFieldsForm } from '@/types/Account';

interface ModeProps {
    mode: 'new' | 'edit';
}

const NewAccount: React.FC<ModeProps> = ({ mode }) => {
    const { t } = useTranslation();

    const [form, setForm] = useState<AccountFieldsForm>(() => {
        if (mode === 'new') {
            return {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: '',
                country: '',
                lang: 'english',
                favcategory: 'FISH',
                mylist: false,
                mybanner: false
            };
        }
        else {
            // TO DO: API 통해서 가져온 사용자 정보로 초기화되어야 함.
            return {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: '',
                country: '',
                lang: 'english',
                favcategory: 'FISH',
                mylist: false,
                mybanner: false
            }
        }
    });
    const handleFormChange = (updateForm: AccountFieldsForm) => {
        console.log(updateForm);
        setForm(updateForm);
    }

    return (
        <div id="Content">
            <div id="Catalog">
                <form action="/account/newAccount" method="post">

                    <h3>{t('userinfotitle')}</h3>

                    <table>
                    <tbody>
                        <tr>
                            <td>{t('userid')}</td>
                            <td><input type="text" name="username" /></td>
                        </tr>
                        <tr>
                            <td>{t('userpw')}</td>
                            <td><input type="password" name="password" /></td>
                        </tr>
                        <tr>
                            <td>{t('userpw2')}</td>
                            <td><input type="password" name="repeatPassword" /></td>
                        </tr>
                    </tbody>
                    </table>

                    <IncludeAccountFields form={form} onChange={handleFormChange}/>

                    <input type="submit" value={t('userinfosubmit')} />
                </form>
            </div>
        </div>
    );
}

export default NewAccount;