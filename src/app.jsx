// src/App.jsx
import React, { useState } from 'react';
import Header from './components/header';
import ProductsPage from './pages/productspage';
import CartPage from './pages/cartpage';
import CheckoutPage from './pages/checkoutpage';
import LoginPage from './pages/loginpage';
import ContactPage from './pages/contactpage';
import AdminPage from './pages/adminpage';
import Footer from './components/footer';

const EcommerceSite = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
    const [appliedPromo, setAppliedPromo] = useState(null);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header
                user={user}
                cart={cart}
                setUser={setUser}
                setCurrentPage={setCurrentPage}
            />

            {currentPage === 'home' && (
                <ProductsPage cart={cart} setCart={setCart} />
            )}
            {currentPage === 'cart' && (
                <CartPage
                    cart={cart}
                    setCart={setCart}
                    user={user}
                    setCurrentPage={setCurrentPage}
                    appliedPromo={appliedPromo}
                    setAppliedPromo={setAppliedPromo}
                />
            )}
            {currentPage === 'checkout' && user && (
                <CheckoutPage
                    cart={cart}
                    setCart={setCart}
                    user={user}
                    appliedPromo={appliedPromo}
                    setAppliedPromo={setAppliedPromo}
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 'login' && (
                <LoginPage setUser={setUser} setCurrentPage={setCurrentPage} />
            )}
            {currentPage === 'contact' && <ContactPage />}
            {currentPage === 'admin' && user?.isAdmin && (
                <AdminPage />
            )}

            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default EcommerceSite;
