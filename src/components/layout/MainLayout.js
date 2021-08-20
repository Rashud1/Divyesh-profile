import React from "react";
import { Hero } from "../hero/Hero";
import { Footer } from "../footer/Footer";
import { TopNavBar } from "../header/Navbar";

export const MainLayout = ({ children }) => {
	return (
		<div>
			<TopNavBar />
			{/* <Hero /> */}
			{children}
			<Footer />
		</div>
	);
};
