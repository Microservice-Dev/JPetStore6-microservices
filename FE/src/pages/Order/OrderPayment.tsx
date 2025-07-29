import IncludeOrderFields from '@/components/IncludeOrderFields';
import type { HandleFormChange, OrderFieldsForm } from '@/types/Order';
import type { ChangeEvent } from '@/types/Common';
import type { TFunction } from 'i18next';
import { GOTO_CONFIRM, GOTO_SHIP } from '@/const';

interface prop {
    paymentForm: OrderFieldsForm[];
    handlePaymentFormChange: HandleFormChange;
    shipInfoRequired: boolean;
    handleChange: (e: ChangeEvent) => void;
    t: TFunction;
}

const OrderPayment = (
    props: prop
) => {
    const {
        paymentForm,
        handlePaymentFormChange,
        shipInfoRequired,
        handleChange,
        t
    } = props;
    return (
    <div id="Content">
        <div id="Catalog">
            <form action="/order/newOrder" method="post">
                <table>
                <tbody>
                    <tr>
                        <th colSpan={2}>{t('paymentdetails')}</th>
                    </tr>
                    <tr>
                        <td>{t('cardtype')}:</td>
                        <td>
                            <select name="order.cardType">
                                <option value="Visa">Visa</option>
                                <option value="MasterCard" >MasterCard</option>
                                <option value="American Express">American Express</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>{t('cardnumber')}:</td>
                        <td>
                            <input type="text" name="creditCard" /> * Use a fakenumber!
                        </td>
                    </tr>
                    <tr>
                        <td>{t('expirydate')}:</td>
                        <td>
                            <input type="text" name="expiryDate" />
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={2}>{t('billingaddress')}</th>
                    </tr>
                    <IncludeOrderFields form={paymentForm} onChange={handlePaymentFormChange} readOnly={false} />
                    <tr>
                        <td colSpan={2}>
                            <input type="checkbox" name="shippingAddressRequired" onChange={handleChange}/>
                            {t('shipdiff')}
                        </td>
                    </tr>
                </tbody>
                </table>
                <input type="hidden" name="csrf" />
                {/* TO DO: 추후, submit으로 보내지 않을 수 있음. */}
                { shipInfoRequired && <a className="Button" href={GOTO_SHIP}> {t('continue')}</a> }
                { !shipInfoRequired && <a className="Button" href={GOTO_CONFIRM}> {t('continue')}</a> }
            </form>
        </div>
    </div>
    )
}

export default OrderPayment;