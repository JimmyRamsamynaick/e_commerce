// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = ({ setUser, setCurrentPage }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        isAdmin: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            if (formData.email === 'admin@techstore.com' && formData.password === 'admin123') {
                setUser({ name: 'Admin', email: formData.email, isAdmin: true });
            } else {
                setUser({ name: formData.name || 'Utilisateur', email: formData.email, isAdmin: false });
            }
            setCurrentPage('home');
        } else {
            if (formData.name && formData.email && formData.phone) {
                setUser({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    isAdmin: formData.isAdmin
                });
                setCurrentPage('home');
            } else {
                alert('Veuillez remplir tous les champs obligatoires');
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? 'Connexion' : 'Inscription'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Nom complet *"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email *"
                        value={formData.email}
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
