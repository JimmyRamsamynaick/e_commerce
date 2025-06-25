// src/pages/CartPage.jsx
import React, { useState } from 'react';
import { ShoppingCart, Tag, Trash2 } from 'lucide-react';

const CartPage = ({ cart, setCart, user, setCurrentPage, appliedPromo, setAppliedPromo }) => {
    const SHIPPING_COST = 9.99;
    const [promoCodes] = useState([
        { code: 'WELCOME10', discount: 10, type: 'percentage' },
        { code: 'SAVE20', discount: 20, type: 'fixed' }
    ]);
    const [promoCode, setPromoCode] = useState('');
    const [promoError, setPromoError] = useState('');

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity === 0) {
            setCart(cart.filter(item => item.id !== productId));
        } else {
            setCart(cart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const calculateSubtotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const calculateDiscount = () => {
        if (!appliedPromo) return 0;
        const subtotal = calculateSubtotal();
        return appliedPromo.type === 'percentage'
            ? (subtotal * appliedPromo.discount) / 100
            : appliedPromo.discount;
    };
    const calculateTotal = () => calculateSubtotal() + SHIPPING_COST - calculateDiscount();

    const applyPromoCode = (code) => {
        const promo = promoCodes.find(p => p.code === code.toUpperCase());
        if (promo) {
            setAppliedPromo(promo);
            return true;
        }
        return false;
    };

    const handleApplyPromo = () => {
        if (applyPromoCode(promoCode)) {
            setPromoError('');
            setPromoCode('');
        } else {
            setPromoError('Code promo invalide');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Votre Panier</h2>
            {cart.length === 0 ? (
                    <div className="text-center py-12">
                        <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600 text-lg">Votre panier est vide</p>
                        <button
                            onClick={() => setCurrentPage('home')}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {!isLogin && (
                            <input
                                type="tel"
                                placeholder="Téléphone *"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        )}
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Mot de passe *"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        {!isLogin && (
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={formData.isAdmin}
                                    onChange={(e) => setFormData({ ...formData, isAdmin: e.target.checked })}
                                    className="rounded"
                                />
                                <span className="text-sm">Compte administrateur</span>
                            </label>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                            {isLogin ? 'Se connecter' : "S'inscrire"}
                        </button>
                    </form>
                <div className="text-center mt-4">
                    <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:underline">
                        {isLogin ? 'Créer un compte' : 'Déjà inscrit ? Se connecter'}
                    </button>
                </div>
            {isLogin && (
                <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
                <p><strong>Compte admin test:</strong></p>
                <p>Email: admin@techstore.com</p>
                <p>Mot de passe: admin123</p>
                </div>
                )}
                </div>
                </div>
                );
            };

export default LoginPage;
