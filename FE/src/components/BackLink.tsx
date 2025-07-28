import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    HOME
} from '../const';

const BackLink: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div id="BackLink">
            <a href={HOME}>{t('gotoMain')}</a>
        </div>
    )
}

export default BackLink;