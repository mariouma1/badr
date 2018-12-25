import React from "react";
import Projet from "./Projet.js";
import axios from 'axios';
import "./projet.css";
import "react-quill/dist/quill.snow.css";

import "./detail.css"

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         projet:{}
        };
      }

  componentDidMount() {
    axios.get('http://localhost:8080/projet/'+this.props.match.params.id)
      .then(res => {
        const projet = res.data;
        this.setState({ projet });
        console.log(projet)
      })
  }
  createMarkup=() =>{
    return {__html:  this.state.projet.long_description};
  }
  render() {
    return (<div className="meriem-detail" dangerouslySetInnerHTML={{__html: this.state.projet.long_description}} />
      
     
    )
  }
}

