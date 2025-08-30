import Link from 'next/link';
import { ArrowRight, Cpu, Globe, Lightbulb, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert en Technologies IoT & Informatiques
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Consulting, prototypage et accompagnement technologique pour transformer vos idées en solutions innovantes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary inline-flex items-center justify-center">
                Découvrir nos services
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Nos Expertises
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              De l&apos;analyse de vos besoins au déploiement de solutions complètes, nous vous accompagnons à chaque étape de votre projet technologique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Consulting</h3>
              <p className="text-secondary-600">Analyse et conseil stratégique pour vos projets technologiques</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Prototypage IoT</h3>
              <p className="text-secondary-600">Conception et développement de prototypes connectés</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Solutions Web & Mobile</h3>
              <p className="text-secondary-600">Développement d&apos;applications web, mobile et Unity</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Accompagnement</h3>
              <p className="text-secondary-600">Formation et support technique pour vos équipes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Pourquoi choisir Thomas Menu ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-secondary-800">Expertise technique approfondie</h3>
                    <p className="text-secondary-600">Plus de 10 ans d&apos;expérience dans les technologies IoT et le développement web</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-secondary-800">Approche personnalisée</h3>
                    <p className="text-secondary-600">Chaque projet est unique, nous adaptons nos solutions à vos besoins spécifiques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-secondary-800">Accompagnement complet</h3>
                    <p className="text-secondary-600">De l&apos;idée à la mise en production, nous vous guidons à chaque étape</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Prêt à démarrer ?</h3>
              <p className="text-secondary-700 mb-6">
                Contactez-nous dès aujourd&apos;hui pour discuter de votre projet et obtenir un devis personnalisé.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Obtenir un devis gratuit
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
