import './locales/i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IncludeTop from '@/components/IncludeTop'
import IncludeBottom from '@/components/IncludeBottom';
import Main from '@/pages/Main';
import Category from '@/pages/Category';
import AccountInfo from '@/pages/AccountInfo';
import Login from '@/pages/Login';

import './styles/jpetstore.css';

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

          {/* 사용자 관련 페이지. */}
          <Route path="/newAccount" element={<AccountInfo mode="new" />} />
          <Route path="/editAccount" element={<AccountInfo mode="edit" />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <IncludeBottom></IncludeBottom>
    </>
  )
}

export default App
