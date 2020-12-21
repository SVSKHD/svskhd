import React, { useState } from 'react';
import { Collapse, Navbar, Button, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {FaEllipsisV} from "react-icons/fa"


const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="NAV" dark>
        <NavbarBrand href="/" className="mr-auto">Resume</NavbarBrand>
        <Button size="sm" outline color="light" onClick={toggleNavbar} className="mr-2"><FaEllipsisV size={22}/></Button>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Projects"><b>Projetcs</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=""><b>Contact us</b></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;


