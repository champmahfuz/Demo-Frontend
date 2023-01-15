import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from '../../hooks/RequireAuth';
import Login from '../auth/Login/Login';
import PersistLogin from '../auth/PersistLogin/PersistLogin';
import Register from '../auth/Register/Register';
import TransactionHistory from '../dashboard/DashboardRoutes/UserRoutes/TransactionHistory/TransactionHistory';
import UserBookings from '../dashboard/DashboardRoutes/UserRoutes/UserBookings/UserBookings';
import UserProfile from '../dashboard/DashboardRoutes/UserRoutes/UserProfile/UserProfile';
import Dashboards from '../dashboard/Dashboards/Dashboards';
import BlogDetails from '../pages/Blogs/BlogDetails/BlogDetails';
import Blogs from '../pages/Blogs/Blogs/Blogs';
import Contact from '../pages/Contact/Contact';
import AboutUs from '../pages/Home/AboutUs/AboutUs';
import Home from '../pages/Home/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Unauthorized from '../pages/NotFound/Unauthorized/Unauthorized';
import FlightSearchs from '../pages/SearchBoxes/Flight/FlightSearch/FlightSearchs/FlightSearchs';
import Services from '../pages/Services/Services/Services';
import { DashboardHome } from '../pages/DashboardHome/DashboardHome';
import List from '../pages/List/List';
import New from '../pages/New/New';
import Single from '../pages/Single/Single';
import { productInputs, userInputs } from '../../formSource';
import AddNewProduct from '../pages/DashboardOption/ProductOptions/AddNewProduct/AddNewProduct';
import ManageProductItem from '../pages/DashboardOption/ProductOptions/AddNewProduct/ManageProduct/ManageProductItem';
import PurchaserProductOption from '../pages/DashboardOption/ProductOptions/AddNewProduct/PurchaserProductOption/PurchaserProductOption';
import AddNewCategoryOption from '../pages/DashboardOption/ProductOptions/AddNewCategotyOption/AddNewCategoryOption';
import ManageInvoiceOption from '../pages/DashboardOption/ManageSellOption/ManageInvoiceOption/ManageInvoiceOption';
import ManagePosOption from '../pages/DashboardOption/ManageSellOption/ManagePosOption/ManagePosOption';
import AddCustomerOption from '../pages/DashboardOption/ManageCustomerOption/AddCustomerOption/AddCustomerOption';
import ManageCustomerList from '../pages/DashboardOption/ManageCustomerOption/ManageCustomerList/ManageCustomerList';
import ManagePaymentOption from '../pages/DashboardOption/ManageAccountOption/ManagePaymentOption/ManagePaymentOption';
import ManageTransactionOption from '../pages/DashboardOption/ManageAccountOption/ManageTransactionOption/ManageTransactionOption';
import PurchaseReportOption from '../pages/DashboardOption/ManageReportOption/PurchaseReportOption/PurchaseReportOption';
import SalesReportOption from '../pages/DashboardOption/ManageReportOption/SalesReportOption/SalesReportOption';
import ProfitReportOption from '../pages/DashboardOption/ManageReportOption/ProfitReportOption/ProfitReportOption';
import TodaysReportOption from '../pages/DashboardOption/ManageReportOption/TodaysReportOption/TodaysReportOption';
import ExpenseItemOption from '../pages/DashboardOption/ManageExpenseOption/ExpenseItemOption/ExpenseItemOption';
import AddExpenseOption from '../pages/DashboardOption/ManageExpenseOption/AddExpenseOption/AddExpenseOption';
import FlightSearchsv2 from '../pages/SearchBoxes/Flight/FlightSearch/FlightSearchs/FlightSearchsv2';
import FlightSearchsv3 from '../pages/SearchBoxes/Flight/FlightSearch/FlightSearchs/FlightSearchsv3';
import Booking from '../pages/SearchBoxes/Flight/FlightSearch/Booking/Booking';

const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="Services" element={<Services />}></Route>
                <Route path="Contact" element={<Contact />}></Route>
                <Route path="About" element={<AboutUs />}></Route>
                <Route path="Blogs" element={<Blogs />} />
                <Route path="Blogs/:slug" element={<BlogDetails />} />
                <Route path="FlightSearchs" element={<FlightSearchs />} />
                <Route path="FlightSearchsv2" element={<FlightSearchsv2 />} />
                <Route path="FlightSearchsv3" element={<FlightSearchsv3 />} />
                <Route path="Booking" element={<Booking />} />
                {/* <Route path="Flight/:Searchs" element={ <FlightSearchs /> } /> */}
                <Route path="login" element={<Login />} />
                <Route path="Register" element={<Register />} />
                <Route path="Unauthorized" element={<Unauthorized />} />

                {/* dashboard route */}
                <Route path="dashboardhome">
                    <Route index element={<DashboardHome />} />

                    <Route path="users">
                        <Route index element={<List />} />
                        <Route path=":userId" element={<Single />} />
                        <Route path="new" element={<New inputs={userInputs} title='Add New User' />} />
                    </Route>

                    <Route path="products">
                        <Route index element={<List />} />
                        <Route path=":productId" element={<Single />} />
                        <Route path="new" element={<New inputs={productInputs} title='Add New Products' />} />
                    </Route>
                    <Route path="addNewProduct">
                        <Route index element={<AddNewProduct />} />
                    </Route>
                    <Route path="manageProduct">
                        <Route index element={<ManageProductItem />} />
                    </Route>
                    <Route path="purchaseProduct">
                        <Route index element={<PurchaserProductOption />} />
                    </Route>
                    <Route path="addNewCategory">
                        <Route index element={<AddNewCategoryOption />} />
                    </Route>
                    <Route path="manageInvoice">
                        <Route index element={<ManageInvoiceOption />} />
                    </Route>
                    <Route path="addNewInvoice">
                        <Route index element={<ManagePosOption />} />
                    </Route>
                    <Route path="addNewCustomer">
                        <Route index element={<AddCustomerOption />} />
                    </Route>
                    <Route path="manageCustomer">
                        <Route index element={<ManageCustomerList />} />
                    </Route>
                    <Route path="managePayment">
                        <Route index element={<ManagePaymentOption />} />
                    </Route>
                    <Route path="manageTransaction">
                        <Route index element={<ManageTransactionOption />} />
                    </Route>
                    <Route path="purchaseReport">
                        <Route index element={<PurchaseReportOption />} />
                    </Route>
                    <Route path="salesReport">
                        <Route index element={<SalesReportOption />} />
                    </Route>
                    <Route path="profitReport">
                        <Route index element={<ProfitReportOption />} />
                    </Route>
                    <Route path="todaysReport">
                        <Route index element={<TodaysReportOption />} />
                    </Route>
                    <Route path="expenseItem">
                        <Route index element={<ExpenseItemOption />} />
                    </Route>
                    <Route path="addExpense">
                        <Route index element={<AddExpenseOption />} />
                    </Route>

                </Route>

                <Route path="*" element={<NotFound />}></Route>

                {/* <Route element={ <RequireAuth allowedRoles={ [5150] } /> } > */}
                <Route element={<PersistLogin />}>
                    <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin, ROLES.User]} />} >
                        <Route path="/Dashboard" element={<Dashboards />} >
                            <Route path="UserProfile" element={<UserProfile />} />
                            <Route path="UserBookings" element={<UserBookings />} />
                            <Route path="TransactionHistory" element={<TransactionHistory />} />
                        </Route>
                    </Route>
                </Route>


            </Routes>
        </>
    );
};

export default Routers;