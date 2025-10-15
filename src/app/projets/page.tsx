'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

export default function Projets() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const projects = [
    {
      id: 1,
      title: 'Wall-E VR Interface',
      description: 'Interface VR immersive permettant de contrôler des robots physiques, drones et véhicules RC en réalité virtuelle avec Unity.',
      image: '/images/images%20anciens%20portfolio/testvr2.jpg',
      category: 'Unity',
      technologies: ['Unity', 'VR', 'C#', 'WebSocket', 'Arduino'],
      date: '2024',
      client: 'T-ESP-800 Project',
      features: [
        'Contrôle VR de robots en temps réel',
        'Dessin de trajectoires pour drones',
        'Manipulation de bras robotiques',
        'Communication cryptée et authentification'
      ],
      demo: '/projects/wall-eVR.html',
      status: 'Terminé'
    },
    {
      id: 2,
      title: 'FORVIA Car - Interactive Cockpit',
      description: 'Cockpit de voiture interactif avec interfaces graphiques intégrées et sièges mobiles contrôlés à distance, présenté au CES 2023.',
      image: '/images/images%20anciens%20portfolio/for1.jpg',
      category: 'IoT',
      technologies: ['Unity', 'C#', 'ESP32', 'WebSocket', 'Server Integration'],
      date: '2023',
      client: 'FORVIA (via EpicNpoc)',
      features: [
        'Cockpit interactif avec GUIs',
        'Sièges mobiles scénarisés',
        'Contrôle serveur centralisé',
        'Présentation CES 2023'
      ],
      demo: '/projects/forviaCar.html',
      status: 'Terminé'
    },
    {
      id: 3,
      title: 'VivaTech Medical App',
      description: 'Application de téléconsultation médicale avec écran 3D Leia et eye-tracking pour partage d\'organes en 3D en temps réel.',
      image: '/images/images%20anciens%20portfolio/med1.jpg',
      category: 'Unity',
      technologies: ['Unity', 'Leia SDK', 'Eye-Tracking', 'C#', 'WebRTC'],
      date: '2023',
      client: 'EpicNpoc (VivaTech)',
      features: [
        'Écran 3D avec eye-tracking',
        'Partage d\'organes 3D en temps réel',
        'Visioconférence intégrée',
        'Display sans recompilation'
      ],
      demo: '/projects/medicalApp.html',
      status: 'Terminé'
    },
    {
      id: 4,
      title: 'Virtual Replica - Simulateur Automobile',
      description: 'Simulateur automobile réaliste en Unity avec physique avancée et intégration de données de véhicules réels.',
      image: '/images/images%20anciens%20portfolio/virtual-replica/virtual1.jpg',
      category: 'Unity',
      technologies: ['Unity', 'C#', 'Physics Engine', 'Vehicle Dynamics'],
      date: '2023',
      client: 'Automotive Industry',
      features: [
        'Physique automobile réaliste',
        'Simulation de conduite immersive',
        'Intégration données véhicules réels',
        'Environnements 3D détaillés'
      ],
      demo: '/projects/virtual.html',
      status: 'Terminé'
    },
    {
      id: 5,
      title: 'THE CONVEYOR - Tri Automatisé',
      description: 'Système de tri automatique de colis utilisant NFC et intégration avec le système WMS Dolibarr pour optimiser la logistique industrielle.',
      image: '/images/images%20anciens%20portfolio/epitech.jpg',
      category: 'IoT',
      technologies: ['Arduino', 'NFC', 'Dolibarr API', 'REST', 'C++'],
      date: '2024',
      client: 'Logistics Industrial',
      features: [
        'Tri automatique par NFC',
        'Intégration API Dolibarr',
        'Routage vers 3 entrepôts',
        'Gestion d\'erreurs automatique'
      ],
      demo: '/projects/convoyeur_new.html',
      status: 'Terminé'
    },
    {
      id: 6,
      title: 'Sensor Sensei - LoRa Extension',
      description: 'Extension du projet Sensor.Community utilisant LoRa pour déployer des capteurs environnementaux dans les zones sans WiFi.',
      image: '/images/images%20anciens%20portfolio/sensor.jpg',
      category: 'IoT',
      technologies: ['LoRa', 'Arduino', 'ESP32', 'Sensor.Community', 'C++'],
      date: '2024',
      client: 'Sensor.Community',
      features: [
        'Communication LoRa longue portée',
        'Capteurs environnementaux',
        'Déploiement zones sans WiFi',
        'Contribution open source'
      ],
      demo: '/projects/sensorSensei_new.html',
      status: 'Terminé'
    },
    {
      id: 7,
      title: 'Trash Management - IoT + AR',
      description: 'Système intelligent de gestion des déchets combinant IoT et réalité augmentée pour optimiser la collecte et le tri.',
      image: '/images/images%20anciens%20portfolio/trash.jpg',
      category: 'IoT',
      technologies: ['Arduino', 'Unity', 'AR', 'IoT Sensors', 'C#'],
      date: '2024',
      client: 'Smart City Project',
      features: [
        'Capteurs IoT de niveau de remplissage',
        'Visualisation AR des poubelles',
        'Optimisation des circuits de collecte',
        'Dashboard de monitoring'
      ],
      demo: '/projects/trashProject_new.html',
      status: 'Terminé'
    },
    {
      id: 8,
      title: 'Portfolio Interactif 3D - Three.js',
      description: 'Portfolio interactif 3D construit avec Three.js présentant un monde hexagonal où les visiteurs explorent projets et compétences à travers des objets immersifs.',
      image: '/images/images%20anciens%20portfolio/portfolio3d.jpg',
      category: 'Web',
      technologies: ['Three.js', 'JavaScript', 'Blender', 'UI Animation', 'WebGL'],
      date: '2024',
      client: 'Portfolio Personnel',
      features: [
        'Monde 3D hexagonal immersif',
        'Navigation caméra fluide',
        'Zones thématiques interactives',
        'Objets 3D représentant les projets',
        'Animations UI sophistiquées'
      ],
      demo: '/projects/portfolio3d.html',
      status: 'Terminé'
    },
    {
      id: 9,
      title: 'EGO - Survival Game Multijoueur',
      description: 'Jeu de survie hardcore en vue isométrique 2D où les joueurs évoluent sur une planète avec un écosystème fermé et auto-suffisant. Chaque ressource compte.',
      image: '/images/images%20anciens%20portfolio/EGO1.jpg',
      category: 'Mobile',
      technologies: ['Unity', 'C#', 'Multiplayer', 'Isometric 2D', 'Game Design'],
      date: '2024',
      client: 'Projet Indie Game',
      features: [
        'Écosystème vivant interconnecté',
        'Survie hardcore avec mort permanente',
        'Multijoueur coopération/trahison',
        'Crafting et exploration de biomes',
        'Monde persistant évolutif'
      ],
      demo: '/projects/ego.html',
      status: 'Terminé'
    },
    {
      id: 10,
      title: 'Freestyle Challenge - Jeu Web Audio',
      description: 'Application web mobile-first permettant de faire du freestyle sur des beats avec génération de mots aléatoires et enregistrement audio haute qualité.',
      image: '/images/images%20anciens%20portfolio/wordbeat.jpg',
      category: 'Web',
      technologies: ['JavaScript', 'Web Audio API', 'MediaRecorder API', 'Vite', 'Netlify'],
      date: '2024',
      client: 'Seazon Studios',
      features: [
        'Interface mobile-first responsive',
        'Upload et lecture seamless de beats',
        'Enregistrement audio isolé haute qualité',
        'Export et partage intégrés',
        'Configuration de sessions personnalisées'
      ],
      demo: '/projects/freestyle-challenge.html',
      status: 'Terminé'
    }
  ];

  const categories = ['Tous', 'IoT', 'Web', 'Mobile', 'Unity'];

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
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-56 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center text-white bg-gradient-to-br from-primary-400 to-primary-600">
                    <div className="text-center">
                      <div className="text-6xl mb-2">
                        {project.category === 'IoT' && '🔌'}
                        {project.category === 'Web' && '🌐'}
                        {project.category === 'Mobile' && '📱'}
                        {project.category === 'Unity' && '🎮'}
                      </div>
                      <div className="text-sm font-medium opacity-90">{project.category}</div>
                    </div>
                  </div>
                  {/* Overlay gradient for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      {project.status}
                    </span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <span>{project.category === 'IoT' && '🔌'}{project.category === 'Web' && '🌐'}{project.category === 'Mobile' && '📱'}{project.category === 'Unity' && '🎮'}</span>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center text-primary-600 font-semibold text-sm">
                      <Tag size={14} className="mr-1" />
                      {project.category}
                    </span>
                    <span className="inline-flex items-center text-secondary-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Client */}
                  <p className="text-sm text-secondary-600 mb-3">
                    <span className="font-semibold">Client:</span> {project.client}
                  </p>

                  {/* Description */}
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-secondary-800 text-sm mb-2">Fonctionnalités clés:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="text-sm text-secondary-600 flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Voir le projet
                      </a>
                    )}
                  </div>
                </div>
              </div>
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
              'Unity', 'C#', 'Arduino', 'ESP32', 'LoRa', 'NFC',
              'VR', 'AR', 'IoT', 'WebSocket', 'Leia SDK', 'Eye-Tracking',
              'Dolibarr API', 'REST', 'Physics Engine', 'Sensor.Community'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-secondary-800">{tech}</div>
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
