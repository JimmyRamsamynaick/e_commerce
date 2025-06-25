// src/components/Header.jsx
import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

const Header = ({ user, cart, setUser, setCurrentPage }) => (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setCurrentPage('home')}>
                    TechStore
                </h1>
                <nav className="hidden md:flex space-x-6">
                    <button onClick={() => setCurrentPage('home')} className="hover:text-blue-200 transition-colors">Accueil</button>
                    <button onClick={() => setCurrentPage('contact')} className="hover:text-blue-200 transition-colors">Contact</button>
                    {user?.isAdmin && (
                        <button onClick={() => setCurrentPage('admin')} className="hover:text-blue-200 transition-colors">Admin</button>
                    )}
                </nav>
                <div className="flex items-center space-x-4">
                    {user ? (
                        <div className="flex items-center space-x-2">
                            <User className="w-5 h-5" />
                            <span>{user.name}</span>
                            <button onClick={() => setUser(null)} className="text-sm bg-red-500 px-2 py-1 rounded hover:bg-red-600 transition-colors">
                                Déconnexion
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => setCurrentPage('login')} className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                            <User className="w-5 h-5" />
                            <span>Connexion</span>
                        </button>
                    )}
                    <button onClick={() => setCurrentPage('cart')} className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                        <span>Panier ({cart.length})</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
);

export default Header;