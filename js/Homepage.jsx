const React = require("react");
const { Link } = require('react-router');
const config = require("../config");
import MenuBar from "./MenuBar"

export default class HomePage extends React.Component {

	getStyle() {
		return {
			background :{
				width: "100%",
				height: screen.height,
				backgroundImage: "url('public/resources/images/" + config.landingPage.backgroundImage +"')",
				backgroundRepeat:"no-repeat",
				backgroundPosition: "center center"
			},
			title : {
				paddingTop: "7px",
				margin: "0 auto",
				textAlign: "center",
				fontSize: "70",
				width: config.landingPage.titleWidth,
				color: config.landingPage.titleColor
			},
			subtitle: {
				paddingTop: "50px",
				margin: "0 auto",
				textAlign: "center",
				fontSize: "30",
				fontStyle: "italic",
				width: config.landingPage.subTitleWidth,
				color: config.landingPage.subtitleColor
			},
			logo: {
				paddingTop: "100px",
				display: "block",
				marginLeft: "auto",
				marginRight: "auto",
				width: "100px",
				height: "100px"
			}
		}
	}



	render() {
		const styles = this.getStyle();
		return (
				<div style={styles.background}>
						<img style={styles.logo} src={`public/resources/images/${config.landingPage.logo}`} />
						<h1 style={styles.title}>{config.landingPage.title}</h1>
						<h5 style={styles.subtitle}>{config.landingPage.subtitle}</h5>
				</div>
		)
	}
}

