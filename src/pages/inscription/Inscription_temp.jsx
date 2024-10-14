import { Stack } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form"; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Inscription.css" 


export default function inscription() {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if(data.password !== data.passwordConfirm){
      alert("les mots de pass sont différents!");
    }else{
      axios.get(`http://localhost:5000/utilisateurs?mail=${data.mail} `).then((res) =>{
        if(res.data.length > 0) {
          alert("Un compte existe déjà avec cette adresse mail")
        }else{
          axios.post("http://localhost:5000/utilisateurs ", data).then((res) => {
            console.log(res);
            alert("inscription réussie");
            navigate("/connexion");
          }).catch((err) => {
              console.log(err);
              alert("Une erreur est survenue");        
          })
        }
      });
    }
  }

  return (
    <div className='tout'>
      
      <div className='formulaire'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="titre">
            <h1>INSCRIPTION</h1>
          </div>
          <div className='form'>
            <label htmlFor="mailUtilisateurs">Adresse mail</label>
            <input
              type="email"
              id="mail"
              name="mail"
              placeholder="Entrez votre mail"
              {...register("mail", { required: "Entrez votre mail", 
                pattern:"/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
              })}
            />
            <br />
            {errors.mail && <p>{errors.mail.message}</p>}
            
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              {...register("password", { required: "Entrez votre mot de passe" ,
                minLength: { value: 6 , message:"Veuillez saisir un mot de passe de plus de 6 caractères "}
              })}
            />
            <br />
            {errors.password && <p>{errors.password.message}</p>}

            <label htmlFor="passwordConfirm">Confirmation du mot de passe</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Confirmez votre mot de passe"
              {...register("passwordConfirm", { required: "Veuillez saisir le même mot de passe" })}
            />
            <br />
            {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
              <div className='bouton'>
                <button type="submit">Inscription</button>
             </div>
          </div>
          <div>
            <h4>
              Déjà inscrit ? <a href="/connexion" className='seconec'>Se connecter</a>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
}
