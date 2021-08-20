import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import "./navbar.style.css";
export const TopNavBar = () => {
	return (
		<Navbar collapseOnSelect expand="md">
			<Container>
				<Link to="/">
					<img src={logo} alt="" width="120px" />
				</Link>
				{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<i class="fas fa-bars"></i>
				</Navbar.Toggle>

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto fs-2 fw-bolder">
						{/* <Link to="/projects">Projects</Link> */}
						<LinkContainer to="/skills">
							<Nav.Link>Skills</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/projects">
							<Nav.Link>Projects</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about-me">
							<Nav.Link>About Me</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
						{/* <Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
