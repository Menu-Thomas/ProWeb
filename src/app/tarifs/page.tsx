import Link from 'next/link';
import { ArrowRight, Check, Star } from 'lucide-react';

export default function Tarifs() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '1 500',
      period: 'par projet',
      description: 'Idéal pour les petits projets et prototypes',
      features: [
        'Consultation initiale (2h)',
        'Analyse des besoins',
        'Prototype simple IoT',
        'Documentation de base',
        'Support email (1 mois)',
        'Livraison sous 2 semaines'
      ],
      cta: 'Commencer',
      popular: false
    },
    {
      name: 'Professional',
      price: '4 500',
      period: 'par projet',
      description: 'Pour les projets moyens avec besoins spécifiques',
      features: [
        'Consultation approfondie (6h)',
        'Cahier des charges détaillé',
        'Prototype IoT avancé',
        'Application web/mobile',
        'Tests et validation',
        'Formation équipe (1 jour)',
        'Support prioritaire (3 mois)',
        'Livraison sous 4 semaines'
      ],
      cta: 'Choisir Pro',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Sur devis',
      period: 'par projet',
      description: 'Solutions complètes pour grandes entreprises',
      features: [
        'Accompagnement complet',
        'Architecture système complexe',
        'Intégration multi-plateforme',
        'Développement sur mesure',
        'Déploiement et monitoring',
        'Formation équipe complète',
        'Support dédié (12 mois)',
        'SLA garantie',
        'Maintenance évolutive'
      ],
      cta: 'Nous contacter',
      popular: false
    }
  ];

  const services = [
    {
      name: 'Consulting journalier',
      price: '800',
      unit: '/ jour',
      description: 'Conseil expert sur site ou à distance'
    },
    {
      name: 'Formation équipe',
      price: '1 200',
      unit: '/ jour',
      description: 'Formation technique personnalisée'
    },
    {
      name: 'Support technique',
      price: '150',
      unit: '/ heure',
      description: 'Assistance technique ponctuelle'
    },
    {
      name: 'Maintenance mensuelle',
      price: '300',
      unit: '/ mois',
      description: 'Suivi et maintenance préventive'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos Tarifs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Des tarifs transparents pour tous vos projets technologiques
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Forfaits Projet
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Choisissez le forfait qui correspond à vos besoins et à la complexité de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border-2 p-8 relative ${
                  plan.popular
                    ? 'border-primary-500 shadow-xl scale-105'
                    : 'border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star size={16} className="mr-1" />
                      Le plus populaire
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-secondary-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary-600">
                      {plan.price === 'Sur devis' ? '' : `${plan.price}€`}
                    </span>
                    {plan.price !== 'Sur devis' && (
                      <span className="text-secondary-600 ml-1">{plan.period}</span>
                    )}
                    {plan.price === 'Sur devis' && (
                      <span className="text-2xl text-primary-600">Sur devis</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-primary-500 mt-0.5 mr-3 flex-shrink-0" size={18} />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors duration-200 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-secondary-700'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Services à la Demande
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Tarifs pour nos prestations ponctuelles et services d&apos;accompagnement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {service.name}
                </h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-primary-600">
                    {service.price}€
                  </span>
                  <span className="text-secondary-600">{service.unit}</span>
                </div>
                <p className="text-secondary-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Questions Fréquentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Les tarifs incluent-ils tous les frais ?
              </h3>
              <p className="text-secondary-600">
                Oui, nos tarifs incluent toutes les prestations mentionnées. Les seuls frais supplémentaires 
                peuvent concerner les composants hardware spécifiques ou l&apos;hébergement selon vos choix.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Peut-on modifier un forfait en cours de projet ?
              </h3>
              <p className="text-secondary-600">
                Absolument ! Nous adaptons nos services selon l&apos;évolution de vos besoins. 
                Tout changement fera l&apos;objet d&apos;un avenant avec tarification transparente.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Quels sont les délais de paiement ?
              </h3>
              <p className="text-secondary-600">
                30% à la commande, 40% à mi-parcours, 30% à la livraison. 
                Pour les missions de conseil, facturation mensuelle avec paiement à 30 jours.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Proposez-vous des remises pour les projets longs ?
              </h3>
              <p className="text-secondary-600">
                Oui, nous offrons des conditions préférentielles pour les missions longues durée 
                ou les contrats de maintenance annuels. Contactez-nous pour un devis personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Demander un devis gratuit
            </Link>
            <Link href="/services" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Voir nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
