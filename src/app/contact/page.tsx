'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        projectType: ''
      });
    }, 2000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Discutons de votre projet et trouvons ensemble la meilleure solution
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                  Demande de devis gratuit
                </h2>
                <p className="text-secondary-600 mb-8">
                  Remplissez ce formulaire et nous vous répondrons sous 24h avec un devis personnalisé.
                </p>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-medium">
                      ✅ Votre message a été envoyé avec succès ! Nous vous répondrons sous 24h.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-secondary-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="06 44 81 36 46"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Sélectionnez votre projet</option>
                      <option value="consulting">Consulting technologique</option>
                      <option value="prototypage">Prototypage IoT</option>
                      <option value="development">Développement web/mobile</option>
                      <option value="cahier-charges">Rédaction cahier des charges</option>
                      <option value="formation">Formation et accompagnement</option>
                      <option value="maintenance">Maintenance et support</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Résumé de votre demande"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Description du projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                      placeholder="Décrivez votre projet, vos besoins, contraintes et objectifs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2" size={20} />
                        Envoyer ma demande
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Contact direct</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:menu.techvision@gmail.com" className="text-primary-100 hover:text-white transition-colors">
                          menu.techvision@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">Téléphone</p>
                        <a href="tel:0644813646" className="text-primary-100 hover:text-white transition-colors">
                          06 44 81 36 46
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">Localisation</p>
                        <p className="text-primary-100">Toulouse, France</p>
                        <p className="text-sm text-primary-200">Interventions nationales</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">Disponibilité</p>
                        <p className="text-primary-100">Lun - Ven : 9h - 18h</p>
                        <p className="text-sm text-primary-200">Urgences : 24h/7j</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-secondary-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6">Suivez-nous</h3>
                  
                  <div className="flex space-x-4 mb-6">
                    <a href="#" className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-secondary-600 hover:text-primary-600">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-secondary-600 hover:text-primary-600">
                      <Twitter size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/thomas-menu-11b4a4139/" className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-secondary-600 hover:text-primary-600">
                      <Linkedin size={24} />
                    </a>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-secondary-800">Autres sites :</h4>
                    <div className="space-y-2">
                      <a href="https://thomasmenu.netlify.app/" className="block text-primary-600 hover:text-primary-700 transition-colors text-sm">
                        🔗 Portfolio technique
                      </a>
                      <a href="#" className="block text-primary-600 hover:text-primary-700 transition-colors text-sm">
                        📖 Blog technologique
                      </a>
                      <a href="#" className="block text-primary-600 hover:text-primary-700 transition-colors text-sm">
                        🚀 Projets open source
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h4 className="font-bold text-green-800 mb-2">⚡ Réponse rapide garantie</h4>
                  <p className="text-green-700 text-sm">
                    Nous nous engageons à répondre à toute demande de devis sous 24h ouvrées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
