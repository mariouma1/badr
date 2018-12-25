import React from 'react'
import StatisticsBar from './statisticsBar'
import { Button } from 'reactstrap';
import Header from './header'
import styled from 'styled-components'
import fond from '../images/fond1.png'
import logo from '../images/logoText.png'
import Liste from '../Liste'

const color={
  title:"white",
  subject:"white",
  button:"#1da1f2"
}

class Accueil extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return(
        <HomeStyle>
          <div >
        <div class='a-container'>
          <div className='home'>
            <Header/>
            <div className="home-project">
              <div className="home-logo"><img src={logo} alt="badr-logo"/></div>
              <div>
                  <div className="title"><h1>Dar Khadija</h1></div>
                  <div className="subject"><p>Projet de construction de maison pour Khadija et sa famille</p></div>
              </div>
              <div className="div-donation-button"><Button color="primary" className="donation-button"><span>FAIRE UN DON</span></Button></div>
            </div>
          </div>
          <StatisticsBar/>
        </div>
        <Liste/>
        </div>
        </HomeStyle>
        
    )
    }  
  }

  const HomeStyle = styled.div`
  .a-container{
    margin:auto;
    max-width:1200px;
  }
  .home{
    background:url("${fond}");
    height:650px;
    background-size: cover;
    position:relative;
  }
  .home-project{
    width:35%;
    position:absolute;
    left:80%;
    top:50%;
    transform:translate(-50%, -50%);
    border: 2px solid red;
  }
  .home-logo{
    display:flex;
    justify-content:center;
    margin-bottom:30px;
  }
  .home-logo img{
    height:80px;
    width:160px;
  }
  .div-donation-button{
    display:flex;
    justify-content:center;
    margin-top:30px;
  }
  .donation-button{
    height:60px;
    width:180px;
    background-color:${color.button};
    font-size:16px;
    font-weight:bold;
  }
  .title{
    color:${color.title}
    text-align:center;
    display:flex;
    justify-content:center;
    font-size:30px;
    font-weight:800;
  }
  .subject{
    font-size:24px;
    color:${color.subject}
    text-align:center;
    display:flex;
    justify-content:center;
    border-top:2px solid white;
  }
  @media(max-width:767px){
    .home{
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
    }
    .home-project{
    width:100%;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    }
  }
  `
  
  export default Accueil