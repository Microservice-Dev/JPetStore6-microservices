export interface OrderFieldsForm {
    firstName: string,
    lastName: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    zip: string,
    country: string
}

export interface onReceiveOrderProps {
    formLabels: OrderFieldsForm,
    form: OrderFieldsForm,
    onChange: (updated: OrderFieldsForm) => void;
}