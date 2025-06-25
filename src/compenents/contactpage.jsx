// src/pages/ContactPage.jsx
import React from 'react';
import { Mail } from 'lucide-react';

const ContactPage = () => (
    <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contactez-nous</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nom *"
                            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Sujet"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Votre message *"
                        rows="6"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                        <Mail className="w-5 h-5 mr-2" />
                        Envoyer le message
                    </button>
                </form>
            </div>
        </div>
    </div>
);

export default ContactPage;
