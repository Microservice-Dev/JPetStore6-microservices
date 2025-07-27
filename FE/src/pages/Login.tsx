import React from 'react';
import { useTranslation } from 'react-i18next';

import { REGISTER } from '@/const';

const Login: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div id="Content">
            <div id="Catalog"><form action="/account/signon" method="post">

            <p>{t('logindesc')}</p>
            <p>{t('username')}:<input type="text" name="username" value="j2ee" /> <br />
            {t('password')}:<input type="password" name="password" value="j2ee" /></p>
            <input type="submit" name="signon" value={t('login')} />

            </form> {t('registerdesc')} <a href={REGISTER}>{t('register')}</a></div>
        </div>
    )
}

export default Login;