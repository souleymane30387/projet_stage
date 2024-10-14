import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Cv() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/accueil');
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce CV ?");
    if (confirmDelete) {
      navigate('/');
    }
  };

  // Si `state` est nul ou indéfini, afficher un message d'erreur
  if (!state) {
    return (
      <div className="cv-view">
        <h1>Erreur</h1>
        <p>Les données du CV ne sont pas disponibles.</p>
        <button onClick={() => navigate('/accueil')}>Retour à l'accueil</button>
      </div>
    );
  }

  return (
    <div className="cv-view">
      <h1>Mon CV</h1>
      <div className="cv-container">
        {state.photoUrl ? (
          <img src={state.photoUrl} alt="Photo" className="cv-photo" />
        ) : (
          <p>Aucune photo disponible</p>
        )}
        <h2>{state.prenom} {state.nom}</h2>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Téléphone:</strong> {state.telephone}</p>
        <h3>Expérience professionnelle</h3>
        <p>{state.experience}</p>
        <h3>Compétences</h3>
        <p>{state.competences}</p>
        <h3>Éducation</h3>
        <p>{state.education}</p>

        <div className="cv-actions">
          <button onClick={handleEdit}>Modifier</button>
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      </div>
    </div>
  );
}
