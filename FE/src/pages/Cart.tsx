import BackLink from '@/components/BackLink';
import { useTranslation } from 'react-i18next';
import { GOTO_ITEM } from '@/const';
import React from 'react';
import IncludeMyList from '@/components/InlcudMyList';

const Cart: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div id="Content">
            <BackLink />
            
            <div id="Catalog">
                <div id="Cart">

                <h2>Shopping Cart</h2>
                    <form action="/cart/update" method="post">
                        <table>
                        <tbody>
                            <tr>
                                <th><b>{t('itemid')}</b></th>
                                <th><b>{t('productid')}</b></th>
                                <th><b>{t('productdesc')}</b></th>
                                <th><b>{t('instock')}</b></th>
                                <th><b>{t('quantity')}</b></th>
                                <th><b>{t('listprice')}</b></th>
                                <th><b>{t('totalcost')}</b></th>
                                <th>&nbsp;</th>
                            </tr>

                            {/* TO DO: cart가 비어 있는 경우 띄울 것. */}
                            <tr>
                                <td colSpan={8}><b>{t('cartempty')}</b></td>
                            </tr> 


                            {/* TO DO: Item 여러 개 담겨있으면, 리스트 순회를 통해 보여줄 것.
                                <tr>
                                <td>
                                    <a href={GOTO_ITEM}>Item ID</a>
                                </td>
                                <td>Product ID</td>
                                <td></td>
                                <td>10000</td>
                                <td><input type="text" size={3} name="${cartItem.item.itemId}" value="${cartItem.quantity}" /></td>
                                <td>price</td>
                                <td>totalPrice</td>

                                <td>
                                    <a className="Button">{t('removeitem')}</a>
                                </td>

                            </tr>

                            <tr>
                                <td colSpan={7}>Sub Total: $totalPrice
                                    <input type="submit" name="updateCartQuantities" value={t('updatecart')} />
                                </td>
                            </tr> */}
                        </tbody>
                        </table>
                    </form>

                    <a className="Button" href="/order/newOrderForm">{t('checkout')}</a>
                </div>

                <div id="MyList">
                    {/* MyList가 enable이면 보여줄 것. */}
                    <IncludeMyList />
                </div>

                <div id="Separator">&nbsp;</div>
            </div>
        </div>
    );
}

export default Cart;