import IncludeOrderFields from "@/components/IncludeOrderFields";
import { GOTO_CONFIRM } from "@/const";
import type { HandleFormChange, OrderFieldsForm } from "@/types/Order";
import type { TFunction } from "i18next";

interface prop {
    shipmentForm: OrderFieldsForm[];
    handleShipmentFormChange: HandleFormChange;
    t: TFunction;
}

const OrderShipment = (
    props: prop
) => {
    const {
        shipmentForm,
        handleShipmentFormChange,
        t
    } = props;
    return (
        <div id="Content">
            <div id="Catalog">
                <form action="/order/newOrder" method="post">
                    <table>
                    <tbody>
                        <tr>
                            <th colSpan={2}>{t('shippingaddress')}</th>
                        </tr>
                        <IncludeOrderFields form={shipmentForm} onChange={handleShipmentFormChange} readOnly={false} />
                    </tbody>
                    </table>
                    <input type="hidden" name="csrf" />
                    <a className="Button" href={GOTO_CONFIRM}> {t('continue')}</a>
                </form>
            </div>
        </div>
    );
}

export default OrderShipment;