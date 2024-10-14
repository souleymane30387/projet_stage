import axios from 'axios';

export const authentification = async () => {
  try {
    const response = await axios.get('http://localhost:5000/utilisateurs');
    
    const utilisateur = response.data.find(user => user.isLoggedIn === true);
    
    return !!utilisateur;
  } catch (error) {
    console.error("Erreur lors de la vérification de l'authentification :", error);
    return false; // En cas d'erreur, on considère que l'utilisateur n'est pas authentifié
  }
};
