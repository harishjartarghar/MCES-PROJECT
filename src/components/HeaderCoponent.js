import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
            
import {NavLink} from 'react-router-dom';
class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);
    event.preventDefault();

}

  render() {
    return(
      <div>
          <Navbar dark expand="md">
              <div className="container">
                  <NavbarToggler onClick={this.toggleNav} />
                  <NavbarBrand className="mr-auto" href="/"><b>ANIMAL CARE</b></NavbarBrand>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                      <Nav navbar>
                      <NavItem>
                          <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                      </NavItem>
                      </Nav>
                      
                  </Collapse>

              </div>
             
          </Navbar>
          
          
          
      </div>
  )
  }
}

export default Header;