import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title } from "../../section-title/Title";
import premImg from "../../../assets/img/prem-img.png";
import "./aboutMe.style.css";

export const AboutMe = () => {
	return (
		<Container fluid className="about-me">
			<Row className="pt-5">
				<Col>
					<Title title="About Me" />
				</Col>
			</Row>
			<Row className="py-5 mt-3">
				<Col md="6">
					<img src={premImg} width="100%" alt="calculator" />
				</Col>
				<Col md="6">
					<div className="py-4">
						<p>
							My name is ...This project will help your manage your time. Lorem
							ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
							consequatur atque, provident obcaecati modi esse!
						</p>
						<p>
							My name is ...This project will help your manage your time. Lorem
							ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
							consequatur atque, provident obcaecati modi esse!
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
