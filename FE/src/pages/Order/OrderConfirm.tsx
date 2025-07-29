import BackLink from "@/components/BackLink";
import IncludeOrderFields from "@/components/IncludeOrderFields";
import type { OrderFieldsForm } from "@/types/Order";
import type { TFunction } from "i18next";

interface prop {
    paymentForm: OrderFieldsForm[];
    shipmentForm: OrderFieldsForm[];
    t: TFunction;
}

const OrderConfirm = (
    props: prop
) => {
    const {
        paymentForm,
        shipmentForm,
        t
    } = props;
    return (
        <div id='Content'>
            <BackLink />
            <div id='Catalog'>
                {t('confirmordercmt')}
                <table>
                <tbody>
                    <tr>
                        <th align="center" colSpan={2}>
                            <b><span style={{ fontSize: '16px' }}>{t('order')}</span></b><br />
                            <b><span style={{ fontSize: '14px' }}>{t('orderdate')} (yyyy/mm/dd hh:mm:ss)</span></b>
                        </th>
                    </tr>

                    <tr>
                        <th colSpan={2}>{t('billingaddress')}</th>
                    </tr>
                    <IncludeOrderFields form={paymentForm} onChange={() => {}} readOnly={true} />
                    <tr>
                        <th colSpan={2}>{t('shippingaddress')}</th>
                    </tr>
                    <IncludeOrderFields form={shipmentForm} onChange={() => {}} readOnly={true} />
                </tbody>
                </table>
                <form action="/order/newOrder?confirmed=true" method="post">
                    <input type="hidden" name="csrf" />
                    <input type="submit" className="Button" value={t('confirm')} />
                </form>
            </div>
        </div>
    )
}

export default OrderConfirm;