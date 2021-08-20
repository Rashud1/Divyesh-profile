import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TopNavBar } from "../header/Navbar";

import premImg from "../../assets/img/prem-img.png";

import "./hero.style.css";
import { Footer } from "../footer/Footer";

export const Hero = () => {
	return (
		<>
			<div className="hero">
				<TopNavBar />

				<Container>
					<Row>
						<Col md="6" className=" order-md-2">
							<div className="profile-img">
								<img src={premImg} width="100%" alt="my" />
							</div>
						</Col>
						<Col md="6" className=" order-md-1">
							<div className="info mt-5 pt-5">
								<h1>Hi I'm Prem Acharya</h1>
								<p>
									I'm a full stack developer, passionate about creating
									something form nothing. Love teaching coding!!
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
};
