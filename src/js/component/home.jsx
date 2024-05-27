import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import ListCard from "./ListCard";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="">
		<Navbar/>
		<Jumbotron/>
		<ListCard/>
		<Footer/>
	</div>
	);
};

export default Home;
