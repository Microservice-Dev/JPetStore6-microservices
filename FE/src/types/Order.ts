export interface OrderFieldsForm {
    name: string,
    label: string,
    value: string
}

export interface onReceiveFormList {
    form: OrderFieldsForm[]
}

export interface onReceiveOrderProps {
    form: OrderFieldsForm[],
    onChange?: (updated: OrderFieldsForm[]) => void,
    readOnly: boolean,
}

export type HandleFormChange = (updatedForm: OrderFieldsForm[]) => void;