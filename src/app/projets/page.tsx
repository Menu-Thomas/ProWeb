'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projets() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  

  const categories = ['Tous', 'IoT', 'Web', 'Mobile', 'Unity', 'Industriel'];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos Projets
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Découvrez notre portfolio de projets innovants en IoT, développement web, mobile et Unity
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  category === activeFilter
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">{filteredProjects.length}</div>
              <div className="text-secondary-600 font-medium">
                {activeFilter === 'Tous' ? 'Projets Principaux' : `Projets ${activeFilter}`}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-secondary-600 font-medium">Clients satisfaits</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-secondary-600 font-medium">Technologies</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">7</div>
              <div className="text-secondary-600 font-medium">Années d&apos;expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Show message if no projects match filter */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-secondary-600">
                Aucun projet ne correspond à la catégorie sélectionnée.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Diplômes Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Formation & Diplômes
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Une formation solide en informatique pour garantir l&apos;excellence technique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Diplôme WebMaster */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-green-400 to-green-600 overflow-hidden">
                <img 
                  src="/images/images%20anciens%20portfolio/webmaster.jpg" 
                  alt="Diplôme WebMaster"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">WebMaster</div>
                  <div className="text-sm opacity-90">Développement Web</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Diplôme WebMaster</h3>
                <p className="text-secondary-600 mb-4">
                  Formation complète en développement web moderne, incluant les technologies front-end et back-end, 
                  les frameworks JavaScript, et les meilleures pratiques du développement web.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">HTML/CSS</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">JavaScript</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">PHP</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Frameworks</span>
                </div>
              </div>
            </div>

            {/* Diplôme MSc IoT */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <img 
                  src="/images/images%20anciens%20portfolio/MSCIOT.jpg" 
                  alt="MSc IoT"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">MSc IoT</div>
                  <div className="text-sm opacity-90">Internet of Things</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Master of Science - IoT</h3>
                <p className="text-secondary-600 mb-4">
                  Master spécialisé en Internet des Objets (IoT), couvrant les systèmes embarqués, 
                  les réseaux de capteurs, l&apos;analyse de données IoT et l&apos;architecture des systèmes connectés.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Arduino/ESP32</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">LoRa/WiFi</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Capteurs</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Data Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Technologies Maîtrisées
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Un large éventail de technologies pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              // Langages avec images
              { name: 'Unity', image: '/images/Unity.jpg' },
              { name: 'C#', image: '/images/csharp.jpg' },
              { name: 'Python', image: '/images/python.jpg' },
              { name: 'Java', image: '/images/java.jpg' },
              { name: 'C++', image: '/images/c++.jpg' },
              { name: 'PHP', image: '/images/php.jpg' },
              { name: 'HTML', image: '/images/html.jpg' },
              { name: 'CSS', image: '/images/css.jpg' },
              { name: 'React', image: '/images/react.jpg' },
              { name: 'SQL', image: '/images/sql.jpg' },
              { name: 'Git', image: '/images/git.jpg' },
              { name: 'Docker', image: '/images/docker.jpg' },
              
              // Technologies IoT/Hardware
              { name: 'Arduino', image: '/images/arduino.jpg' },
              { name: 'LoRa', image: null },
              { name: 'NFC', image: null },
              
              // Technologies Spécialisées
              { name: 'VR', image: null },
              { name: 'AR', image: null },
              { name: 'IoT', image: null },
              { name: 'WebSocket', image: null },
              { name: 'REST', image: null },
              
              // Logiciels CAO
              { name: 'CATIA', image: '/images/catia.jpg' },
              { name: 'AutoCAD', image: '/images/autocad.jpg' },
              { name: 'Creo', image: '/images/creo.jpg' },
              { name: 'SketchUp', image: '/images/sketchup.jpg' },
              { name: 'Lecture de Plans', image: null },
              { name: 'Rédaction de Plans', image: null },
              
              // Industriel
              { name: 'CAO/DAO', image: null },
              { name: 'Forge Simulation', image: null },
              { name: 'Documentation Technique', image: null }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-2xl mb-2 h-12 flex items-center justify-center">
                  {tech.image ? (
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // Fallback to emoji if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <span 
                    className={`text-2xl ${tech.image ? 'hidden' : 'block'}`}
                    style={{ display: tech.image ? 'none' : 'block' }}
                  >
                    ⚡
                  </span>
                </div>
                <div className="font-semibold text-secondary-800">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Discutons de votre projet et créons ensemble quelque chose d&apos;exceptionnel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Démarrer un projet
              </Link>
              <Link href="/services" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Voir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
