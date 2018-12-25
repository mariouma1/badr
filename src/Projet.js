import React from "react";
import "./projet.css";
import {Link} from 'react-router-dom'

const Projet = props => {
  return (
    <div className="m-projet">
      <div className="m-description-projet">
        <h1 className="m-titre">{props.titre}</h1>
        <p className="m-paragraphe-projet">{props.description}</p>

        <p >
         <span className="bold"> Etat: </span><span className="m-start m-etat"> {props.etat}</span>
          </p>
        <div className="m-start m-boutons-projet">
          <input className="m-bouton-projet" type="button" value="Partager" />
          <Link to={'/projet_detail/'+props.id}>
          <input
            className="m-bouton-projet"
            type="button"
            value="Plus de détails"
           
          />
      </Link>
         
          {props.etat=="En cours" ? 
          <input
            className="m-bouton-projet m-bouton-projet2 "
            type="button"
            value="Faire un don"
          />: ""}
        </div>
        <div className="m-vide" />
      </div>
      <div
        className="m-image-projet"
        style={{
          backgroundImage: "url(" + props.image + ")"
        }}
      />
    </div>
  );
};

export default Projet;
