import React, { useEffect } from 'react';
import { useForm } from "react-hook-form"; 
import { useNavigate } from 'react-router-dom';
import { authentification } from '../Securite';

export default function accueil() {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const reader = new FileReader();
    reader.readAsDataURL(data.photo[0]);
    reader.onloadend = () => {
      data.photoUrl = reader.result;
      navigate('/cv', { state: data });
    };
  };

  return (
    <div className='cv-form'>
      <h1>Créer un CV</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nom">Nom</label>
        <input type="text" id="nom" {...register("nom", { required: "Entrez votre nom" })} />
        {errors.nom && <p>{errors.nom.message}</p>}

        <label htmlFor="prenom">Prénom</label>
        <input type="text" id="prenom" {...register("prenom", { required: "Entrez votre prénom" })} />
        {errors.prenom && <p>{errors.prenom.message}</p>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email", { required: "Entrez votre email" })} />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="telephone">Téléphone</label>
        <input type="tel" id="telephone" {...register("telephone", { required: "Entrez votre numéro de téléphone" })} />
        {errors.telephone && <p>{errors.telephone.message}</p>}

        <label htmlFor="photo">Photo</label>
        <input type="file" id="photo" accept="image/*" {...register("photo", { required: "Ajoutez une photo" })} />
        {errors.photo && <p>{errors.photo.message}</p>}

        <label htmlFor="experience">Expérience professionnelle</label>
        <textarea id="experience" {...register("experience", { required: "Entrez vos expériences professionnelles" })}></textarea>
        {errors.experience && <p>{errors.experience.message}</p>}

        <label htmlFor="competences">Compétences</label>
        <textarea id="competences" {...register("competences", { required: "Entrez vos compétences" })}></textarea>
        {errors.competences && <p>{errors.competences.message}</p>}

        <label htmlFor="education">Éducation</label>
        <textarea id="education" {...register("education", { required: "Entrez vos diplômes" })}></textarea>
        {errors.education && <p>{errors.education.message}</p>}

        <button type="submit">Créer CV</button>
      </form>
    </div>
  );
}
