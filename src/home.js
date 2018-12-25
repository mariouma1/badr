import React from "react";
import Accueil from './Components/accueil';
import ProjetList from './Liste'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Accueil/>
                <ProjetList />
            </div>
        )
        }
}
