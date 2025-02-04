import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


class AppNavBar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/"></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <img
                            alt=""
                            src={require("./ourLogo.png")}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="m-auto" navbar>
                                <NavItem className="ml-5 mr-5">
                                    <NavLink href="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem className="ml-5 mr-5">
                                    <NavLink href="/mentoring">
                                        Mentoring
                                    </NavLink>
                                </NavItem>
                                <NavItem className="ml-5 mr-5">
                                    <NavLink href="/biographies">
                                        Biographies
                                    </NavLink>
                                </NavItem>
                                <NavItem className="ml-5 mr-5">
                                    <NavLink href="/resources">
                                        Resources
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavBar;