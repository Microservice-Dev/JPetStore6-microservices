import React from 'react';
import { useTranslation } from 'react-i18next';

import type { onReceiveOrderProps} from '@/types/Order';
import type { ChangeEvent } from '@/types/Common';

const IncludeOrderFields: React.FC<onReceiveOrderProps> = ({ form, onChange, readOnly }) => {
    const { t } = useTranslation();

    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target;
        const updatedForm = form.map(field => {
            return field.label === name ? { ...field, value } : field;
        });
        if (onChange) {
            onChange(updatedForm);
        }
    };

    return (
        <>
        {form.map(({ name, label, value }) => {
            return (
                <tr key={label}>
                    <td>{t(name.toLowerCase())}</td>
                    <td>
                        {readOnly ? 
                            /* value */ "Test Data" : <input type="text" name={label} value={value} onChange={handleChange} readOnly={readOnly} />
                        }
                    </td>
                </tr>
            )
        })}
        </>
    )
}

export default IncludeOrderFields;