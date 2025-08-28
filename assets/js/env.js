//  Créer le fichier env.js dans le bon dossier
cat > assets/js/env.js << 'EOL'
// NE JAMAIS COMMITTER CE FICHIER - Configuration sécurisée
const ENV = {
  ADMIN_PASSWORD: "Lishan414141n",
  API_BASE_URL: window.location.hostname === 'localhost' 
    ? "http://localhost:3000/api" 
    : "https://portfolio-api.vercel.app"
};

window.ENV_CONFIG = ENV;
EOL