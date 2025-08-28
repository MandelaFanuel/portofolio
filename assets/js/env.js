// portofolio/assets/js/env.js
const ENV = {
    ADMIN_PASSWORD: "Lishan414141n",
    API_BASE_URL: window.location.hostname === 'localhost' 
      ? "http://localhost:3000/api" 
      : "https://fanuel045-api.vercel.app"
  };
  
  // Export pour utilisation globale
  window.ENV_CONFIG = ENV;