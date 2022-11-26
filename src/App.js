import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import { AppContext } from './context/AppContext';
import 'react-notifications/lib/notifications.css';
import Checkout from './pages/Checkout';
import MyOrders from './pages/MyOrders';
import Order from './pages/Order';
import ClientGuard from './guards/ClientGuard';
import AdminGuard from './guards/AdminGuard';
import OrderList from './pages/admin/OrderList';
import ProductManager from './pages/admin/ProductManager';
import ProductForm from './pages/admin/ProductForm';

function App() {
    return (
        <AppContext>
            <div className="app-layout">
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/categories/:category" element={<Category />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route
                            path="/checkout"
                            element={
                                <ClientGuard>
                                    <Checkout />
                                </ClientGuard>
                            }
                        />
                        <Route
                            path="/orders"
                            element={
                                <ClientGuard>
                                    <MyOrders />
                                </ClientGuard>
                            }
                        />
                        <Route
                            path="/order/:idOrder"
                            element={
                                <ClientGuard>
                                    <Order />
                                </ClientGuard>
                            }
                        />
                        <Route
                            path="/admin/orderlist"
                            element={
                                <AdminGuard>
                                    <OrderList />
                                </AdminGuard>
                            }
                        />
                        <Route
                            path="/admin/product-manager"
                            element={
                                <AdminGuard>
                                    <ProductManager />
                                </AdminGuard>
                            }
                        />
                        <Route
                            path="/admin/product/create"
                            element={
                                <AdminGuard>
                                    <ProductForm />
                                </AdminGuard>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </AppContext>
    );
}

export default App;
