const React = require("react");
const { Link } = require('react-router');
const config = require("../config");
import MenuBar from "./MenuBar"

//var img = document.createElement('img');
//img.src = require("./../public/resources/images/home.jpg");

export default class HomePage extends React.Component {

	getStyle() {
		return {
			background :{
				//background: "red",
				//backgroundImage: img,
				width: "100%",
				height: screen.height,
				backgroundImage: "url('./../public/resources/images/" + config.landingPage.backgroundImage +"')"
			},
			title : {
				paddingTop: "150px",
				margin: "0 auto",
				textAlign: "center",
				fontSize: "70",
				width: config.landingPage.titleWidth
			},
			subtitle: {
				paddingTop: "50px",
				margin: "0 auto",
				textAlign: "center",
				fontSize: "30",
				fontStyle: "italic",
				width: config.landingPage.subTitleWidth
			}
		}
	}



	render() {
		const styles = this.getStyle();
		return (
				<div style={styles.background}>
						<h1 style={styles.title}>{config.landingPage.title}</h1>
						<h5 style={styles.subtitle}>{config.landingPage.subtitle}</h5>
				</div>
		)
	}
}

