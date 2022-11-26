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
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/orders" element={<MyOrders />} />
                        <Route path="/order/:idOrder" element={<Order />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </AppContext>
    );
}

export default App;
