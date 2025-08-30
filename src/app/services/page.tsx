import Link from 'next/link';
import { ArrowRight, CheckCircle, Cpu, FileText, Globe, Lightbulb, Settings, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'consulting',
      title: 'Consulting Technologique',
      icon: Lightbulb,
      description: 'Conseil stratégique et analyse de vos besoins technologiques',
      features: [
        'Audit technique de l\'existant',
        'Analyse des besoins et définition des objectifs',
        'Recommandations technologiques personnalisées',
        'Étude de faisabilité et ROI',
        'Architecture système et choix des technologies'
      ],
      price: 'À partir de 800€/jour'
    },
    {
      id: 'prototypage',
      title: 'Prototypage IoT',
      icon: Cpu,
      description: 'Conception et développement de prototypes connectés innovants',
      features: [
        'Conception hardware et choix des composants',
        'Développement firmware embarqué',
        'Intégration capteurs et actionneurs',
        'Connectivité (WiFi, Bluetooth, LoRaWAN)',
        'Interface utilisateur mobile/web',
        'Tests et validation du prototype'
      ],
      price: 'À partir de 2500€'
    },
    {
      id: 'development',
      title: 'Développement Web, Mobile & Unity',
      icon: Globe,
      description: 'Applications web modernes, mobiles et jeux Unity sur mesure',
      features: [
        'Applications web responsive (React, Next.js)',
        'APIs REST et GraphQL',
        'Applications mobiles (React Native, Flutter)',
        'Jeux et applications Unity (2D/3D)',
        'Tableaux de bord et visualisation de données',
        'Intégration bases de données',
        'Déploiement et hébergement'
      ],
      price: 'À partir de 3500€'
    },
    {
      id: 'cahier-charges',
      title: 'Rédaction Cahier des Charges',
      icon: FileText,
      description: 'Documents techniques détaillés pour vos projets',
      features: [
        'Analyse détaillée des besoins fonctionnels',
        'Spécifications techniques complètes',
        'Architecture système et diagrammes',
        'Planification et estimation des coûts',
        'Critères de validation et tests',
        'Documentation pour appels d\'offres'
      ],
      price: 'À partir de 1200€'
    },
    {
      id: 'accompagnement',
      title: 'Accompagnement & Formation',
      icon: Users,
      description: 'Support technique et formation de vos équipes',
      features: [
        'Formation sur les technologies IoT',
        'Accompagnement développement d\'équipe',
        'Code review et bonnes pratiques',
        'Support technique continu',
        'Mentoring et transfert de compétences'
      ],
      price: 'À partir de 600€/jour'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      icon: Settings,
      description: 'Maintenance préventive et corrective de vos solutions',
      features: [
        'Monitoring et surveillance système',
        'Maintenance corrective et évolutive',
        'Mises à jour sécurité',
        'Support technique prioritaire',
        'Sauvegardes et plan de reprise',
        'Optimisation des performances'
      ],
      price: 'À partir de 200€/mois'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Des solutions complètes pour tous vos projets technologiques et IoT
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="text-primary-600" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-secondary-600 text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary-800 mb-3">Prestations incluses :</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-secondary-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-primary-600 font-bold text-lg">
                        {service.price}
                      </div>
                      <Link 
                        href="/contact" 
                        className="btn-primary inline-flex items-center"
                      >
                        Devis gratuit
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Notre Processus de Travail
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Une approche structurée pour garantir la réussite de votre projet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Analyse</h3>
              <p className="text-secondary-600">
                Étude approfondie de vos besoins et contraintes techniques
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Conception</h3>
              <p className="text-secondary-600">
                Design de l&apos;architecture et choix des technologies optimales
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Développement</h3>
              <p className="text-secondary-600">
                Réalisation en mode agile avec validation continue
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Déploiement</h3>
              <p className="text-secondary-600">
                Mise en production et formation de vos équipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Demander un devis
              </Link>
              <Link href="/tarifs" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
