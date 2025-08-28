/* ======= CONFIG ======= */
/* ======= CONFIG ======= */
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const SECURE_API_BASE = process.env.API_BASE_URL || "https://fanuel045.vercel.app";

/* ======= DONNÉES INIT ======= */
const initialData = {
  "hero-title": "Mandela KASUMBA Fanuel",
  "hero-subtitle": "Développeur Web Full Stack ",
  "hero-description": "Je crée des expériences web exceptionnelles avec Django, Django REST Framework et en train d'apprendre Kotlin pour mobiles. Passionné par les technologies émergentes comme la blockchain.",
  "about-title": "À Propos de Moi",
  "about-subtitle": "Mon Parcours",
  "about-description": "Étudiant en Bac 4 en Génie Logiciel de l'Université Polytechnique de Gitega,UPG, je suis passionné par le développement web et mobile depuis plusieurs années. J'ai acquis une expertise solide dans la création d'applications modernes et responsives en python avec Django и React.js.",
  "about-details": "Je m'intéresse particulièrement aux technologies émergentes comme la blockchain et je me forme constamment aux nouvelles pratiques de développement. J'aime résoudre des problèmes complexes et créer des expériences utilisateur exceptionnelles.",
  "about-more": "En dehors du code, je suis passionné par l'enseignement et le partage de connaissances. J'ai d'ailleurs été enseignant à l'école primaire Destiny School en 2020-2021 avant de me consacrer pleinement à mes études en génie logiciel.",
  "info-title": "Informations Personnelles",
  "info-name": "Mandela KASUMBA Fanuel",
  "info-nickname": "Fanuel045",
  "info-email": "mandela.fanuel.1@gmail.com",
  "info-phone": "+25768803611 (WhatsApp)",
  "info-location": "Kinama/Bujumbura, travaille en freelance à Gitega",
  "info-education": "Bac 4 Génie Logiciel",
  "info-availability": "Disponible pour projets freelances",
  "skills-title": "Mes Compétences",
  "skill-1-title": "Backend",
  "skill-1-desc": "Django, Django REST Framework, Bases de données",
  "skill-2-title": "Frontend",
  "skill-2-desc": "HTML, CSS, JavaScript, Tailwind",
  "skill-3-title": "Mobile",
  "skill-3-desc": "Kotlin (en apprentissage), Développement Android",
  "skill-4-title": "Outils & DevOps",
  "skill-4-desc": "Docker, Git, CI/CD, Figma",
  "exp-title": "Mon Parcours",
  "exp-1-title": "Développeur Blockchain",
  "exp-1-company": "KitHub - Branche Gitega",
  "exp-1-date": "2022 - Présent",
  "exp-1-desc": "Développement d'applications blockchain et participation aux projets de formation. Membre de l'équipe ayant développé la plateforme ComLab.",
  "exp-2-title": "Enseignant",
  "exp-2-company": "Destiny School, Kamenge",
  "exp-2-date": "2020 - 2021",
  "exp-2-desc": "Enseignement à l'école primaire avant de me consacrer à mes études supérieures en génie logiciel.",
  "edu-1-title": "Bac 4 en Génie Logiciel",
  "edu-1-school": "Département IT",
  "edu-1-date": "En cours",
  "edu-1-desc": "Formation en ingénierie logicielle avec spécialisation en développement web et mobile.",
  "edu-2-title": "Formations Blockchain",
  "edu-2-school": "KitHub - Junetech Events",
  "edu-2-date": "2022 - Présent",
  "edu-2-desc": "Participation aux événements Junetech et formations certifiantes en développement blockchain.",
  "projects-title": "Mes Projets",
  "project-1-title": "MedicalChain",
  "project-1-desc": "Plateforme médicale basée sur la blockchain pour la gestion sécurisée des dossiers de santé.",
  "project-2-title": "SeaSky On The Way",
  "project-2-desc": "Application de suivi maritime avec analyse de données et prédictions météorologiques.",
  "project-3-title": "inviQ",
  "project-3-desc": "Plateforme décentralisée de génération et de gestion d'invitations avec système de vérification blockchain.",
  "documents-title": "Mes Documents",
  "cv-title": "CV Professionnel",
  "cv-description": "Mon curriculum vitae à jour",
  "cv-link": "Télécharger (PDF)",
  "diplomas-title": "Diplômes",
  "diplomas-description": "Mes diplômes universitaires",
  "diplomas-link": "Voir les diplômes",
  "certifications-title": "Certifications",
  "certifications-description": "Mes certifications professionnelles",
  "certifications-link": "Voir les certifications",
  "other-docs-title": "Autres Documents",
  "doc-1-title": "Lettre de Motivation",
  "doc-1-desc": "Modèle personnalisable",
  "doc-2-title": "Présentation Portfolio",
  "doc-2-desc": "Vue d'ensemble de mes compétences",
  "contact-title": "Contactez-Moi",
  "contact-subtitle": "Restons en Contact",
  "contact-description": "N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger.",
  "contact-email": "mandela.fanuel.1@gmail.com",
  "contact-phone": "+25768803611",
  "contact-location": "Kinama/Bujumbura, Burundi",
  "footer-text": "© 2023 Mandela KASUMBA Fanuel (Fanuel045). Tous droits réservés.",
  "footer-credits": "Développé avec ❤️ en utilisant HTML, CSS et JavaScript",
  "logo-text": "Mandla Fanuel Portofoio",
  "info-university": "Université Polytechnique de Gitega, UPG",
};

/* ======= TRADUCTIONS ======= */
const translations = {
  fr: {
    // Navigation
    "nav_home": "Accueil",
    "nav_projects": "Projets",
    "nav_skills": "Compétences",
    "nav_experience": "Expériences",
    "nav_documents": "Documents",
    "nav_contact": "Contact",
    "language_select": "Langue",
    
    // Admin
    "admin_login_title": "Connexion Administrateur",
    "admin_password_label": "Mot de passe administrateur",
    "admin_password_error": "Mot de passe invalide.",
    "secure_download_note": "Téléchargements privés via API sécurisée (URL signées temporaires).",
    "edit_mode_button": "Mode Édition",
    "upload_photo_button": "Photo",
    "new_project_button": "Nouveau Projet",
    "add_details_button": "Ajouter les détails",
    "upload_docs_button": "Documents",
    "save_button": "Enregistrer",
    "cancel_button": "Annuler",
    
    // Projets
    "add_project_title": "Ajouter / Modifier un Projet",
    "project_title_label": "Titre du projet",
    "project_description_label": "Description",
    "technologies_label": "Technologies (séparées par des virgules)",
    "project_image_label": "Image du projet",
    "click_to_upload": "Cliquez pour télécharger une image",
    "project_required_fields": "Veuillez remplir au moins le titre et la description.",
    
    // Détails
    "add_details_title": "Ajouter des détails",
    "choose_project_label": "Choisir un projet",
    "details_content_label": "Contenu du détail",
    "details_required": "Veuillez saisir un détail.",
    
    // Documents
    "protected_access_title": "Accès protégé",
    "protected_document_message": "Ce document est protégé. Veuillez entrer le mot de passe pour le télécharger.",
    "password_label": "Mot de passe",
    "invalid_password_error": "Mot de passe invalide.",
    "download_button": "Télécharger",
    
    // Contact
    "contact_required_title": "Contact requis",
    "contact_required_message": "Pour télécharger ce document, veuillez d'abord me contacter.",
    "contact_required_note": "Je vous enverrai le document après notre échange.",
    "close_button": "Fermer",
    "login_button": "Se connecter",
    "add_button": "Ajouter",

    // Edit
    "edit_button": "Modifier",
    "delete_button": "Supprimer",
    "delete_detail_button": "Supprimer le détail",
    "project_details": "Détails du projet",
    "project_technologies": "Technologies utilisées",
    "no_details": "Aucun détail pour le moment",
    
    // Textes additionnels pour une traduction complète
    "hero-title": "Mandela KASUMBA Fanuel",
    "hero-subtitle": "Développeur Web Full Stack ",
    "hero-description": "Je crée des expériences web exceptionnelles avec Django, Django REST Framework et en train d'apprendre Kotlin pour mobile. Passionné par les technologies émergentes comme la blockchain.",
    "about-title": "À Propos de Moi",
    "about-subtitle": "Mon Parcours",
    "about-description": "Étudiant en Bac 4 en Génie Logiciel de l'Université Polytechnique de Gitega,UPG, je suis passionné par le développement web et mobile depuis plusieurs années. J'ai acquis une expertise solide dans la création d'applications modernes et responsives en python avec Django et React.js.",
    "about-details": "Je m'intéresse particulièrement aux technologies émergentes comme la blockchain et je me forme constamment aux nouvelles pratiques de développement. J'aime résoudre des problèmes complexes et créer des expériences utilisateur exceptionnelles.",
    "about-more": "En dehors du code, je suis passionné par l'enseignement et le partage de connaissances. J'ai d'ailleurs été enseignant à l'école primaire Destiny School en 2020-2021 avant de me consacrer pleinement à mes études en génie logiciel.",
    "info-title": "Informations Personnelles",
    "info-name": "Mandela KASUMBA Fanuel",
    "info-nickname": "Fanuel045",
    "info-email": "mandela.fanuel.1@gmail.com",
    "info-phone": "+25768803611 (WhatsApp)",
    "info-location": "Kinama/Bujumbura, travaille en freelance à Gitega",
    "info-university": "Université Polytechnique de Gitega, UPG",
    "info-education": "Bac 4 Génie Logiciel",
    "info-availability": "Disponible pour projets freelances",
    "skills-title": "Mes Compétences",
    "skill-1-title": "Backend",
    "skill-1-desc": "Django, Django REST Framework, Bases de données",
    "skill-2-title": "Frontend",
    "skill-2-desc": "HTML, CSS, JavaScript, Tailwind",
    "skill-3-title": "Mobile",
    "skill-3-desc": "Kotlin (en apprentissage), Développement Android",
    "skill-4-title": "Outils & DevOps",
    "skill-4-desc": "Docker, Git, CI/CD, Figma",
    "exp-title": "Mon Parcours",
    "exp-1-title": "Développeur Blockchain",
    "exp-1-company": "KitHub - Branche Gitega",
    "exp-1-date": "2022 - Présent",
    "exp-1-desc": "Développement d'applications blockchain et participation aux projets de formation. Membre de l'équipe ayant développé la plateforme ComLab.",
    "exp-2-title": "Enseignant",
    "exp-2-company": "Destiny School, Kamenge",
    "exp-2-date": "2020 - 2021",
    "exp-2-desc": "Enseignement à l'école primaire avant de me consacrer à mes études supérieures en génie logiciel.",
    "edu-1-title": "Bac 4 en Génie Logiciel",
    "edu-1-school": "Département IT",
    "edu-1-date": "En cours",
    "edu-1-desc": "Formation en ingénierie logicielle avec spécialisation en développement web et mobile.",
    "edu-2-title": "Formations Blockchain",
    "edu-2-school": "KitHub - Junetech Events",
    "edu-2-date": "2022 - Présent",
    "edu-2-desc": "Participation aux événements Junetech et formations certifiantes en développement blockchain.",
    "projects-title": "Mes Projets",
    "project-1-title": "MedicalChain",
    "project-1-desc": "Plateforme médicale basée sur la blockchain pour la gestion sécurisée des dossiers de santé.",
    "project-2-title": "SeaSky On The Way",
    "project-2-desc": "Application de suivi maritime avec analyse de données et prédictions météorologiques.",
    "project-3-title": "inviQ",
    "project-3-desc": "Plateforme décentralisée de génération et de gestion d'invitations avec système de vérification blockchain.",
    "documents-title": "Mes Documents",
    "cv-title": "CV Professionnel",
    "cv-description": "Mon curriculum vitae à jour",
    "cv-link": "Télécharger (PDF)",
    "diplomas-title": "Diplômes",
    "diplomas-description": "Mes diplômes universitaires",
    "diplomas-link": "Voir les diplômes",
    "certifications-title": "Certifications",
    "certifications-description": "Mes certifications professionnelles",
    "certifications-link": "Voir les certifications",
    "other-docs-title": "Autres Documents",
    "doc-1-title": "Lettre de Motivation",
    "doc-1-desc": "Modèle personnalisable",
    "doc-2-title": "Présentation Portfolio",
    "doc-2-desc": "Vue d'ensemble de mes compétences",
    "contact-title": "Contactez-Moi",
    "contact-subtitle": "Restons en Contact",
    "contact-description": "N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger.",
    "contact-email": "mandela.fanuel.1@gmail.com",
    "contact-phone": "+25768803611",
    "contact-location": "Kinama/Bujumbura, Burundi",
    "footer-text": "© 2023 Mandela KASUMBA Fanuel (Fanuel045). Tous droits réservés.",
    "footer-credits": "Développé avec ❤️ en utilisant HTML, CSS et JavaScript",
    "logo-text": "Mandla Fanuel Portofolio",
    "alt-fanuel2": "Fanuel045 - Développeur Web Full Stack",
    "alt-medicalchain": "Projet MedicalChain - Plateforme médicale blockchain",
    "alt-seasky": "Projet SeaSky On The Way - Application maritime",
    "alt-event": "Projet inviQ - Plateforme d'invitations blockchain",
    
    // Nouveaux labels pour la section about
    "label_fullname": "Nom complet",
    "label_nickname": "Surnom",
    "label_email": "Email",
    "label_phone": "Téléphone",
    "label_location": "Localisation",
    "label_universite": "Université",
    "label_education": "Niveau d'étude",
    "label_availability": "Disponibilité",
    "label_name": "Nom Complet",
    "label_subject": "Sujet",
    "label_message": "Message",
    "btn_contact_me": "Me Contacter",
    "btn_view_documents": "Voir mes Documents",
    "title_experiences": "Expériences Professionnelles",
    "title_education": "Formations",
    "project_technologies": "Technologies utilisées",
    "project_details": "Détails du projet",
    "no_details": "Aucun détail pour le moment",
    "form_contact_title": "Contactez-Moi",
    "form_contact_subtitle": "Restons en Contact",
    "form_contact_description": "N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger.",
    "form_send_message": "Envoyer le Message"
  },
  en: {
    // Navigation
    "nav_home": "Home",
    "nav_projects": "Projects",
    "nav_skills": "Skills",
    "nav_experience": "Experience",
    "nav_documents": "Documents",
    "nav_contact": "Contact",
    "language_select": "Language",
    
    // Admin
    "admin_login_title": "Admin Login",
    "admin_password_label": "Admin password",
    "admin_password_error": "Invalid password.",
    "secure_download_note": "Private downloads via secure API (temporary signed URLs).",
    "edit_mode_button": "Edit Mode",
    "upload_photo_button": "Photo",
    "new_project_button": "New Project",
    "add_details_button": "Add Details",
    "upload_docs_button": "Documents",
    "save_button": "Save",
    "cancel_button": "Cancel",
    
    // Projets
    "add_project_title": "Add / Edit Project",
    "project_title_label": "Project title",
    "project_description_label": "Description",
    "technologies_label": "Technologies (comma separated)",
    "project_image_label": "Project image",
    "click_to_upload": "Click to upload an image",
    "project_required_fields": "Please fill at least the title and description.",
    
    // Détails
    "add_details_title": "Add Details",
    "choose_project_label": "Choose a project",
    "details_content_label": "Detail content",
    "details_required": "Please enter a detail.",
    
    // Documents
    "protected_access_title": "Protected Access",
    "protected_document_message": "This document is protected. Please enter the password to download it.",
    "password_label": "Password",
    "invalid_password_error": "Invalid password.",
    "download_button": "Download",
    
    // Contact
    "contact_required_title": "Contact Required",
    "contact_required_message": "To download this document, please contact me first.",
    "contact_required_note": "I will send you the document after our exchange.",
    "close_button": "Close",
    "login_button": "Login",
    "add_button": "Add",

     // Edit
    "edit_button": "Edit",
    "delete_button": "Delete",
    "delete_detail_button": "Delete detail",
    "project_details": "Project details",
    "project_technologies": "Technologies used",
    "no_details": "No details at the moment",
    
    // Textes additionnels pour une traduction complète
    "hero-title": "Mandela KASUMBA Fanuel",
    "hero-subtitle": "Full Stack & Web Applications Developer",
    "hero-description": "I create exceptional web experiences with Django, Django REST Framework and still learning Kotlin for mobile. Passionate about emerging technologies like blockchain.",
    "about-title": "About Me",
    "about-subtitle": "My Journey",
    "about-description": "Polythechnic University of Gitega,UPG",
    "about-description": "4th year Software Engineering student at Polythechnique University of Gitega,UPG, I have been passionate about web and mobile development for several years. I have acquired solid expertise in creating modern and responsive applications in python with Django and React.js.",
    "about-details": "I am particularly interested in emerging technologies like blockchain and I constantly train in new development practices. I love solving complex problems and creating exceptional user experiences.",
    "about-more": "Outside of code, I am passionate about teaching and knowledge sharing. I was a teacher at Destiny Primary School in 2020-2021 before fully devoting myself to my software engineering studies.",
    "info-title": "Personal Information",
    "info-name": "Mandela KASUMBA Fanuel",
    "info-nickname": "Fanuel045",
    "info-email": "mandela.fanuel.1@gmail.com",
    "info-phone": "+25768803611 (WhatsApp)",
    "info-location": "Kinama/Bujumbura, freelance work in Gitega",
    "info-university": "Polytechnic University of Gitega, UPG",
    "info-education": "4th year Software Engineering",
    "info-availability": "Available for freelance projects",
    "skills-title": "My Skills",
    "skill-1-title": "Backend",
    "skill-1-desc": "Django, Django REST Framework, Databases",
    "skill-2-title": "Frontend",
    "skill-2-desc": "HTML, CSS, JavaScript, Tailwind",
    "skill-3-title": "Mobile",
    "skill-3-desc": "Kotlin (learning), Android Development",
    "skill-4-title": "Tools & DevOps",
    "skill-4-desc": "Docker, Git, CI/CD, Figma",
    "exp-title": "My Journey",
    "exp-1-title": "Blockchain Developer",
    "exp-1-company": "KitHub - Gitega Branch",
    "exp-1-date": "2022 - Present",
    "exp-1-desc": "Blockchain application development and participation in training projects. Member of the team that developed the ComLab platform.",
    "exp-2-title": "Teacher",
    "exp-2-company": "Destiny School, Kamenge",
    "exp-2-date": "2020 - 2021",
    "exp-2-desc": "Teaching in primary school before devoting myself to my higher studies in software engineering.",
    "edu-title": "Polythechnic University of Gitega,UPG",
    "edu-1-title": "4th year Software Engineering",
    "edu-1-school": "IT Department",
    "edu-1-date": "In progress",
    "edu-1-desc": "Software engineering training with specialization in web and mobile development.",
    "edu-2-title": "Blockchain Trainings",
    "edu-2-school": "KitHub - Junetech Events",
    "edu-2-date": "2022 - Present",
    "edu-2-desc": "Participation in Junetech events and certified training in blockchain development.",
    "projects-title": "My Projects",
    "project-1-title": "MedicalChain",
    "project-1-desc": "Blockchain-based medical platform for secure health record management.",
    "project-2-title": "SeaSky On The Way",
    "project-2-desc": "Maritime tracking application with data analysis and weather predictions.",
    "project-3-title": "inviQ",
    "project-3-desc": "Decentralized invitation generation and management platform with blockchain verification system.",
    "documents-title": "My Documents",
    "cv-title": "Professional CV",
    "cv-description": "My up-to-date curriculum vitae",
    "cv-link": "Download (PDF)",
    "diplomas-title": "Diplomas",
    "diplomas-description": "My university diplomas",
    "diplomas-link": "View diplomas",
    "certifications-title": "Certifications",
    "certifications-description": "My professional certifications",
    "certifications-link": "View certifications",
    "other-docs-title": "Other Documents",
    "doc-1-title": "Cover Letter",
    "doc-1-desc": "Customizable template",
    "doc-2-title": "Portfolio Presentation",
    "doc-2-desc": "Overview of my skills",
    "contact-title": "Contact Me",
    "contact-subtitle": "Let's Stay in Touch",
    "contact-description": "Feel free to contact me to discuss projects, opportunities or simply to exchange.",
    "contact-email": "mandela.fanuel.1@gmail.com",
    "contact-phone": "+25768803611",
    "contact-location": "Kinama/Bujumbura, Burundi",
    "footer-text": "© 2023 Mandela KASUMBA Fanuel (Fanuel045). All rights reserved.",
    "footer-credits": "Developed with ❤️ using HTML, CSS and JavaScript",
    "logo-text": "Mandla Fanuel Portofolio",
    "alt-fanuel2": "Fanuel045 - Web Full Stack Developer",
    "alt-medicalchain": "MedicalChain Project - Blockchain medical platform",
    "alt-seasky": "SeaSky On The Way Project - Maritime application",
    "alt-event": "inviQ Project - Blockchain invitation platform",
    
    // Nouveaux labels pour la section about
    "label_fullname": "Full name",
    "label_nickname": "Nickname",
    "label_email": "Email",
    "label_phone": "Phone",
    "label_location": "Location",
    "label_universite": "University",
    "label_education": "Education level",
    "label_availability": "Availability",
    "label_name": "Full Name",
    "label_subject": "Subject",
    "label_message": "Message",
    "btn_contact_me": "Contact Me",
    "btn_view_documents": "View my Documents",
    "title_experiences": "Professional Experiences",
    "title_education": "Education",
    "project_technologies": "Technologies used",
    "project_details": "Project details",
    "no_details": "No details at the moment",
    "form_contact_title": "Contact Me",
    "form_contact_subtitle": "Let's Stay in Touch",
    "form_contact_description": "Feel free to contact me to discuss projects, opportunities or simply to exchange.",
    "form_send_message": "Send Message"
  }
};




/* ======= COMPOSANTS (rendus) ======= */
const Header = {
  render: (currentLang) => `
    <div class="edit-btn" id="edit-toggle" title="Activer le mode édition">
      <i class="fas fa-edit text-xl"></i>
    </div>

    <div class="admin-panel" id="admin-panel">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 class="text-xl font-bold" data-i18n="edit_mode_button">Mode Édition</h2>
        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 md:mt-0">
          <button id="upload-profile" class="btn-blue">
            <i class="fas fa-camera mr-2"></i><span data-i18n="upload_photo_button">Photo</span>
          </button>
          <button id="add-project" class="btn-blue" style="background:#7C3AED">
            <i class="fas fa-plus mr-2"></i><span data-i18n="new_project_button">Nouveau Projet</span>
          </button>
          <button id="add-details" class="btn-blue admin-only" style="background:#0EA5E9">
            <i class="fas fa-list-ul mr-2"></i><span data-i18n="add_details_button">Ajouter les détails</span>
          </button>
          <button id="upload-docs" class="btn-blue" style="background:#4F46E5">
            <i class="fas fa-file-upload mr-2"></i><span data-i18n="upload_docs_button">Documents</span>
          </button>
          <button id="save-btn" class="btn-blue" style="background:#059669">
            <i class="fas fa-save mr-2"></i><span data-i18n="save_button">Enregistrer</span>
          </button>
          <button id="cancel-btn" class="btn-secondary">
            <i class="fas fa-times mr-2"></i><span data-i18n="cancel_button">Annuler</span>
          </button>
        </div>
      </div>
    </div>

    <div class="save-notification" id="save-notification">
      <i class="fas fa-check-circle mr-2"></i> Modifications enregistrées avec succès!
    </div>

    <nav class="bg-white shadow-md fixed w-full z-10">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" class="flex items-center">
          <div class="logo-fanuel mr-2" title="Mandela Fanuel Dev." style="width:30px;height:30px;cursor:pointer;">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="100" height="100" fill="#0D1B2A" rx="12" />
              <circle cx="50" cy="50" r="40" stroke="#FFD700" stroke-width="4" fill="none" />
              <text x="50%" y="54%" text-anchor="middle" fill="#8B0000" font-size="36" font-family="Arial, sans-serif" font-weight="bold" dominant-baseline="middle">By</text>
            </svg>
          </div>
          <span class="text-xl font-bold text-blue-600 editable" data-id="logo-text">Mandela</span>
        </a>
        <div class="hidden md:flex items-center">
          <a href="#accueil" class="mx-2 text-gray-700 hover:text-blue-600 nav-link" data-i18n="nav_home">Accueil</a>
          <a href="#projets" class="mx-2 text-gray-700 hover:text-blue-600 nav-link" data-i18n="nav_projects">Projets</a>
          <a href="#competences" class="mx-2 text-gray-700 hover:text-blue-600 nav-link" data-i18n="nav_skills">Compétences</a>
          <a href="#experiences" class="mx-2 text-gray-700 hover:text-blue-600 nav-link" data-i18n="nav_experience">Expériences</a>
          <a href="#documents" class="mx-2 text-gray-700 hover:text-blue-600 nav-link" data-i18n="nav_documents">Documents</a>
          <a href="#contact" class="mx-2 text-gray-700 hover:text-blue-600 nav-link" data-i18n="nav_contact">Contact</a>
          
          <!-- Sélecteur de langue -->
          <div class="ml-4 relative">
            <select id="language-selector" class="px-2 py-1 border rounded text-sm">
              <option value="fr" ${currentLang === 'fr' ? 'selected' : ''}>French</option>
              <option value="en" ${currentLang === 'en' ? 'selected' : ''}>English</option>
            </select>
          </div>
        </div>
        <div class="md:hidden flex items-center">
          <!-- Sélecteur de langue version mobile -->
          <select id="language-selector-mobile" class="px-2 py-1 border rounded text-sm mr-3">
            <option value="fr" ${currentLang === 'fr' ? 'selected' : ''}>French</option>
            <option value="en" ${currentLang === 'en' ? 'selected' : ''}>English</option>
          </select>
          <button id="menu-btn" class="text-gray-700" aria-label="Menu">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      <div id="mobile-menu" class="hidden px-6 pt-2 pb-4 bg-white shadow-lg">
        <a href="#accueil" class="block py-2 text-gray-700 hover:text-blue-600" data-i18n="nav_home">Accueil</a>
        <a href="#projets" class="block py-2 text-gray-700 hover:text-blue-600" data-i18n="nav_projects">Projets</a>
        <a href="#competences" class="block py-2 text-gray-700 hover:text-blue-600" data-i18n="nav_skills">Compétences</a>
        <a href="#experiences" class="block py-2 text-gray-700 hover:text-blue-600" data-i18n="nav_experience">Expériences</a>
        <a href="#documents" class="block py-2 text-gray-700 hover:text-blue-600" data-i18n="nav_documents">Documents</a>
        <a href="#contact" class="block py-2 text-gray-700 hover:text-blue-600" data-i18n="nav_contact">Contact</a>
      </div>
    </nav>
  `
};

const Hero = {
  render: () => `
    <section id="accueil" class="pt-32 pb-16 px-6 gradient-bg text-white">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 editable" data-id="hero-title" data-i18n="hero-title">Mandela KASUMBA Fanuel</h1>
          <h2 class="text-2xl md:text-3xl mb-6 editable" data-id="hero-subtitle" data-i18n="hero-subtitle">Développeur Web Full Stack </h2>
          <p class="text-lg mb-8 editable" data-id="hero-description" data-i18n="hero-description">Je crée des expériences web...</p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="btn-primary rounded-full btn-contact">Me Contacter</a>
            <a href="#documents" class="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 btn-documents">Voir mes Documents</a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="profile-image-container">
            <img src="assets/images/Fanuel2.jpg" alt="Fanuel045 - Développeur Web Full Stack" class="profile-image" id="profile-image" data-i18n-alt="alt-fanuel2">
            <div class="profile-overlay"><i class="fas fa-camera text-white text-2xl"></i></div>
            <input type="file" id="profile-upload" accept="image/*" class="hidden">
          </div>
        </div>
      </div>
    </section>
  `
};

const About = {
  render: () => `
    <section class="py-16 px-6 bg-white">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 section-title section-title-center editable" data-id="about-title" data-i18n="about-title">À Propos de Moi</h2>
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h3 class="text-2xl font-semibold mb-4 text-blue-600 editable" data-id="about-subtitle" data-i18n="about-subtitle">Mon Parcours</h3>
            <p class="text-gray-700 mb-6 editable" data-id="about-description" data-i18n="about-description">Étudiant en Bac 4 en Génie Logiciel de l'Université POlytechnique de Gitega,UPG...</p>
            <p class="text-gray-700 mb-6 editable" data-id="about-details" data-i18n="about-details">Je m'intéresse particulièrement...</p>
            <p class="text-gray-700 editable" data-id="about-more" data-i18n="about-more">En dehors du code, je suis passionné...</p>
          </div>
          <div class="md:w-1/2 md:pl-8">
            <h3 class="text-2xl font-semibold mb-4 text-blue-600 editable" data-id="info-title" data-i18n="info-title">Informations Personnelles</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><p class="font-semibold about-info-label" data-i18n-label="label_fullname">Nom complet:</p><p class="text-gray-700 editable" data-id="info-name" data-i18n="info-name">Mandela KASUMBA Fanuel</p></div>
              <div><p class="font-semibold about-info-label" data-i18n-label="label_nickname">Surnom:</p><p class="text-gray-700 editable" data-id="info-nickname" data-i18n="info-nickname">Fanuel045</p></div>
              <div><p class="font-semibold about-info-label" data-i18n-label="label_email">Email:</p><p class="text-gray-700 editable" data-id="info-email" data-i18n="info-email">mandela.fanuel.1@gmail.com</p></div>
              <div><p class="font-semibold about-info-label" data-i18n-label="label_phone">Téléphone:</p><p class="text-gray-700 editable" data-id="info-phone" data-i18n="info-phone">+25768803611 (WhatsApp)</p></div>
              <div><p class="font-semibold about-info-label" data-i18n-label="label_location">Localisation:</p><p class="text-gray-700 editable" data-id="info-location" data-i18n="info-location">Kinama/Bujumbura, travaille en freelance à Gitega</p></div>

              <!-- CORRECTION: Ajouter un data-id unique pour l'université -->
              <div><p class="font-semibold about-info-label" data-i18n-label="label_universite">Université :</p><p class="text-gray-700 editable" data-id="info-university">Université Polytechnique de Gitega, UPG</p></div>

              <!-- CORRECTION: Garder data-id="info-education" seulement pour le niveau d'étude -->
              <div><p class="font-semibold about-info-label" data-i18n-label="label_education">Niveau d'étude:</p><p class="text-gray-700 editable" data-id="info-education" data-i18n="info-education">Bac 4 Génie Logiciel</p></div>

              <div><p class="font-semibold about-info-label" data-i18n-label="label_availability">Disponibilité:</p><p class="text-gray-700 editable" data-id="info-availability" data-i18n="info-availability">Disponible pour projets freelances</p></div>
            </div>
            <div class="mt-6">
              <a href="#contact" class="btn-primary inline-block btn-contact">Me Contacter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

const Skills = {
  render: () => `
    <section id="competences" class="py-16 px-6 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 section-title section-title-center editable" data-id="skills-title" data-i18n="skills-title">Mes Compétences</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${[
            { icon: "fa-code", title: "skill-1-title", desc: "skill-1-desc", level: 90, wrap: "bg-blue-100 text-blue-600" },
            { icon: "fa-desktop", title: "skill-2-title", desc: "skill-2-desc", level: 85, wrap: "bg-green-100 text-green-600" },
            { icon: "fa-mobile-alt", title: "skill-3-title", desc: "skill-3-desc", level: 75, wrap: "bg-red-100 text-red-600" },
            { icon: "fa-tools", title: "skill-4-title", desc: "skill-4-desc", level: 80, wrap: "bg-purple-100 text-purple-600" }
          ].map(s => `
            <div class="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div class="w-16 h-16 mx-auto mb-4 ${s.wrap.split(' ')[0]} rounded-full flex items-center justify-center">
                <i class="fas ${s.icon} text-2xl ${s.wrap.split(' ')[1]}"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2 editable" data-id="${s.title}">—</h3>
              <p class="text-gray-700 mb-4 editable" data-id="${s.desc}">—</p>
              <div class="progress-bar"><div class="progress-fill skill-level" data-level="${s.level}" style="width:0%"></div></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
};

const Experience = {
  render: () => `
    <section id="experiences" class="py-16 px-6 bg-white">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 section-title section-title-center editable" data-id="exp-title" data-i18n="exp-title">Mon Parcours</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-blue-600 pl-4 border-l-4 border-blue-600 experience-section-title">Expériences Professionnelles</h3>
            <div class="timeline-item">
              <h3 class="text-xl font-semibold editable" data-id="exp-1-title" data-i18n="exp-1-title">Développeur Blockchain</h3>
              <p class="text-blue-600 font-semibold editable" data-id="exp-1-company" data-i18n="exp-1-company">KitHub - Branche Gitega</p>
              <p class="text-gray-500 text-sm editable" data-id="exp-1-date" data-i18n="exp-1-date">2022 - Présent</p>
              <p class="text-gray-700 mt-2 editable" data-id="exp-1-desc" data-i18n="exp-1-desc">Développement d'applications blockchain...</p>
            </div>
            <div class="timeline-item">
              <h3 class="text-xl font-semibold editable" data-id="exp-2-title" data-i18n="exp-2-title">Enseignant</h3>
              <p class="text-blue-600 font-semibold editable" data-id="exp-2-company" data-i18n="exp-2-company">Destiny School, Kamenge</p>
              <p class="text-gray-500 text-sm editable" data-id="exp-2-date" data-i18n="exp-2-date">2020 - 2021</p>
              <p class="text-gray-700 mt-2 editable" data-id="exp-2-desc" data-i18n="exp-2-desc">Enseignement à l'école primaire...</p>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-blue-600 pl-4 border-l-4 border-blue-600 experience-section-title">Formations</h3>
            <div class="timeline-item">
              <h3 class="text-xl font-semibold editable" data-id="edu-1-title" data-i18n="edu-1-title">Bac 4 en Génie Logiciel</h3>
              <p class="text-blue-600 font-semibold editable" data-id="edu-1-school" data-i18n="edu-1-school">Département IT</p>
              <p class="text-gray-500 text-sm editable" data-id="edu-1-date" data-i18n="edu-1-date">En cours</p>
              <p class="text-gray-700 mt-2 editable" data-id="edu-1-desc" data-i18n="edu-1-desc">Formation en ingénierie logicielle...</p>
            </div>
            <div class="timeline-item">
              <h3 class="text-xl font-semibold editable" data-id="edu-2-title" data-i18n="edu-2-title">Formations Blockchain</h3>
              <p class="text-blue-600 font-semibold editable" data-id="edu-2-school" data-i18n="edu-2-school">KitHub - Junetech Events</p>
              <p class="text-gray-500 text-sm editable" data-id="edu-2-date" data-i18n="edu-2-date">2022 - Présent</p>
              <p class="text-gray-700 mt-2 editable" data-id="edu-2-desc" data-i18n="edu-2-desc">Participation aux événements...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

const Projects = {
  render: () => `
    <section id="projets" class="py-16 px-6 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 section-title section-title-center editable" data-id="projects-title" data-i18n="projects-title">Mes Projets</h2>
        <div id="projects-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
      </div>
    </section>
  `
};

const Documents = {
  render: () => `
    <section id="documents" class="py-16 px-6 bg-white">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 section-title section-title-center editable" data-id="documents-title" data-i18n="documents-title">Mes Documents</h2>

      <div class="mb-12">
        <div class="upload-container" id="documents-upload-area" role="button" tabindex="0">
          <i class="fas fa-cloud-upload-alt text-4xl text-blue-600 mb-4"></i>
          <h3 class="text-xl font-semibold mb-2 editable" data-id="documents-title" data-i18n="documents-title">Glissez-déposez vos fichiers ici</h3>
          <p class="text-gray-600 mb-4">ou</p>
          <label for="file-upload" class="btn-primary cursor-pointer">
            <i class="fas fa-folder-open mr-2"></i> Parcourir les fichiers
          </label>
          <input type="file" id="file-upload" multiple class="hidden" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md text-center card-hover document-item">
          <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <i class="fas fa-file-pdf text-2xl text-blue-600"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2 editable" data-id="cv-title" data-i18n="cv-title">CV Professionnel</h3>
          <p class="text-gray-700 mb-4 editable" data-id="cv-description" data-i18n="cv-description">Mon curriculum vitae à jour</p>
          <div class="text-center">
            <span class="text-blue-600 font-semibold download-btn" data-doc-type="cv" role="button" tabindex="0">Télécharger (PDF)</span>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center card-hover document-item">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <i class="fas fa-graduation-cap text-2xl text-green-600"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2 editable" data-id="diplomas-title" data-i18n="diplomas-title">Diplômes</h3>
          <p class="text-gray-700 mb-4 editable" data-id="diplomas-description" data-i18n="diplomas-description">Mes diplômes universitaires</p>
          <div class="text-center">
            <span class="text-blue-600 font-semibold download-btn" data-doc-type="diplomas" role="button" tabindex="0">Voir les diplômes</span>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center card-hover document-item">
          <div class="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <i class="fas fa-certificate text-2xl text-purple-600"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2 editable" data-id="certifications-title" data-i18n="certifications-title">Certifications</h3>
          <p class="text-gray-700 mb-4 editable" data-id="certifications-description" data-i18n="certifications-description">Mes certifications professionnelles</p>
          <div class="text-center">
            <span class="text-blue-600 font-semibold download-btn" data-doc-type="certifications" role="button" tabindex="0">Voir les certifications</span>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <h3 class="text-2xl font-semibold mb-6 text-center editable" data-id="other-docs-title">Autres Documents</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-50 p-4 rounded-lg flex items-center justify-between document-item">
            <div class="flex items-center">
              <i class="fas fa-file-word text-blue-600 text-2xl mr-4"></i>
              <div>
                <h4 class="font-semibold editable" data-id="doc-1-title" data-i18n="doc-1-title">Lettre de Motivation</h4>
                <p class="text-gray-600 text-sm editable" data-id="doc-1-desc" data-i18n="doc-1-desc">Modèle personnalisable</p>
              </div>
            </div>
            <span class="text-blue-600 hover:text-blue-800 download-btn" data-doc-type="motivation" role="button" tabindex="0">
              <i class="fas fa-download"></i>
            </span>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg flex items-center justify-between document-item">
            <div class="flex items-center">
              <i class="fas fa-file-powerpoint text-orange-600 text-2xl mr-4"></i>
              <div>
                <h4 class="font-semibold editable" data-id="doc-2-title" data-i18n="doc-2-title">Présentation Portfolio</h4>
                <p class="text-gray-600 text-sm editable" data-id="doc-2-desc" data-i18n="doc-2-desc">Vue d'ensemble de mes compétences</p>
              </div>
            </div>
            <span class="text-blue-600 hover:text-blue-800 download-btn" data-doc-type="portfolio" role="button" tabindex="0">
              <i class="fas fa-download"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
};

const Contact = {
  render: () => `
    <section id="contact" class="py-16 px-6 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 section-title section-title-center editable" data-id="contact-title" data-i18n="contact-title">Contactez-Moi</h2>
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h3 class="text-2xl font-semibold mb-4 text-blue-600 editable" data-id="contact-subtitle" data-i18n="contact-subtitle">Restons en Contact</h3>
            <p class="text-gray-700 mb-6 editable" data-id="contact-description" data-i18n="contact-description">N'hésitez pas à me contacter...</p>
            <div class="mb-6">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4"><i class="fas fa-envelope"></i></div>
                <p class="text-gray-700 editable" data-id="contact-email" data-i18n="contact-email">mandela.fanuel.1@gmail.com</p>
              </div>
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4"><i class="fas fa-phone"></i></div>
                <p class="text-gray-700 editable" data-id="contact-phone" data-i18n="contact-phone">+25768803611</p>
              </div>
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4"><i class="fas fa-map-marker-alt"></i></div>
                <p class="text-gray-700 editable" data-id="contact-location" data-i18n="contact-location">Kinama/Bujumbura, Burundi</p>
              </div>
            </div>
            <div class="flex space-x-4">
              <a href="https://github.com/MandelaFanuel" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/MandelaFanuel2" target="_blank" rel="noopener noreferrer" class="social-icon" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/mandela-fanuel" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/25768803611" target="_blank" rel="noopener noreferrer" class="social-icon" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:mandela.fanuel.1@gmail.com" class="social-icon" title="Email">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://www.facebook.com/MandelaFanuel" target="_blank" rel="noopener noreferrer" class="social-icon" title="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div class="md:w-1/2 md:pl-8">
            <form class="bg-white p-6 rounded-lg shadow-md" id="contact-form" novalidate>
              <div class="floating-label">
                <input type="text" id="name" class="floating-input" placeholder=" " required />
                <label for="name" class="floating-label-text" data-i18n="label_name">Nom Complet</label>
              </div>
              <div class="floating-label">
                <input type="email" id="email" class="floating-input" placeholder=" " required />
                <label for="email" class="floating-label-text" data-i18n="label_email">Adresse Email</label>
              </div>
              <div class="floating-label">
                <input type="text" id="subject" class="floating-input" placeholder=" " required />
                <label for="subject" class="floating-label-text" data-i18n="label_subject">Sujet</label>
              </div>
              <div class="floating-label">
                <textarea id="message" rows="4" class="floating-input" placeholder=" " required></textarea>
                <label for="message" class="floating-label-text" data-i18n="label_message">Message</label>
              </div>
              <button type="submit" class="w-full btn-blue" data-i18n="form_send_message">Envoyer le Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
};

const Footer = {
  render: () => `
    <footer class="bg-gray-800 text-white py-8 px-6">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <p class="editable" data-id="footer-text" data-i18n="footer-text">© 2023 Mandela KASUMBA Fanuel (Fanuel045). Tous droits réservés.</p>
          </div>
          <div class="flex space-x-6">
            <a href="https://github.com/MandelaFanuel" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition duration-300" title="GitHub">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="https://twitter.com/MandelaFanuel2" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition duration-300" title="Twitter">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/mandela-fanuel" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition duration-300" title="LinkedIn">
              <i class="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="https://wa.me/25768803611" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition duration-300" title="WhatsApp">
              <i class="fab fa-whatsapp text-xl"></i>
            </a>
            <a href="mailto:mandela.fanuel.1@gmail.com" class="text-gray-400 hover:text-white transition duration-300" title="Email">
              <i class="fas fa-envelope text-xl"></i>
            </a>
            <a href="https://www.facebook.com/MandelaFanuel" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition duration-300" title="Facebook">
              <i class="fab fa-facebook-f text-xl"></i>
            </a>
          </div>
        </div>
        <div class="mt-6 text-center md:text-left">
          <p class="text-gray-400 text-sm editable" data-id="footer-credits" data-i18n="footer-credits">Développé avec ❤️ en utilisant HTML, CSS et JavaScript</p>
        </div>
      </div>
    </footer>
  `
};

/* ======= APP ======= */
class PortfolioApp {
  constructor() {
    this.components = { Header, Hero, About, Skills, Experience, Projects, Documents, Contact, Footer };
    this.appElement = document.getElementById('app');
    this.isAdmin = false;
    this.projects = [];
    this.documents = [];
    this.currentAction = null;
    this.selectedDocType = null;
    this.currentLanguage = localStorage.getItem('portfolio-language') || 'fr';
    this.handleContactForm = this.handleContactForm.bind(this); // ⬅️ Important!
    this.init();
  }

  // Dans la méthode init() de votre classe PortfolioApp
init() {
  this.renderComponents();
  this.setupEventListeners();
  this.loadSavedData();
  this.loadProjects();
  this.setupScrollAnimations();
  this.animateSkillBars();
  this.ensureProjectImagesClassFix();
  
  // Initialiser la langue
  this.currentLanguage = localStorage.getItem('portfolio-language') || 'fr';
  this.applyLanguage(this.currentLanguage);
  
  // Mettre à jour le titre de la page
  this.updatePageTitle(this.currentLanguage);
}

  renderComponents() {
    const { Header, Hero, About, Skills, Experience, Projects, Documents, Contact, Footer } = this.components;
    const componentsHTML = `
      ${Header.render(this.currentLanguage)}
      ${Hero.render()}
      ${About.render()}
      ${Skills.render()}
      ${Experience.render()}
      ${Projects.render()}
      ${Documents.render()}
      ${Contact.render()}
      ${Footer.render()}
    `;
    this.appElement.innerHTML = componentsHTML;
  }

  /* --------- SÉCURITÉ FRONT: SANITIZE --------- */
  sanitizeHTML(input) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div>${input}</div>`, 'text/html');
    ['script','style','iframe','object','embed','link','meta'].forEach(tag => doc.querySelectorAll(tag).forEach(n => n.remove()));
    doc.querySelectorAll('*').forEach(el => {
      [...el.attributes].forEach(attr => {
        const name = attr.name.toLowerCase();
        if (name.startsWith('on') || name === 'srcdoc') el.removeAttribute(attr.name);
        if ((name === 'href' || name === 'src')) {
          const val = (attr.value || '').trim();
          if (val.startsWith('javascript:') || val.startsWith('data:text/html')) el.removeAttribute(attr.name);
        }
      });
    });
    return doc.body.firstChild ? doc.body.firstChild.innerHTML : '';
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      const is = sel => e.target.matches(sel) || (e.target.closest && e.target.closest(sel));

      if (is('#menu-btn')) {
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.toggle('hidden');
      }

      if (is('#edit-toggle')) { this.currentAction = 'edit-mode'; this.showAdminLogin(); }
      if (is('#save-btn'))  { this.currentAction = 'save-data'; this.showAdminLogin(); }

      if (is('#cancel-btn')) {
        document.body.classList.remove('edit-mode');
        const panel = document.getElementById('admin-panel');
        if (panel) panel.style.display = 'none';
        this.setEditable(false);
        this.loadSavedData();
        this.renderProjects(); // rafraîchir les boutons admin masqués
      }

      if (e.target.closest && e.target.closest('#mobile-menu a')) {
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.add('hidden');
      }

      // Photo de profil
      if (is('.profile-overlay') || is('#upload-profile')) {
        this.currentAction = 'upload-profile';
        this.showAdminLogin();
      }

      // Documents (upload)
      if (is('#documents-upload-area') || is('#upload-docs')) {
        this.currentAction = 'upload-documents';
        this.showAdminLogin();
      }

      // Ajouter projet
      if (is('#add-project')) {
        this.currentAction = 'add-project';
        this.showAdminLogin();
      }

      // Ajouter détails (ouvrir modal avec liste des projets)
      if (is('#add-details')) {
        this.currentAction = 'add-details';
        this.showAdminLogin();
      }

      // Actions sur cartes projet (Edit / Delete / Add detail)
      const editBtn = e.target.closest?.('[data-action="edit-project"]');
      if (editBtn) {
        const idx = parseInt(editBtn.dataset.index, 10);
        if (!isNaN(idx)) this.openProjectEditor(idx);
      }
      const delBtn = e.target.closest?.('[data-action="delete-project"]');
      if (delBtn) {
        const idx = parseInt(delBtn.dataset.index, 10);
        if (!isNaN(idx)) this.deleteProject(idx);
      }
      const addDetailBtn = e.target.closest?.('[data-action="quick-add-detail"]');
      if (addDetailBtn) {
        const idx = parseInt(addDetailBtn.dataset.index, 10);
        if (!isNaN(idx)) this.openAddDetailsModal(idx);
      }

      // Suppression d'un détail individuel
      const delDetailBtn = e.target.closest?.('[data-action="delete-detail"]');
      if (delDetailBtn) {
        const pIdx = parseInt(delDetailBtn.dataset.pIndex, 10);
        const dIdx = parseInt(delDetailBtn.dataset.dIndex, 10);
        if (!isNaN(pIdx) && !isNaN(dIdx)) this.deleteDetail(pIdx, dIdx);
      }

      // Boutons télécharger / docs protégés
      const dlBtn = e.target.closest && e.target.closest('.download-btn');
      if (dlBtn) {
        this.selectedDocType = dlBtn.dataset.docType || null;
        this.currentAction = 'download-document';
        this.showDocumentPasswordModal();
      }
    });

    document.addEventListener('change', (e) => {
      if (e.target.id === 'profile-upload') this.handleProfileImageUpload(e.target.files[0]);
      if (e.target.id === 'file-upload') this.handleDocumentsUpload(e.target.files);
      if (e.target.id === 'project-image-input') this.handleProjectImagePreview(e.target.files[0]);
      
      // Changement de langue
      if (e.target.id === 'language-selector' || e.target.id === 'language-selector-mobile') {
        this.changeLanguage(e.target.value);
      }
    });

    // Drag & Drop documents
    const dz = document.getElementById('documents-upload-area');
    if (dz) {
      dz.addEventListener('dragover', (e) => { e.preventDefault(); dz.classList.add('bg-blue-50','border-blue-500'); });
      dz.addEventListener('dragleave', () => dz.classList.remove('bg-blue-50','border-blue-500'));
      dz.addEventListener('drop', (e) => {
        e.preventDefault(); dz.classList.remove('bg-blue-50','border-blue-500');
        this.currentAction = 'upload-documents';
        this.showAdminLogin();
      });
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactForm();
      });
    }

    // ======= ICI : tous les getElementById "safe" =======
    const elAdminSubmit = document.getElementById('admin-login-submit');
    if (elAdminSubmit) elAdminSubmit.addEventListener('click', () => this.handleAdminLogin());

    const elAdminCancel = document.getElementById('admin-login-cancel');
    if (elAdminCancel) elAdminCancel.addEventListener('click', () => this.hideAdminLogin());

    const adminPwdInput = document.getElementById('admin-password');
    if (adminPwdInput) adminPwdInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') this.handleAdminLogin(); });

    const addProjSubmit = document.getElementById('add-project-submit');
    if (addProjSubmit) addProjSubmit.addEventListener('click', () => this.handleAddProjectSubmit());

    const addProjCancel = document.getElementById('add-project-cancel');
    if (addProjCancel) addProjCancel.addEventListener('click', () => this.hideAddProjectModal());

    const contactClose = document.getElementById('contact-modal-close');
    if (contactClose) contactClose.addEventListener('click', () => this.hideContactModal());

    const docPwdSubmit = document.getElementById('document-password-submit');
    if (docPwdSubmit) docPwdSubmit.addEventListener('click', () => this.handleDocumentPassword());

    const docPwdCancel = document.getElementById('document-password-cancel');
    if (docPwdCancel) docPwdCancel.addEventListener('click', () => this.hideDocumentPasswordModal());

    const docPwdInput = document.getElementById('document-password');
    if (docPwdInput) docPwdInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') this.handleDocumentPassword(); });

    // Modal: Ajouter des détails
    const addDetailsCancel = document.getElementById('add-details-cancel');
    if (addDetailsCancel) addDetailsCancel.addEventListener('click', () => this.hideAddDetailsModal());

    const addDetailsSubmit = document.getElementById('add-details-submit');
    if (addDetailsSubmit) addDetailsSubmit.addEventListener('click', () => this.handleAddDetailsSubmit());
  }

  setEditable(enable) {
    document.querySelectorAll('.editable').forEach(el => {
      el.contentEditable = enable ? "true" : "false";
      if (enable) el.addEventListener('blur', this._onEditableBlur);
      else el.removeEventListener('blur', this._onEditableBlur);
    });
  }
  _onEditableBlur = (e) => {
    const id = e.target.dataset.id;
    if (!id) return;
    const sanitized = this.sanitizeHTML(e.target.innerHTML);
    e.target.innerHTML = sanitized;
  }

  showAdminLogin() {
    const modal = document.getElementById('admin-login-modal');
    if (!modal) return;
    modal.style.display = 'flex'; modal.setAttribute('aria-hidden', 'false');
    const pwd = document.getElementById('admin-password');
    const err = document.getElementById('admin-login-error');
    if (pwd) pwd.value = '';
    if (err) err.classList.add('hidden');
    setTimeout(() => { if (pwd) pwd.focus(); }, 50);
  }
  hideAdminLogin() {
    const modal = document.getElementById('admin-login-modal');
    if (!modal) return;
    modal.style.display = 'none'; modal.setAttribute('aria-hidden', 'true');
  }

  handleAdminLogin() {
    const pwdInput = document.getElementById('admin-password');
    const pwd = pwdInput ? (pwdInput.value || '') : '';
    if (pwd !== ADMIN_PASSWORD) {
      const e = document.getElementById('admin-login-error');
      if (e) e.classList.remove('hidden');
      return;
    }
    switch (this.currentAction) {
      case 'edit-mode':
        this.isAdmin = true;
        document.body.classList.add('edit-mode');
        const panel = document.getElementById('admin-panel');
        if (panel) panel.style.display = 'block';
        this.setEditable(true);
        this.renderProjects(); // montrer les boutons admin
        break;
      case 'save-data':
        this.saveChanges();
        break;
      case 'upload-profile': {
        const el = document.getElementById('profile-upload');
        if (el) el.click();
        break;
      }
      case 'upload-documents': {
        const el = document.getElementById('file-upload');
        if (el) el.click();
        break;
      }
      case 'add-project':
        this.openProjectEditor(); // création
        break;
      case 'add-details':
        this.openAddDetailsModal(); // ouverture avec select
        break;
      default:
        break;
    }
    this.currentAction = null;
    this.hideAdminLogin();
  }

  saveChanges() {
    const data = {};
    document.querySelectorAll('.editable').forEach(el => { const id = el.dataset.id; if (id) data[id] = this.sanitizeHTML(el.innerHTML); });
    const previous = JSON.parse(localStorage.getItem('portfolioData') || '{}');
    localStorage.setItem('portfolioData', JSON.stringify({ ...previous, ...data }));
    localStorage.setItem('projects', JSON.stringify(this.projects || []));
    localStorage.setItem('documentsMeta', JSON.stringify(this.documents || []));
    const toast = document.getElementById('save-notification');
    if (toast) {
      toast.style.display = 'block'; setTimeout(() => { toast.style.display = 'none'; }, 1800);
    }
    document.body.classList.remove('edit-mode');
    const panel = document.getElementById('admin-panel');
    if (panel) panel.style.display = 'none';
    this.setEditable(false);
    this.isAdmin = false;
    this.renderProjects();
  }

  loadSavedData() {
    const saved = JSON.parse(localStorage.getItem('portfolioData') || 'null') || initialData;
    document.querySelectorAll('.editable').forEach(el => { const id = el.dataset.id; if (id && saved[id] !== undefined) el.innerHTML = saved[id]; });
    const profile = localStorage.getItem('profileImage'); 
    if (profile) { const img = document.getElementById('profile-image'); if (img) img.src = profile; }
    this.documents = JSON.parse(localStorage.getItem('documentsMeta') || '[]');
  }

  /* --------- Projets --------- */
  loadProjects() {
    const stored = JSON.parse(localStorage.getItem('projects') || 'null');
    if (stored && Array.isArray(stored)) {
      this.projects = stored;
    } else {
      // Initialisation avec images demandées
      this.projects = [
        {
          title: initialData["project-1-title"],
          desc: initialData["project-1-desc"],
          tech: ["Django","DRF","Blockchain"],
          img: "assets/images/seasky.png", // fourni par toi (orthographe conservée)
          details: []
        },
        {
          title: initialData["project-2-title"],
          desc: initialData["project-2-desc"],
          tech: ["React","Analytics","API"],
          img: "assets/images/medicalchain.png",
          details: []
        },
        {
          title: initialData["project-3-title"],
          desc: initialData["project-3-desc"],
          tech: ["Web3","Smart Contracts"],
          img: "assets/images/event.png",
          details: []
        },
      ];
    }
    this.renderProjects();
  }

  renderProjects() {
    const container = document.getElementById('projects-container'); 
    if (!container) return;
    
    container.innerHTML = '';
    this.projects.forEach((p, index) => {
      const card = document.createElement('div');
      card.className = 'bg-white p-6 rounded-lg shadow-md card-hover';
      
      // Utiliser les traductions pour les titres des boutons admin
      const editTitle = translations[this.currentLanguage]?.['edit_button'] || 'Modifier';
      const deleteTitle = translations[this.currentLanguage]?.['delete_button'] || 'Supprimer';
      const addDetailTitle = translations[this.currentLanguage]?.['add_details_button'] || 'Ajouter les détails';
      const deleteDetailTitle = translations[this.currentLanguage]?.['delete_detail_button'] || 'Supprimer le détail';
      
      const adminButtons = this.isAdmin ? `
        <div class="flex gap-2 mt-4">
          <button class="btn-blue" data-action="edit-project" data-index="${index}" title="${editTitle}">
            <i class="fas fa-pen"></i>
          </button>
          <button class="btn-secondary" data-action="delete-project" data-index="${index}" title="${deleteTitle}">
            <i class="fas fa-trash"></i>
          </button>
          <button class="btn-blue" style="background:#0EA5E9" data-action="quick-add-detail" data-index="${index}" title="${addDetailTitle}">
            <i class="fas fa-list-ul"></i>
          </button>
        </div>
      ` : '';
  
      // Texte pour "Aucun détail" qui doit être traduit
      const noDetailsText = translations[this.currentLanguage]?.['no_details'] || 'Aucun détail pour le moment';
      
      const detailsList = (p.details && p.details.length)
        ? `<div class="mt-4">
            <h4 class="font-semibold mb-2">${translations[this.currentLanguage]?.['project_details'] || 'Détails du projet'}</h4>
            <ul class="list-disc list-inside text-sm text-gray-700">
              ${p.details.map((d, dIdx) => `
                <li class="flex justify-between items-start gap-2">
                  <span>${this.escapeHTML(d)}</span>
                  ${this.isAdmin ? `
                    <button class="text-red-600" data-action="delete-detail" data-p-index="${index}" data-d-index="${dIdx}" title="${deleteDetailTitle}">
                      <i class="fas fa-times"></i>
                    </button>
                  ` : ''}
                </li>
              `).join('')}
            </ul>
          </div>`
        : (this.isAdmin ? `<p class="mt-3 text-sm text-gray-500">${noDetailsText}</p>` : '');
  
      // Ajouter un conteneur cliquable pour l'image
        const imageHtml = p.img ? `
        <div class="relative cursor-pointer group" onclick="portfolioApp.openProjectImage('${this.escapeAttr(p.img)}', '${this.escapeAttr(p.title)}')">
          <img src="${this.escapeAttr(p.img)}" alt="${this.escapeAttr(p.title)}" class="project-image group-hover:opacity-90 transition-opacity">
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
            <i class="fas fa-expand text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl"></i>
          </div>
        </div>
        ` : `
        <div class="project-image" style="display:flex;align-items:center;justify-content:center;background:#EEF2FF;">
          <i class="fas fa-cubes"></i>
        </div>`;
  
      card.innerHTML = `
        ${imageHtml}
        <h3 class="text-xl font-semibold mb-2 mt-4">${this.escapeHTML(p.title)}</h3>
        <p class="text-gray-700 mb-4">${this.escapeHTML(p.desc)}</p>
        <div class="flex flex-wrap gap-2 mb-3">
          <span class="text-xs font-semibold">${translations[this.currentLanguage]?.['project_technologies'] || 'Technologies utilisées'}:</span>
          ${(p.tech || []).map(t => `<span class="text-xs bg-gray-100 border border-gray-200 px-2 py-1 rounded">${this.escapeHTML(t)}</span>`).join('')}
        </div>
        ${detailsList}
        ${adminButtons}
      `;
      container.appendChild(card);
    });
  }
  
  // Ajoutez cette méthode à votre classe PortfolioApp pour gérer l'affichage des images
  openProjectImage(imageUrl, title) {
    // Créer la modale pour afficher l'image en grand
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
      <div class="relative max-w-4xl max-h-full">
        <button class="absolute -top-10 right-0 text-white text-2xl z-10" onclick="this.closest('.fixed').remove()">
          <i class="fas fa-times"></i>
        </button>
        <div class="bg-white p-1 rounded-lg">
          <img src="${imageUrl}" alt="${title}" class="max-w-full max-h-screen object-contain">
        </div>
        <p class="text-white text-center mt-2">${title}</p>
      </div>
    `;
    
    // Fermer la modale en cliquant à l'extérieur de l'image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
    
    // Ajouter la modale au document
    document.body.appendChild(modal);
  }
  


  // Forcer/class fixer pour les images projet (visibles en entier, non renversées)
  ensureProjectImagesClassFix() {
    const style = document.createElement('style');
    style.innerHTML = `
      .project-image{
        width:100%; height:200px; object-fit:cover; border-radius:8px; margin-bottom:1rem;
        image-orientation: from-image; transform:none !important; /* éviter rotations CSS accidentelles */
      }
    `;
    document.head.appendChild(style);
  }

  /* --- Création / Modification Projet --- */
  openProjectEditor(index = null) {
    const modal = document.getElementById('add-project-modal');
    if (!modal) return;

    const idxInput = document.getElementById('project-edit-index');
    const t = document.getElementById('project-title');
    const d = document.getElementById('project-description');
    const te = document.getElementById('project-technologies');
    const pi = document.getElementById('project-image-input');
    const pp = document.getElementById('project-image-preview');
    const imgEl = pp ? pp.querySelector('img') : null;
    const err = document.getElementById('add-project-error');

    if (typeof index === 'number' && this.projects[index]) {
      // Édition
      if (idxInput) idxInput.value = String(index);
      const p = this.projects[index];
      if (t) t.value = p.title || '';
      if (d) d.value = p.desc || '';
      if (te) te.value = (p.tech || []).join(', ');
      if (pi) pi.value = '';
      if (pp && imgEl) {
        if (p.img) { imgEl.src = p.img; pp.classList.remove('hidden'); }
        else { imgEl.src = ''; pp.classList.add('hidden'); }
      }
      if (err) err.classList.add('hidden');
    } else {
      // Création
      if (idxInput) idxInput.value = '';
      if (t) t.value = '';
      if (d) d.value = '';
      if (te) te.value = '';
      if (pi) pi.value = '';
      if (pp) pp.classList.add('hidden');
      if (err) err.classList.add('hidden');
    }

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  }

  hideAddProjectModal() {
    const modal = document.getElementById('add-project-modal');
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }

  handleProjectImagePreview(file) {
    if (!file || !file.type.startsWith('image/')) return;
    if (file.size > 5 * 1024 * 1024) { alert('Image trop lourde (max ~5MB).'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const prev = document.getElementById('project-image-preview');
      if (!prev) return;
      const img = prev.querySelector('img');
      if (img) img.src = reader.result;
      prev.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }

  handleAddProjectSubmit() {
    const idxInput = document.getElementById('project-edit-index');
    const t = document.getElementById('project-title');
    const d = document.getElementById('project-description');
    const te = document.getElementById('project-technologies');
    const prev = document.getElementById('project-image-preview');

    const title = (t && t.value || '').trim();
    const desc = (d && d.value || '').trim();
    const tech = (te && te.value || '').split(',').map(s => s.trim()).filter(Boolean);
    const img = (!prev || prev.classList.contains('hidden')) ? null : ((prev.querySelector('img') || {}).src || null);

    if (!title || !desc) {
      const err = document.getElementById('add-project-error');
      if (err) err.classList.remove('hidden');
      return;
    }

    const idx = idxInput && idxInput.value !== '' ? parseInt(idxInput.value, 10) : null;

    if (typeof idx === 'number' && this.projects[idx]) {
      // mise à jour
      this.projects[idx].title = title;
      this.projects[idx].desc = desc;
      this.projects[idx].tech = tech;
      if (img) this.projects[idx].img = img;
    } else {
      // création
      this.projects.unshift({ title, desc, tech, img, details: [] });
    }

    this.renderProjects();
    this.hideAddProjectModal();
  }

  deleteProject(index) {
    if (!this.isAdmin) return;
    const p = this.projects[index];
    if (!p) return;
    const ok = confirm(`Supprimer le projet "${p.title}" ?`);
    if (!ok) return;
    this.projects.splice(index, 1);
    this.renderProjects();
  }

  /* --- Détails Projet --- */
  openAddDetailsModal(preselectIndex = null) {
    const modal = document.getElementById('add-details-modal');
    if (!modal) return;
    const select = document.getElementById('details-project-select');
    const textarea = document.getElementById('details-text');
    const err = document.getElementById('add-details-error');

    if (select) {
      select.innerHTML = this.projects.map((p, i) => `<option value="${i}">${this.escapeHTML(p.title)}</option>`).join('');
      if (typeof preselectIndex === 'number' && this.projects[preselectIndex]) {
        select.value = String(preselectIndex);
      }
    }
    if (textarea) textarea.value = '';
    if (err) err.classList.add('hidden');

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  }

  hideAddDetailsModal() {
    const modal = document.getElementById('add-details-modal');
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }

  handleAddDetailsSubmit() {
    const select = document.getElementById('details-project-select');
    const textarea = document.getElementById('details-text');
    const err = document.getElementById('add-details-error');

    const idx = select ? parseInt(select.value, 10) : NaN;
    const content = (textarea && textarea.value || '').trim();

    if (!content) {
      if (err) err.classList.remove('hidden');
      return;
    }
    if (isNaN(idx) || !this.projects[idx]) return;

    const safe = this.sanitizeHTML(content);
    if (!Array.isArray(this.projects[idx].details)) this.projects[idx].details = [];
    this.projects[idx].details.push(safe);

    this.renderProjects();
    this.hideAddDetailsModal();
  }

  deleteDetail(projectIndex, detailIndex) {
    if (!this.isAdmin) return;
    const p = this.projects[projectIndex];
    if (!p || !Array.isArray(p.details) || !p.details[detailIndex]) return;
    const ok = confirm(`Supprimer ce détail ?`);
    if (!ok) return;
    p.details.splice(detailIndex, 1);
    this.renderProjects();
  }

  /* --------- Documents & Téléchargements --------- */
  handleDocumentsUpload(fileList) {
    if (!fileList || !fileList.length) return;
    const accepted = [
      'application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'image/png','image/jpeg'
    ];
    const meta = [];
    [...fileList].forEach(f => { if (accepted.includes(f.type)) meta.push({ name: f.name, type: f.type, size: f.size, at: Date.now() }); });
    this.documents = [...(this.documents || []), ...meta];
    localStorage.setItem('documentsMeta', JSON.stringify(this.documents));
    alert('Métadonnées enregistrées localement. Uploade les fichiers vers ton stockage privé (ex: Supabase Storage).');
  }

  showDocumentPasswordModal() {
    const modal = document.getElementById('document-password-modal');
    if (!modal) return;
    const err = document.getElementById('document-password-error');
    const pwd = document.getElementById('document-password');
    if (err) err.classList.add('hidden');
    if (pwd) pwd.value = '';
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => { if (pwd) pwd.focus(); }, 50);
  }
  hideDocumentPasswordModal() {
    const modal = document.getElementById('document-password-modal');
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }

  async handleDocumentPassword() {
    const pwdInput = document.getElementById('document-password');
    const pwd = pwdInput ? (pwdInput.value || '') : '';
    if (!this.selectedDocType) return;
    try {
      const res = await fetch(`${SECURE_API_BASE}/api/sign-url`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pwd, docType: this.selectedDocType })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      if (!data || !data.url) throw new Error('Réponse invalide');
      this.hideDocumentPasswordModal();
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      const e = document.getElementById('document-password-error');
      if (e) e.classList.remove('hidden');
    }
  }

  showContactModal() {
    const m = document.getElementById('contact-modal');
    if (!m) return;
    m.style.display = 'flex';
    m.setAttribute('aria-hidden','false');
  }
  hideContactModal() {
    const m = document.getElementById('contact-modal');
    if (!m) return;
    m.style.display = 'none';
    m.setAttribute('aria-hidden','true');
  }

  /* --------- Image de profil --------- */
  handleProfileImageUpload(file) {
    if (!file) return;
    if (!file.type.startsWith('image/')) { alert('Veuillez choisir une image.'); return; }
    if (file.size > 3 * 1024 * 1024) { alert('Image trop lourde (max ~3MB).'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.getElementById('profile-image');
      if (img) img.src = reader.result;
      localStorage.setItem('profileImage', reader.result);
    };
    reader.readAsDataURL(file);
  }

  /* --------- Contact form --------- */
  async handleContactForm() {
    // Vérifier si EmailJS est chargé et initialisé
    if (typeof emailjs === 'undefined' || typeof emailjs.send !== 'function') {
      console.error('EmailJS non chargé ou non initialisé', emailjs);
      this.showFormMessage('Service temporairement indisponible. Veuillez recharger la page et réessayer.', 'error');
      return;
    }
  
    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const subject = (document.getElementById('subject')?.value || '').trim();
    const message = (document.getElementById('message')?.value || '').trim();
    
    // Validation des champs
    if (!name || !email || !subject || !message) { 
      this.showFormMessage('Veuillez compléter tous les champs.', 'error');
      return; 
    }
  
    if (!this.isValidEmail(email)) {
      this.showFormMessage('Veuillez entrer une adresse email valide.', 'error');
      return;
    }
  
    // Afficher un indicateur de chargement
    this.showFormMessage('Envoi du message en cours...', 'loading');
  
    try {
      console.log('Tentative d\'envoi EmailJS...', {
        service: 'service_f7g8eor',
        template: 'template_9co1lx7'
      });
      
      const response = await emailjs.send(
        'service_f7g8eor',
        'template_9co1lx7',
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          reply_to: email
        }
      );
  
      console.log('Réponse EmailJS:', response);
      
      if (response.status === 200 || response.text === 'OK') {
        // Message personnalisé avec le prénom ou nom
        const displayName = name.split(' ')[0] || name; // Prend le prénom si possible
        this.showFormMessage(`Merci ${displayName} ! Votre message a été envoyé avec succès. Je vous réponds le plus rapidement possible.`, 'success');
        
        // Nettoyer le formulaire seulement après succès
        const form = document.getElementById('contact-form');
        if (form) form.reset();
      } else {
        throw new Error(`Statut de réponse inattendu: ${response.status}`);
      }
      
    } catch (error) {
      console.error('Erreur détaillée EmailJS:', error);
      this.showFormMessage('Désolé, une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.', 'error');
    }
  }
  
  // Ajoutez cette méthode pour afficher les messages dans le formulaire
  showFormMessage(message, type = 'info') {
    // Supprimer les messages précédents
    const existingMessage = document.getElementById('form-message');
    if (existingMessage) {
      existingMessage.remove();
    }
  
    // Créer le nouveau message
    const messageDiv = document.createElement('div');
    messageDiv.id = 'form-message';
    messageDiv.className = `mt-4 p-3 rounded-lg text-center ${
      type === 'success' ? 'bg-green-100 text-green-800 border border-green-400' :
      type === 'error' ? 'bg-red-100 text-red-800 border border-red-400' :
      type === 'loading' ? 'bg-blue-100 text-blue-800 border border-blue-400' :
      'bg-gray-100 text-gray-800 border border-gray-400'
    }`;
    
    messageDiv.innerHTML = type === 'loading' 
      ? `<div class="flex items-center justify-center"><i class="fas fa-spinner fa-spin mr-2"></i> ${message}</div>`
      : message;
  
    // Ajouter le message après le bouton d'envoi
    const submitButton = document.querySelector('#contact-form button[type="submit"]');
    if (submitButton) {
      submitButton.parentNode.appendChild(messageDiv);
    }
  
    // Supprimer automatiquement après 5 secondes pour les messages de succès
    if (type === 'success') {
      setTimeout(() => {
        if (messageDiv.parentNode) {
          messageDiv.remove();
        }
      }, 5000);
    }
  }
  
  // Méthode de validation d'email
  isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  // Dans la méthode changeLanguage()
  changeLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('portfolio-language', lang);
      this.applyLanguage(lang);
      
      // Forcer le re-rendu des composants qui pourraient ne pas avoir été mis à jour
      this.renderProjects();
      
      // Mettre à jour le titre de la page
      this.updatePageTitle(lang);
    }
  }
// Ajouter cette méthode pour mettre à jour les textes des modales
updateModalTexts(lang) {
  const modalElements = document.querySelectorAll('.modal [data-i18n]');
  modalElements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Dans la méthode applyLanguage(), remplacez par ce code complet
applyLanguage(lang) {
  // Mettre à jour tous les textes avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.setAttribute('placeholder', translations[lang][key]);
      } else if (element.hasAttribute('data-original')) {
        // Pour les éléments avec contenu dynamique (comme les boutons de téléchargement)
        const originalText = element.getAttribute('data-original');
        element.textContent = translations[lang][key] || originalText;
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Mettre à jour tous les textes avec data-id (contenus éditables)
  document.querySelectorAll('[data-id]').forEach(element => {
    const key = element.getAttribute('data-id');
    if (initialData[key] && translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    } else if (initialData[key]) {
      element.textContent = initialData[key];
    }
  });

  // Mettre à jour les sélecteurs de langue
  const langSelectors = document.querySelectorAll('#language-selector, #language-selector-mobile');
  langSelectors.forEach(selector => {
    if (selector) selector.value = lang;
  });
  
  // Mettre à jour les textes des projets
  this.updateProjectsLanguage(lang);
  
  // Mettre à jour les attributs alt des images
  this.updateImageAlts(lang);
}

// Ajoutez ces nouvelles méthodes à votre classe PortfolioApp
updateProjectsLanguage(lang) {
  // Mettre à jour les titres et descriptions des projets
  const projects = JSON.parse(localStorage.getItem('projects') || '[]');
  const projectElements = document.querySelectorAll('#projects-container > div');
  
  projectElements.forEach((projectEl, index) => {
    if (projects[index]) {
      const titleEl = projectEl.querySelector('h3');
      const descEl = projectEl.querySelector('p.text-gray-700');
      
      if (titleEl && projects[index].title) {
        titleEl.textContent = projects[index].title;
      }
      
      if (descEl && projects[index].desc) {
        descEl.textContent = projects[index].desc;
      }
    }
  });
}

updateImageAlts(lang) {
  // Mettre à jour les textes alternatifs des images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.alt) {
      const altKey = `alt-${img.src.split('/').pop().split('.')[0]}`;
      if (translations[lang] && translations[lang][altKey]) {
        img.alt = translations[lang][altKey];
      }
    }
  });
}

// Modifiez également la méthode changeLanguage()
changeLanguage(lang) {
  if (translations[lang]) {
    this.currentLanguage = lang;
    localStorage.setItem('portfolio-language', lang);
    this.applyLanguage(lang);
    
    // Forcer le re-rendu des composants qui pourraient ne pas avoir été mis à jour
    this.renderProjects();
    
    // Mettre à jour le titre de la page
    this.updatePageTitle(lang);
  }
}

// Ajoutez cette méthode pour mettre à jour le titre de l'onglet
updatePageTitle(lang) {
  const titleElement = document.querySelector('title');
  if (titleElement) {
    if (lang === 'en') {
      titleElement.textContent = "Portfolio | Mandela KASUMBA Fanuel (Fanuel045) - Full Stack & Web applications Developer";
    } else {
      titleElement.textContent = "Portfolio | Mandela KASUMBA Fanuel (Fanuel045) - Développeur Web Full Stack ";
    }
  }
}

  /* --------- Animations --------- */
  setupScrollAnimations() {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.classList.add('section-hidden'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          entry.target.classList.remove('section-hidden');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(s => {
      const rect = s.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
      if (inView) {
        s.classList.add('section-visible');
        s.classList.remove('section-hidden');
      } else {
        observer.observe(s);
      }
    });
  }

  animateSkillBars() {
    const bars = document.querySelectorAll('.skill-level');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const lvl = en.target.getAttribute('data-level') || '0';
          // Ajouter une animation fluide avec transition CSS
          en.target.style.transition = 'width 1.5s ease-in-out';
          requestAnimationFrame(() => {
            en.target.style.width = `${Math.min(100, Math.max(0, parseInt(lvl, 10)))}%`;
          });
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.4 });
    
    bars.forEach(b => {
      // Initialiser la largeur à 0% pour l'animation
      b.style.width = '0%';
      obs.observe(b);
    });
  }

  /* --------- Utils --------- */
  escapeHTML(str) { 
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); 
  }
  
  escapeAttr(str) { 
    if (!str) return '';
    return this.escapeHTML(str); 
  }

  /* --------- Gestion du rechargement de la page --------- */
  handlePageReload() {
    // Sauvegarder l'état actuel avant rechargement
    window.addEventListener('beforeunload', () => {
      if (this.isAdmin) {
        localStorage.setItem('adminMode', 'true');
      }
    });

    // Restaurer l'état après rechargement
    window.addEventListener('load', () => {
      const wasAdmin = localStorage.getItem('adminMode') === 'true';
      if (wasAdmin) {
        this.currentAction = 'edit-mode';
        this.showAdminLogin();
        localStorage.removeItem('adminMode');
      }
    });
  }

  /* --------- Initialisation des tooltips --------- */
  initTooltips() {
    // Ajouter des tooltips pour les boutons d'administration
    const tooltipElements = document.querySelectorAll('[title]');
    tooltipElements.forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        const title = e.target.getAttribute('title');
        if (title) {
          const tooltip = document.createElement('div');
          tooltip.className = 'tooltip';
          tooltip.textContent = title;
          tooltip.style.position = 'absolute';
          tooltip.style.background = 'rgba(0,0,0,0.8)';
          tooltip.style.color = 'white';
          tooltip.style.padding = '5px 10px';
          tooltip.style.borderRadius = '4px';
          tooltip.style.fontSize = '12px';
          tooltip.style.zIndex = '1000';
          tooltip.style.pointerEvents = 'none';
          
          document.body.appendChild(tooltip);
          
          const rect = e.target.getBoundingClientRect();
          tooltip.style.top = `${rect.top - 30}px`;
          tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
          
          e.target.setAttribute('data-tooltip', tooltip);
        }
      });
      
      el.addEventListener('mouseleave', (e) => {
        const tooltip = e.target.getAttribute('data-tooltip');
        if (tooltip) {
          document.body.removeChild(tooltip);
          e.target.removeAttribute('data-tooltip');
        }
      });
    });
  }

  /* --------- Gestion des erreurs --------- */
  handleErrors() {
    window.addEventListener('error', (e) => {
      console.error('Erreur capturée:', e.error);
      // Vous pourriez ajouter ici un système de logging des erreurs
    });

    window.addEventListener('unhandledrejection', (e) => {
      console.error('Promesse rejetée non gérée:', e.reason);
      e.preventDefault();
    });
  }


  // Ajoutez cette méthode à votre classe PortfolioApp pour gérer les labels
updateLabels(lang) {
  // Mettre à jour les labels dans la section about
  const labelElements = document.querySelectorAll('.about-info-label');
  labelElements.forEach(element => {
    const labelKey = element.getAttribute('data-i18n-label');
    if (translations[lang] && translations[lang][labelKey]) {
      element.textContent = translations[lang][labelKey] + ':';
    }
  });
  
  // Mettre à jour les labels du formulaire de contact
  const contactLabels = document.querySelectorAll('.floating-label-text');
  contactLabels.forEach(label => {
    const forAttr = label.getAttribute('for');
    if (forAttr) {
      const labelKey = `label_${forAttr}`;
      if (translations[lang] && translations[lang][labelKey]) {
        label.textContent = translations[lang][labelKey];
      }
    }
  });
  
  // Mettre à jour les titres des sections expériences
  const expTitles = document.querySelectorAll('.experience-section-title');
  if (expTitles.length >= 2) {
    if (translations[lang] && translations[lang]['title_experiences']) {
      expTitles[0].textContent = translations[lang]['title_experiences'];
    }
    if (translations[lang] && translations[lang]['title_education']) {
      expTitles[1].textContent = translations[lang]['title_education'];
    }
  }
  
  // Mettre à jour les boutons
  const contactButtons = document.querySelectorAll('.btn-contact');
  contactButtons.forEach(button => {
    if (translations[lang] && translations[lang]['btn_contact_me']) {
      button.textContent = translations[lang]['btn_contact_me'];
    }
  });
  
  const documentButtons = document.querySelectorAll('.btn-documents');
  documentButtons.forEach(button => {
    if (translations[lang] && translations[lang]['btn_view_documents']) {
      button.textContent = translations[lang]['btn_view_documents'];
    }
  });
  
  // Mettre à jour le bouton d'envoi du formulaire
  const submitButton = document.querySelector('#contact-form button[type="submit"]');
  if (submitButton && translations[lang] && translations[lang]['form_send_message']) {
    submitButton.textContent = translations[lang]['form_send_message'];
  }
}

// Modifiez votre méthode applyLanguage pour inclure l'appel à updateLabels
applyLanguage(lang) {
  // Mettre à jour tous les textes avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.setAttribute('placeholder', translations[lang][key]);
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Mettre à jour tous les textes avec data-id (contenus éditables)
  document.querySelectorAll('[data-id]').forEach(element => {
    const key = element.getAttribute('data-id');
    if (initialData[key] && translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    } else if (initialData[key]) {
      element.textContent = initialData[key];
    }
  });

  // Mettre à jour les labels
  this.updateLabels(lang);
  
  // Mettre à jour les textes des projets
  this.updateProjectsLanguage(lang);
  
  // Mettre à jour les attributs alt des images
  this.updateImageAlts(lang);
  
  // Mettre à jour le titre de la page
  this.updatePageTitle(lang);
}
}

// Instanciation
const app = new PortfolioApp();

// Exposer l'instance globalement pour le débogage (optionnel)
window.portfolioApp = app;