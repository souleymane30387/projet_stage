import { Stack } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form"; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Connexion.css"



export default function connexion() {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    axios.get(`http://localhost:5000/utilisateurs?mail=${data.mail}&password=${data.password} `)
    .then (res => {
      if (res.data.length > 0) {
        localStorage.setItem("utilisateurs",JSON.stringify(res.data[0]));
        alert("Connexion réussie");
        navigate("/accueil");
      } else {
          alert("les identifiants sont incorrects");
        }
    }) 
  }  

  return (
    <div className='tou'>

      <div className='formulair'>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="titr">
        <h1>CONNEXION</h1>
      </div>

          <div className='for'>
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

              <div className='bouto'>
                <button type="submit">Connexion</button>
              </div>
            
          </div>

          <div>
            <h4> pas de compte?
            <a href="/"> Inscrivez vous!</a>
            </h4>

          </div>

        </form>
      </div>
    </div>
  );
}
