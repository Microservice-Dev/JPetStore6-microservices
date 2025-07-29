import BackLink from "@/components/BackLink";
import IncludeOrderFields from "@/components/IncludeOrderFields";
import { GOTO_ITEM } from "@/const";
import type { HandleFormChange, OrderFieldsForm } from "@/types/Order";
import type { TFunction } from "i18next";

interface prop {
    paymentForm: OrderFieldsForm[];
    shipmentForm: OrderFieldsForm[];
    handlePaymentFormChange: HandleFormChange;
    handleShipmentFormChange: HandleFormChange;
    t: TFunction
}

const OrderView = (
    props: prop
) => {
    const {
        paymentForm,
        shipmentForm,
        handlePaymentFormChange,
        handleShipmentFormChange,
        t
    } = props;
    return (
        <div id='Content'>
            <BackLink />
            <div id='Catalog'>
                <table>
                <tbody>
                    <tr>
                        <th align="center" colSpan={2}>Order ID Order Date(yyyy/mm/dd hh:mm:ss)</th>
                    </tr>
                    <tr>
                        <th colSpan={2}>Payment Details</th>
                    </tr>
                    <tr>
                        <td>{t('cardtype')}:</td>
                        <td>
                            Card Type
                        </td>
                    </tr>
                    <tr>
                        <td>{t('cardnumber')}:</td>
                        <td>
                        Card Number
                        </td>
                    </tr>
                    <tr>
                        <td>{t('expirydate')} (MM/YYYY):</td>
                        <td>
                            Expiry Date
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={2}>{t('billingaddress')}</th>
                    </tr>
                    <IncludeOrderFields form={paymentForm} onChange={handlePaymentFormChange} readOnly={true} />
                    <tr>
                        <th colSpan={2}>{t('shippingaddress')}</th>
                    </tr>
                    <IncludeOrderFields form={shipmentForm} onChange={handleShipmentFormChange} readOnly={true} />
                    <tr>
                        <td>Courier:</td>
                        <td>Courier Data</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Status: Status Data</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                        <table>
                            <tr>
                                <th>Item ID</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total Cost</th>
                            </tr>
                            {/* TO DO: 아래는 주문 내역 순회. */}
                            <tr>
                                <td><a href={GOTO_ITEM}>Item ID</a></td>
                                <td> Item Attribute1~5
                                    <i>Description unavailable</i>
                                </td>
                                <td>Quantity</td>
                                <td>$Unit Price</td>
                                <td>$Total Price</td>
                            </tr>
                            {/* TO DO: 아래는 순회 아니고. 총액. */}
                            <tr>
                                <th colSpan={5}>Total: $Sub Total</th>
                            </tr>
                        </table>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderView;