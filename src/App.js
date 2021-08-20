import "./App.css";
import { Footer } from "./components/footer/Footer.jsx";
import { Hero } from "./components/hero/Hero";
import { Home } from "./components/home/Home";
import { AboutMe } from "./components/sections/about-me/AboutMe";
import { Projects } from "./components/sections/projects/Projects";
import { Skills } from "./components/sections/skills/Skills";
import { MainLayout } from "./components/layout/MainLayout";
import { Contact } from "./components/contact/Contact";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" children={<Hero />} />
					<MainLayout>
						<Route exact path="/skills" children={<Skills />} />
						<Route exact path="/projects" children={<Projects />} />
						<Route exact path="/about-me" children={<AboutMe />} />
						<Route exact path="/contact" children={<Contact />} />
					</MainLayout>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
