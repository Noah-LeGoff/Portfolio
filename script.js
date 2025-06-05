// Données détaillées des projets
const projectsData = {
  snake: {
    title: "Jeu Snake",
    image: "./images/snake.png",
    description: "Un jeu Snake classique développé en C, fonctionnant directement dans le terminal avec une interface utilisateur intuitive.",
    details: [
      "Contrôles au clavier avec les touches directionnelles",
      "Mode automatique avec intelligence artificielle basique",
      "Gestion des collisions et du score",
      "Code structuré et modulaire en C"
    ],
    technologies: ["C", "Doxygen"],
    competences: ["UE1", "UE2"],
    challenges: "Le principal défi était de gérer les collisions en temps réel dans le terminal contre les murs ou les pavées.",
    learned: "Ce projet m'a permis d'approfondir mes connaissances en programmation C, notamment la gestion des tableaux à double dimension."
  },
  docker: {
    title: "Installation d'un Poste de Développement",
    image: "./images/docker.png",
    description: "Automatisation complète de l'installation et configuration d'un environnement de traitement de fichier en utilisant Docker et des scripts personnalisés.",
    details: [
      "Scripts Bash pour l'automatisation des installations",
      "Containers Docker pour isoler les environnements",
      "Scripts PHP pour le traitement de fichiers",
      "Configuration automatique des outils de traitement",
      "Documentation complète du processus"
    ],
    technologies: ["Docker", "Bash", "PHP"],
    competences: ["UE3"],
    challenges: "L'harmonisation des différents environnements et la gestion des dépendances entre les containers constituaient les principaux défis.",
    learned: "J'ai acquis une solide compréhension de la containerisation et de l'automatisation des processus de déploiement."
  },
  jo: {
    title: "Site Web des Jeux Olympiques",
    image: "./images/JO.png",
    description: "Développement d'un site web complet pour les Jeux Olympiques basé sur un cahier des charges client détaillé.",
    details: [
      "Design responsive adapté à tous les écrans",
      "Structure HTML organisée",
      "Styles CSS modernes avec animations",
      "Navigation fluide et intuitive",
      "Respect des standards d'accessibilité"
    ],
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    competences: ["UE5"],
    challenges: "Créer un design attrayant tout en respectant les contraintes du cahier des charges et en assurant une excellente expérience utilisateur.",
    learned: "Ce projet m'a permis de maîtriser les techniques avancées de CSS et l'importance de l'analyse des besoins client."
  },
  elladanse: {
    title: "Application de Gestion EllaDanse",
    image: "./images/EllaDanse.jpg",
    description: "Application de gestion complète développée en Java pour une association de danse, incluant la gestion des membres et des cours.",
    details: [
      "Interface graphique intuitive avec IntelliJ Idea",
      "Création des fenêtres avec JavaFX Scene Builder",
      "Gestion des adhérents et professeurs",
      "Planification des cours et événements",
      "Système de facturation intégré"
    ],
    technologies: ["Java", "IntelliJ Idea", "JavaFX Scene Builder"],
    competences: ["UE1"],
    challenges: "Concevoir une architecture logicielle et une interface utilisateur ergonomique pour des utilisateurs non techniques.",
    learned: "J'ai développé mes compétences en programmation orientée objet et en conception d'interfaces utilisateur."
  },
  reseau: {
    title: "Installation de Services Réseau",
    image: "./images/reseau.jpg",
    description: "Mise en place d'une infrastructure web complète avec serveur Apache, PHP et base de données pour l'authentification.",
    details: [
      "Configuration serveur Apache",
      "Développement backend en PHP",
      "Base de données MySQL pour l'authentification",
      "Sécurisation des accès et des données",
      "Interface d'administration"
    ],
    technologies: ["Apache", "PHP", "MySQL"],
    competences: ["UE3"],
    challenges: "Assurer la sécurité du système tout en maintenant des performances optimales et une maintenance facile.",
    learned: "J'ai acquis une compréhension approfondie de l'administration système et de la sécurité web."
  },
  bdd: {
    title: "Création et Exploitation d'une Base de Données",
    image: "./images/bdd.jpg",
    description: "Conception complète d'une base de données depuis le diagramme UML jusqu'à l'exploitation des données avec des requêtes complexes.",
    details: [
      "Analyse et conception UML",
      "Création des tables et relations",
      "Import de données depuis fichiers CSV",
      "Requêtes SQL complexes d'exploitation",
      "Optimisation des performances"
    ],
    technologies: ["SQL", "SQL-Workbench", "UML", "CSV"],
    competences: ["UE4"],
    challenges: "Concevoir un modèle de données normalisé et efficace, puis optimiser les requêtes pour de gros volumes de données.",
    learned: "Ce projet m'a permis de maîtriser la conception de bases de données et l'écriture de requêtes SQL avancées."
  }
};

// Éléments DOM
const projects = document.querySelectorAll('.projet');
const panel = document.querySelector('.project-panel');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-panel');
const panelContent = document.querySelector('.panel-content');

// Fonction pour ouvrir le panneau
function openPanel(projectKey) {
  const project = projectsData[projectKey];
  if (!project) return;

  // Générer le contenu du panneau
  panelContent.innerHTML = `
        <h3>${project.title}</h3>
        <img src="${project.image}" alt="${project.title}">
        
        <div class="panel-details">
          <h4>📋 Description</h4>
          <p>${project.description}</p>
        </div>

        <div class="panel-details">
          <h4>🎯 Fonctionnalités</h4>
          <ul>
            ${project.details.map(detail => `<li>${detail}</li>`).join('')}
          </ul>
        </div>

        <div class="panel-details">
          <h4>💻 Technologies utilisées</h4>
          <div class="tech-tags">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>

        <div class="panel-details">
          <h4>🚀 Défis relevés</h4>
          <p>${project.challenges}</p>
        </div>

        <div class="panel-details">
          <h4>📚 Apprentissages</h4>
          <p>${project.learned}</p>
        </div>

        <div class="panel-details">
          <h4>🧠 Compétences</h4>
          <div class="tech-tags">
            ${project.competences.map(competence => `<a href="#${competence}" class="tech-tag">${competence}</a>`).join('')}
          </div>
        </div>
      `;

  // Afficher le panneau et l'overlay
  panel.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fonction pour fermer le panneau
function closePanel() {
  panel.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Event listeners
projects.forEach(project => {
  project.addEventListener('click', () => {
    const projectKey = project.dataset.project;
    openPanel(projectKey);
  });
});

closeBtn.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);

// Fermer avec la touche Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePanel();
  }
});

// Animation des éléments au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.2s';
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

// Observer toutes les sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Navigation fluide
document.addEventListener('click', function (e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const targetId = anchor.getAttribute('href');
  const target = document.querySelector(targetId);
  if (!target) return;

  e.preventDefault();

  // Fermer le panneau si le lien est dedans
  if (anchor.closest('.project-panel')) {
    closePanel();
  }

  // Scroll avec compensation du header
  const headerOffset = document.querySelector('header').offsetHeight;
  const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});