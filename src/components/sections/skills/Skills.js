import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../../section-title/Title";

import "./skills.style.css";

export const Skills = () => {
	return (
		<div className="py-5 ">
			<Container>
				<Row>
					<Col>
						<Title title="Skills" />
						<div
							class="
						skills-list
						container
						fs-3
						fw-bold
						d-flex
						justify-content-between
						flex-wrap
						mt-4
					"
						>
							<div class="html">
								<i class="fab fa-html5" style={{ color: "red" }}></i> HTML
							</div>

							<div class="css">
								<i class="fab fa-css3-alt" style={{ color: "blue" }}></i>CSS
							</div>
							<div class="js">
								<i
									class="fab fa-js-square"
									style={{ color: "greenyellow" }}
								></i>
								Javascript
							</div>

							<div class="react">
								<i class="fab fa-react" style={{ color: "blue" }}></i> React
							</div>
							<div class="node" style={{ color: "green" }}>
								<i class="fab fa-node-js"></i> Node
							</div>
							<div class="ps">
								<i class="fas fa-cogs" style={{ color: "green" }}></i> Problem
								solving
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
