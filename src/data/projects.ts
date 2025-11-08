export type Project = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  category: 'IoT' | 'Web' | 'Mobile' | 'Unity' | 'Industriel' | string;
  technologies: string[];
  date: string;
  client: string;
  features: string[];
  demo?: string;
  status: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Wall-E VR Interface',
    description:
      "Interface VR immersive permettant de contrôler des robots physiques, drones et véhicules RC en réalité virtuelle avec Unity.",
    image: '/images/images%20anciens%20portfolio/testvr2.jpg',
    category: 'Unity',
    technologies: ['Unity', 'VR', 'C#', 'WebSocket', 'Arduino'],
    date: '2024',
    client: 'T-ESP-800 Project',
    features: [
      'Contrôle VR de robots en temps réel',
      'Dessin de trajectoires pour drones',
      'Manipulation de bras robotiques',
      'Communication cryptée et authentification',
    ],
    demo: '/projects/wall-eVR.html',
    status: 'Terminé',
  },
  {
    id: 2,
    title: 'FORVIA Car - Interactive Cockpit',
    description:
      "Cockpit de voiture interactif avec interfaces graphiques intégrées et sièges mobiles contrôlés à distance, présenté au CES 2023.",
    image: '/images/images%20anciens%20portfolio/for1.jpg',
    category: 'IoT',
    technologies: ['Unity', 'C#', 'ESP32', 'WebSocket', 'Server Integration'],
    date: '2023',
    client: 'FORVIA (via EpicNpoc)',
    features: [
      'Cockpit interactif avec GUIs',
      'Sièges mobiles scénarisés',
      'Contrôle serveur centralisé',
      'Présentation CES 2023',
    ],
    demo: '/projects/forviaCar.html',
    status: 'Terminé',
  },
  {
    id: 3,
    title: 'VivaTech Medical App',
    description:
      "Application de téléconsultation médicale avec écran 3D Leia et eye-tracking pour partage d'organs en 3D en temps réel.",
    image: '/images/images%20anciens%20portfolio/med1.jpg',
    category: 'Unity',
    technologies: ['Unity', 'Leia SDK', 'Eye-Tracking', 'C#', 'WebRTC'],
    date: '2023',
    client: 'EpicNpoc (VivaTech)',
    features: [
      'Écran 3D avec eye-tracking',
      "Partage d'organes 3D en temps réel",
      'Visioconférence intégrée',
      'Display sans recompilation',
    ],
    demo: '/projects/medicalApp.html',
    status: 'Terminé',
  },
  {
    id: 4,
    title: 'Virtual Replica - Simulateur Automobile',
    description:
      "Simulateur automobile réaliste en Unity avec physique avancée et intégration de données de véhicules réels.",
    image: '/images/images%20anciens%20portfolio/virtual-replica/virtual1.jpg',
    category: 'Unity',
    technologies: ['Unity', 'C#', 'Physics Engine', 'Vehicle Dynamics'],
    date: '2023',
    client: 'Automotive Industry',
    features: [
      'Physique automobile réaliste',
      'Simulation de conduite immersive',
      'Intégration données véhicules réels',
      'Environnements 3D détaillés',
    ],
    demo: '/projects/virtual.html',
    status: 'Terminé',
  },
  {
    id: 5,
    title: 'THE CONVEYOR - Tri Automatisé',
    description:
      "Système de tri automatique de colis utilisant NFC et intégration avec le système WMS Dolibarr pour optimiser la logistique industrielle.",
    image: '/images/images%20anciens%20portfolio/epitech.jpg',
    category: 'IoT',
    technologies: ['Arduino', 'NFC', 'Dolibarr API', 'REST', 'C++'],
    date: '2024',
    client: 'Logistics Industrial',
    features: [
      'Tri automatique par NFC',
      'Intégration API Dolibarr',
      'Routage vers 3 entrepôts',
      "Gestion d'erreurs automatique",
    ],
    demo: '/projects/convoyeur_new.html',
    status: 'Terminé',
  },
  {
    id: 6,
    title: 'Sensor Sensei - LoRa Extension',
    description:
      "Extension du projet Sensor.Community utilisant LoRa pour déployer des capteurs environnementaux dans les zones sans WiFi.",
    image: '/images/images%20anciens%20portfolio/sensor.jpg',
    category: 'IoT',
    technologies: ['LoRa', 'Arduino', 'ESP32', 'Sensor.Community', 'C++'],
    date: '2024',
    client: 'Sensor.Community',
    features: [
      'Communication LoRa longue portée',
      'Capteurs environnementaux',
      'Déploiement zones sans WiFi',
      'Contribution open source',
    ],
    demo: '/projects/sensorSensei_new.html',
    status: 'Terminé',
  },
  {
    id: 7,
    title: 'Trash Management - IoT + AR',
    description:
      "Système intelligent de gestion des déchets combinant IoT et réalité augmentée pour optimiser la collecte et le tri.",
    image: '/images/images%20anciens%20portfolio/trash.jpg',
    category: 'IoT',
    technologies: ['Arduino', 'Unity', 'AR', 'IoT Sensors', 'C#'],
    date: '2024',
    client: 'Smart City Project',
    features: [
      'Capteurs IoT de niveau de remplissage',
      'Visualisation AR des poubelles',
      'Optimisation des circuits de collecte',
      'Dashboard de monitoring',
    ],
    demo: '/projects/trashProject_new.html',
    status: 'Terminé',
  },
  {
    id: 8,
    title: 'Portfolio Interactif 3D - Three.js',
    description:
      "Portfolio interactif 3D construit avec Three.js présentant un monde hexagonal où les visiteurs explorent projets et compétences à travers des objets immersifs.",
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
      'Animations UI sophistiquées',
    ],
    demo: '/projects/portfolio3d.html',
    status: 'Terminé',
  },
  {
    id: 9,
    title: 'EGO - Survival Game Multijoueur',
    description:
      "Jeu de survie hardcore en vue isométrique 2D où les joueurs évoluent sur une planète avec un écosystème fermé et auto-suffisant. Chaque ressource compte.",
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
      'Monde persistant évolutif',
    ],
    demo: '/projects/ego.html',
    status: 'Terminé',
  },
  {
    id: 10,
    title: 'Freestyle Challenge - Jeu Web Audio',
    description:
      "Application web mobile-first permettant de faire du freestyle sur des beats avec génération de mots aléatoires et enregistrement audio haute qualité.",
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
      'Configuration de sessions personnalisées',
    ],
    demo: '/projects/freestyle-challenge.html',
    status: 'Terminé',
  },
  {
    id: 11,
    title: 'Solar System AR - Éducation Spatiale',
    description:
      "Application mobile AR éducative pour visualiser les vraies échelles de grandeur du système solaire avec animations et simulations de phénomènes astronomiques.",
    image: '/images/images%20anciens%20portfolio/solar.jpg',
    category: 'Mobile',
    technologies: ['Unity', 'ARCore', 'ARKit', 'C#', 'Computer Vision'],
    date: '2024',
    client: 'Projet Éducatif',
    features: [
      'Visualisation distances proportionnelles réelles',
      'Diamètres planétaires 3D en AR',
      'Animations mouvements orbitaux',
      'Simulation phénomènes astronomiques (éclipses, cycles)',
      'Compatible iOS/Android smartphones',
    ],
    demo: '/projects/solar-system-ar.html',
    status: 'Terminé',
  },
  {
    id: 12,
    title: "Aubert & Duval - Ingénierie Forge",
    description:
      "Ingénieur forge spécialisé en simulation de déformation à chaud, conception de processus industriels et documentation technique pour l'aéronautique et la défense.",
    image: '/images/images%20anciens%20portfolio/aubertpresse.jpg',
    category: 'Industriel',
    technologies: ['Forge Simulation', 'CAO/DAO', 'Analyse Contraintes', 'Documentation PPR', 'Normes Sécurité'],
    date: '2019-2024',
    client: 'Aubert & Duval (Groupe Eramet)',
    features: [
      'Simulation déformation à chaud avec logiciel Forge',
      'Conception profils pièces selon spécifications',
      'Définition processus fabrication industrielle',
      'Création plans outillages et documentation technique',
      'Support technique atelier et coordination équipes',
      'Communication clients internationaux (FR/EN)',
    ],
    demo: '/projects/aubert-duval.html',
    status: "5 ans d'expérience",
  },
  {
    id: 13,
    title: 'Solaronics - Dessinateur Industriel',
    description:
      "Conception et rédaction de plans pour solutions de chauffage innovantes et efficaces. Développement de systèmes infrarouge, air chaud, et récupération de chaleur.",
    image: '/images/solaronics.jpg',
    category: 'Industriel',
    technologies: ['Creo Elements', 'Conception Industrielle', 'Plans Techniques', 'Relation Atelier/Bureau'],
    date: '2018-2019',
    client: 'Solaronics France',
    features: [
      'Conception sur logiciel Creo Elements',
      'Rédaction de plans techniques détaillés',
      "Relation atelier/bureau d'études",
      'Solutions de chauffage décentralisé',
      'Systèmes infrarouge et air chaud',
      'Unités de condensation et régulation',
    ],
    demo: '/projects/solaronics.html',
    status: 'Expérience industrielle',
  },
  {
    id: 14,
    title: '43ème Olympiades des Métiers - CAO',
    description:
      "Participation aux prestigieuses Olympiades des Métiers 2015 en Conception Assistée par Ordinateur. Classé 1er régional et qualifié pour représenter la région aux finales nationales.",
    image: '/images/olympiades.jpg',
    category: 'Industriel',
    technologies: ['CAO 3D', 'Conception Technique', 'Modélisation', 'Plans Industriels'],
    date: '2015',
    client: 'WorldSkills France (COFOM)',
    features: [
      'Classement 1er régional en CAO',
      'Qualification pour les finales nationales',
      'Représentation de la région au niveau national',
      'Compétition internationale reconnue WorldSkills',
      'Épreuve technique de conception 3D',
      'Validation des compétences CAO professionnelles',
    ],
    demo: '/projects/olympiades-metiers.html',
    status: '1er Régional - Finaliste National',
  },
];
