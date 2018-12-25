
import React from "react";
import Projet from "./Projet.js";
import axios from 'axios';
import "./projet.css";
import styled from 'styled-components'



export default class ProjetList extends React.Component {
  state = {
    projets: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/projet/')
      .then(res => {
        const projets = res.data;
        this.setState({ projets });
        console.log(projets)
      })
  }

  render() {
    return (
      <ListeStyle>
      <div className="m-liste">
        { this.state.projets.map((el, i) =>
        i == this.state.projets.length - 1 ? (
          <Projet
            titre={el.titre}
            description={el.mini_description}
            etat={el.etat}
            image={el.image}
            id={el.id}
          />
        ) : (
          <div>
            <Projet
              titre={el.titre}
              description={el.mini_description}
              etat={el.etat}
              image={el.image}
              id={el.id}
            />
            <hr className="line" />
          </div>
        )
      )}
     </div>
     </ListeStyle>
    )
  }
}

const ListeStyle = styled.div`
.m-liste{
  margin:20px 0;
}


`