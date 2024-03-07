import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/LoginPortal/SignUp/SignUp';
import SignIn from './components/LoginPortal/SignIn/SignIn';
import ForgotPassword from './components/LoginPortal/ForgotPassword/ForgotPassword';
import SideBarComponent from './components/AdminPanel/AdminDashboard.jsx/SideBar/SideBar';
import ResetPassword from './components/LoginPortal/ResetPassword/ResetPassword';
import DetailsPage from './components/Courses/DetailPage/DetailsPage';



const RouterConfig = () => {
    return (
        <Routes>
            <Route path='*' element={<LandingPage />} />
            <Route path='/:InvalidRoute' element={<h1 className='text-danger'>page not found</h1>} />
            <Route path='/Signup' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
            <Route path='/ResetPassword' element={<ResetPassword />} />
            <Route path='/Admin/Dashboard' element={<SideBarComponent />} />
            <Route path='Courses/Details' element={<DetailsPage />} />
        </Routes>
    )
}

export default RouterConfig;