// src/components/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ setCurrentPage }) => (
    <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">TechStore</h3>
                    <p className="text-gray-400">
                        Votre boutique de technologie de confiance avec les derniers produits et les meilleurs prix.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Accueil</button></li>
                        <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
                        <li><a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact</h4>
                    <div className="space-y-2 text-gray-400">
                        <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>contact@techstore.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>+33 1 23 45 67 89</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>Paris, France</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 TechStore. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
