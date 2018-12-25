import React from "react";

import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Block=()=>{
return <div className="m-block">
<div className="m-block-header">PAR CHEQUE OU EN ESPECE</div>
<div className="m-block-body">Allez à l'agence la plus proche de la Banque Zitouna et donnez :
    <ul>
        <li>
            Un chéque au nom de <span className="m-gras">l'assosiation Badr</span>
        </li>
        <li>
           De l'argent en espèce par versement direct
        </li>
        </ul> 
        <div className="m-gras">Utilisez le RIB ci-dessous</div>
        
        </div>
</div>
}


const Block2=()=>{
    return <div className="m-block">
    <div className="m-block-header">PAR VIREMENT BANCAIRE</div>
    <div className="m-block-body2">
    Emettez un virement bancaire depuis votre agence bancaire ou par internet
       
            <div className="m-gras">Utilisez le RIB ci-dessous</div>
            
            </div>
    </div>
    }




    const BlockLarge=()=>{
        return <div className="m-blcok m-block-large">
        <div className="m-block-header">RELEVE D'IDENTITE BANCAIRE</div>
        <div className="m-block-body2 center ">
        <div className="m-block-large-body">
            <div className="m-block-attribut">
                <div>Nom complet</div>
                <div>Banque</div>
                <div>Agence</div>
                <div>RIB</div>
                <div>IBAN</div>
                <div>Code BIC</div>
            </div>

            <div className="m-block-valeur">
                <div>ASSO BADR</div>
                <div>Banque Zitouna</div>
                <div>Centrale</div>
                <div>25 000 000 0000348627 76</div>
                <div>TN59 25 000 000 0000348627 76</div>
                <div>BZITTNTTXXX</div>
            </div>
          </div>
            <Link className="m-bouton-center" to="https://webmail.associationbadr.com/ftp/RIB_BADR.pdf">
          <input
            className="m-bouton-projet m-bouton-projet2"
            type="button"
            value="Plus de détails"
           
          />
      </Link>
        
                </div>
        </div>
        }
    

const BlockLong=()=>{ 
    return <div className="m-blcok m-block-long">
<div className="m-block-header">PAR VIREMENT BANCAIRE</div>
<div className="m-block-body2">
Emettez un virement bancaire depuis votre agence bancaire ou par internet
   
        <div className="m-gras">Utilisez le RIB ci-dessous</div>
        
        </div>
</div>
}

const FaireUnDon=()=>{
    return <FaireUnDonStyle> 
        <div className="don">  

        <div >
        <div className="m-left">
        <Block />
        <Block2 />
        </div>
        <BlockLarge />
        </div>
        <div className="m-rigth">
        <BlockLong />
        </div>
        </div>

        
    </FaireUnDonStyle>
}


const FaireUnDonStyle = styled.div`
.don{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    widht:100%;
    margin:auto;
    max-width:1200px;
   
   
}
.m-left{
    display:flex;
    
    width:700px;
    flex-grow: 1;
    justify-content:space-between;
   
}
.m-bouton-center{
    margin: 20%;
}
.m-don-titre{
 color:var(--second-main)
}
.m-block-body{
  padding:0 5px;
    text-align: justify;
  text-justify: inter-word;
}
.m-block-large-body{
    display:flex;
    width:80%;
    justify-content:space-between;
}
.m-block-body2{
    
    padding:20px 20px;
    text-align: justify;
  text-justify: inter-word;
    
  }

.m-gras{
    font-weight: bold;
}

.m-block{
    border: 1px solid #D0D0D0;
    width: 300px;
    height: 310px;
  
}
.m-block-large{
    border: 1px solid #D0D0D0;
    width: 700px;
    height: 310px;

}
.m-block-header{
    font-weight: bold;
    background-color: var(--main);
    color: #fff;
    text-align: center;
    height: 50px;
    padding:15px;
}

.m-block-long{
    height:620px;
    border: 1px solid #D0D0D0;
    width:400px;
}

@media screen and (max-width: 700px) {
    .m-block-large{
        width:100%

    }

    .m-block-large{
        border: 1px solid #D0D0D0;
        width: 100%;
        height: auto;
    }
    .m-left{
        width:100%
    }
    .m-block-long{
        width:100%

    }
    
  }

`

export default FaireUnDon