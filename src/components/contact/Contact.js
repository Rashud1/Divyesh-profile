import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export const Contact = () => {
	return (
		<div className="contact">
			<Card>
				<ListGroup>
					<ListGroup.Item>
						<h3>Contact Me Via</h3>
					</ListGroup.Item>
					<ListGroup.Item>
						<a
							href="https://github.com/DentedCode"
							target="_blank"
							rel="noreferrer"
						>
							<i class="fab fa-github-square"></i>{" "}
							<span className="handlers">DentedCode</span>
						</a>
					</ListGroup.Item>
					<ListGroup.Item>
						<a
							href="https://www.linkedin.com/in/prem-acharya/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin"></i>{" "}
							<span className="handlers">prem-acharya</span>
						</a>
					</ListGroup.Item>
					<ListGroup.Item>
						<a
							href="https://twitter.com/prem_ach"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<i className="fab fa-twitter-square"></i>
							<span className="handlers">@prem_ach</span>
						</a>
					</ListGroup.Item>
					<ListGroup.Item>
						<a
							href="https://www.facebook.com/prem.acharya.98"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<i className="fab fa-facebook-square"></i>
							<span className="handlers">prem.acharya.98</span>
						</a>
					</ListGroup.Item>
					<ListGroup.Item>
						<a href="tel:040000000">
							{" "}
							<i className="fas fa-phone-square"></i>
							<span className="handlers">040000000</span>
						</a>
					</ListGroup.Item>
					<ListGroup.Item>
						<a href="mailto:info@dentedcode.com">
							<i className="fas fa-envelope-square"></i>
							<span className="handlers">info@dentedcode.com</span>
						</a>
					</ListGroup.Item>
				</ListGroup>
			</Card>
		</div>
	);
};
