export interface AccountFieldsForm {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    zip: string,
    country: string
    lang: 'english' | 'korean',
    favcategory: 'FISH' | 'DOGS' | 'REPTILES' | 'CATS' | 'BIRDS'
    mylist: boolean,
    mybanner: boolean
}

export interface onReceiveAccountProps {
    form: AccountFieldsForm,
    onChange: (updated: AccountFieldsForm) => void;
}