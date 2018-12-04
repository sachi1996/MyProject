import React from 'react';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class MainNavigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}

render() {
  const container = {height: 15}
    return(
      <div>
        <Router>
        <Navbar color="mdb-color darken-3" dark expand="md" scrolling fixed="top" height="50px">
          <NavbarBrand href="/">
              <Fa icon="pastafarianism" />
              <strong>Creative Spark</strong>
          </NavbarBrand>
          <NavbarToggler onClick={ this.onClick } />
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav right>
                <NavItem>
                  <NavLink to="#"><Fa icon="bell" /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/"><Fa icon="home" /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/lo">About us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="Register">Register</NavLink>
                </NavItem>
             </NavbarNav>

          </Collapse>
        </Navbar>
        </Router>
        <Container style={container} className="text-center mt-5">
            <br/>
        </Container>
      </div>
    );
  }
}

export default MainNavigation;
