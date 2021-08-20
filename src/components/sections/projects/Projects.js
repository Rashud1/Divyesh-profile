import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../../section-title/Title";
import tasks from "../../../assets/img/tasks.png";
import profileImg from "../../../assets/img/profile.PNG";
import calImg from "../../../assets/img/cal.png";

export const Projects = () => {
	return (
		<div className="projects-list">
			<Container>
				<Row>
					<Col>
						<Title title="Projects" />
					</Col>
				</Row>
				<Row className="my-5">
					<Col md="6">
						<div class="pro-img">
							<img src={tasks} width="100%" alt="" />
						</div>
					</Col>

					<Col md="6">
						<div class="fs-2 fw-bold">Not To Do List</div>
						<div class="fst-italic">Tech: html, css, javascript</div>
						<div class="links">
							<a href="">
								<i class="fab fa-github-square"></i>
							</a>
							<a href="">
								<i class="fab fa-chrome"></i>
							</a>
						</div>
						<p class="mt-3">
							<strong> About:</strong> This project will help your manage your
							time. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Deserunt consequatur atque, provident obcaecati modi esse!
						</p>
					</Col>
				</Row>
				<Row className="my-5">
					<Col md="6">
						<div class="fs-3 fw-bold">My Portfolio</div>
						<div class="fst-italic">Tech: html, css, javascript</div>
						<div class="links">
							<a href="">
								<i class="fab fa-github-square"></i>
							</a>
							<a href="">
								<i class="fab fa-chrome"></i>
							</a>
						</div>
						<p class="mt-3">
							<strong> About:</strong> This my protfolio web site. time. Lorem
							ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
							consequatur atque, provident obcaecati modi esse!
						</p>
					</Col>
					<Col md="6">
						<div class="pro-img">
							<img src={profileImg} width="100%" alt="protfolio" />
						</div>
					</Col>
				</Row>

				<Row className="my-5">
					<Col>
						<img src={calImg} width="100%" alt="calculator" />
					</Col>
					<Col>
						<div class="fs-3 fw-bold">Prank calculator</div>
						<div class="fst-italic">Tech: html, css, javascript</div>
						<div class="links">
							<a href="">
								<i class="fab fa-github-square"></i>
							</a>
							<a href="">
								<i class="fab fa-chrome"></i>
							</a>
						</div>
						<p class="mt-3">
							<strong> About:</strong> This project will help your manage your
							time. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Deserunt consequatur atque, provident obcaecati modi esse!
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
