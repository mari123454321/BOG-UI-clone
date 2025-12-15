import { Routes, Route, Navigate } from "react-router-dom";
import LoginPersonal from "./pages/login/LoginPersonal"
import LoginBusiness from './pages/login/LoginBusiness';
import LoginBusinessManager from './pages/login/LoginBussinessManager';
import PageDoesNotExist from './pages/PageDoesNotExist';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import ProtectedRoute from './components/common/ProtectedRoute';
import ComingSoon from "./pages/ComingSoon";
import MySpace from "./pages/dashboard/MySpace";
import DashboardMain from "./pages/dashboard/DashboardMain";
import ToContacts from "./pages/dashboard/Transfer/ToContacts";
import ToOwnAccount from "./pages/dashboard/Transfer/ToOwnAccount";
import { useDarkMode } from "./context/DarkModeContext";

function App() {
  const { darkMode } = useDarkMode()

  return (
    <div className={darkMode ? 'dark' : ''}>

      <Routes>
        <Route path='/' element={<Navigate to={"/personal"} replace />} />
        <Route path='/personal' element={<LoginPersonal />} />
        <Route path='/business' element={<LoginBusiness />} />
        <Route path='/manager' element={<LoginBusinessManager />} />
        <Route path='/PageDoesNotExist' element={<PageDoesNotExist />} />
        {/* sidebarInfo-დან შეიძლება map გამოიყენო რომ ხელით არ დაწერო route ყოველი გვერდის დამატებაზე  */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardMain />} />
            <Route path="main" element={<DashboardMain />} />
            <Route path="my-space" element={<MySpace />} />

            <Route path="transfer/own-account" element={<ToOwnAccount />} />
            <Route path="transfer/georgian-banks" element={<ComingSoon />} />
            <Route path="transfer/contacts" element={<ToContacts />} />
            <Route path="transfer/foreign-banks" element={<ComingSoon />} />
            <Route path="transfer/treasury" element={<ComingSoon />} />
            <Route path="transfer/currency-exchange" element={<ComingSoon />} />
            <Route path="transfer/fx-conversion" element={<ComingSoon />} />

            <Route path="payment" element={<ComingSoon />} />
            <Route path="accounts-and-cards" element={<ComingSoon />} />
            <Route path="loans" element={<ComingSoon />} />
            <Route path="credit-cards" element={<ComingSoon />} />
            <Route path="deposits" element={<ComingSoon />} />
            <Route path="offers" element={<ComingSoon />} />
            <Route path="transactions" element={<ComingSoon />} />
            <Route path="currencies" element={<ComingSoon />} />
            <Route path="buy-now-pay-later" element={<ComingSoon />} />

            <Route path="remittances/all" element={<ComingSoon />} />
            <Route path="remittances/receive" element={<ComingSoon />} />
            <Route path="remittances/send" element={<ComingSoon />} />

            <Route path="automatic-services/all" element={<ComingSoon />} />
            <Route path="automatic-services/auto-transfer" element={<ComingSoon />} />
            <Route path="automatic-services/auto-payment" element={<ComingSoon />} />

            <Route path="more/loyalty-programs" element={<ComingSoon />} />
            <Route path="more/gift-cards" element={<ComingSoon />} />
            <Route path="more/banking-set" element={<ComingSoon />} />

            <Route path="*" element={<PageDoesNotExist />} />
          </Route>
        </Route>

        {/* <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} /> */}
      </Routes>
    </div>

  )
}

export default App
