import React from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,} from 'reactstrap';
import styled from 'styled-components'
import logo from '../images/logo.png'
import {Facebook,Twitter,Blogger,Youtube,Phone,Envelope} from './iconsvg'

let color = {
    background:"green",
    text:"white",
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (<HeaderStyle>
      <div className='a-container header'>
        <div className='contact'>
            <div className='div-contact'>
                <div className='contact'><Envelope/><a className="contact-link" href="#"><span>contact@associationbadr.com</span></a></div>
                <div  className='contact'><Phone/><a className="contact-link" href="#"><span>+216 23 94 06 06</span></a></div>
            </div>
            <div className='div-contact'>
                <div><a className="contact-link" href="#">> Connexion</a></div>
                <div><a className="contact-link" href="#">+ Devenir un membre</a></div>
                <div className='div-social'>
                    <Facebook/>
                    <Twitter/>
                    <Youtube/>
                    <Blogger/>
                </div>
            </div>
        </div>
        <Navbar  className='nav-bar' light expand="md">
          <NavbarBrand href="#"><img src={logo} alt="badr-logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className='nav'>
                <NavItem className='nav-item'>
                    <NavLink className='nav-link' href="#">QUI SOMMES NOUS?</NavLink>
                </NavItem>
                <NavItem className='nav-item'>
                    <NavLink className='nav-link'  href="#">VOS PROJETS</NavLink>
                </NavItem>
                <NavItem className='nav-item'>
                    <NavLink className='nav-link'  href="#">L'EQUIPE</NavLink>
                </NavItem>
                <NavItem className='nav-item'>
                    <NavLink className='nav-link'  href="#">FAIRE UN DON</NavLink>
                </NavItem>
                <NavItem className='nav-item'>
                    <NavLink className='nav-link'  href="#">CONTACT</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </HeaderStyle>
    );
  }
}

const HeaderStyle = styled.div`
.a-container{
    margin:auto;
    max-width:1200px;
  }
.header{
    background-color:${color.background};
    opacity:0.7;
}

.contact{
    display:flex;
    justify-content:space-between;
}

.div-contact{
    display:flex;
    margin:10px 0 ;
    flex-wrap:wrap;
}

.contact-link{
    color:${color.text};
    font-size:16px;
}

.div-social{
    display:flex;
}

img{
    width:42px;
    height:30px;
}
.nav-bar
{
    background-color:${color.background};
    border-top:2px solid ${color.text}
}
.nav{

    width:100%;
    display:flex;
    justify-content:space-between;
}
.nav-item{
    display:flex;
    justify-content:center;
    align-items:center;
}
.nav-link{
    color:${color.text};
    font-size:16px;
}
`