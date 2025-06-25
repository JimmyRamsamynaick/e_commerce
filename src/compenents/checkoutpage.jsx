// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { MapPin, CreditCard } from 'lucide-react';

const CheckoutPage = ({ cart, user, setCart, appliedPromo, setAppliedPromo, setCurrentPage }) => {
    const SHIPPING_COST = 9.99;
    const [address, setAddress] = useState({
        street: '',
        city: '',
        postalCode: '',
        country: 'France'
    });
    const [paymentProcessing, setPaymentProcessing] = useState(false);

    const calculateSubtotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const calculateDiscount = () => {
        const subtotal = calculateSubtotal();
        if (!appliedPromo) return 0;
        return appliedPromo.type === 'percentage'
            ? (subtotal * appliedPromo.discount) / 100
            : appliedPromo.discount;
    };
    const calculateTotal = () => calculateSubtotal() + SHIPPING_COST - calculateDiscount();

    const handlePayment = () => {
        if (!address.street || !address.city || !address.postalCode) {
            alert("Veuillez remplir tous les champs d'adresse");
            return;
        }
        setPaymentProcessing(true);
        setTimeout(() => {
            alert("Paiement réussi ! Votre commande a été confirmée.");
            setCart([]);
            setAppliedPromo(null);
            setCurrentPage('home');
            setPaymentProcessing(false);
        }, 2000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Finaliser la commande</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Adresse de livraison
                    </h3>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Adresse"
                            value={address.street}
                            onChange={(e) => setAddress({ ...address, street: e.target.value })}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Ville"
                                value={address.city}
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Code postal"
                                value={address.postalCode}
                                onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Pays"
                            value={address.country}
                            onChange={(e) => setAddress({ ...address, country: e.target.value })}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold mb-4">Récapitulatif de commande</h3>
                    <div className="space-y-2 mb-6">
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between">
                                <span>{item.name} x{item.quantity}</span>
                                <span>{(item.price * item.quantity).toFixed(2)}€</span>
                            </div>
                        ))}
                        <div className="border-t pt-2">
                            <div className="flex justify-between">
                                <span>Sous-total:</span>
                                <span>{calculateSubtotal().toFixed(2)}€</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Frais de port:</span>
                                <span>{SHIPPING_COST}€</span>
                            </div>
                            {appliedPromo && (
                                <div className="flex justify-between text-green-600">
                                    <span>Réduction:</span>
                                    <span>-{calculateDiscount().toFixed(2)}€</span>
                                </div>
                            )}
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total:</span>
                                <span>{calculateTotal().toFixed(2)}€</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handlePayment}
                        disabled={paymentProcessing}
                        className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                        {paymentProcessing ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Traitement...
                            </>
                        ) : (
                            <>
                                <CreditCard className="w-5 h-5 mr-2" />
                                Payer avec Stripe
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
