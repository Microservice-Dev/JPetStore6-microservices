import './locales/i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IncludeTop from '@/components/IncludeTop'
import IncludeBottom from '@/components/IncludeBottom';
import Main from '@/pages/Main';
import Category from '@/pages/Category';
import AccountInfo from '@/pages/AccountInfo';
import Login from '@/pages/Login';

import './styles/jpetstore.css';
import Product from '@/pages/Product';
import Item from '@/pages/Item';
import Cart from '@/pages/Cart';
import Order from '@/pages/Order';
import ConfirmOrder from '@/pages/ConfirmOrder';

function App() {
  return (
    <>
      <IncludeTop></IncludeTop>
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지. */}
          <Route path="/" element={<Main />} />

          {/* 카테고리 페이지 */}
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/item" element={<Item />} />

          {/* 사용자 관련 페이지. */}
          <Route path="/newAccount" element={<AccountInfo mode="new" />} />
          <Route path="/editAccount" element={<AccountInfo mode="edit" />} />
          <Route path="/signin" element={<Login />} />

          {/* 쇼핑 카트 페이지. */}
          <Route path="/cart" element={<Cart />} />

          {/* 주문 관련 페이지 */}
          <Route path="/newOrder" element={<Order mode="payment" />} />
          <Route path="/shipOrder" element={<Order mode="ship" />} />
          <Route path="/confirmOrder" element={<ConfirmOrder />} />
        </Routes>
      </BrowserRouter>
      <IncludeBottom></IncludeBottom>
    </>
  )
}

export default App
