const React = require("react");
const { Link } = require('react-router');
const config = require("../config");
import MenuBar from "./MenuBar";
import Mask from "./modules/Mask.jsx";
import Loading from "./modules/Loading.jsx";


export default class RushSchedule extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true
		}
	}
	checkMobile() {
		if(screen.width < 500){
			return true;
		}
	}
	isLoading() {
		if(this.state.loading){
			return (
					<Loading />
			)
		}
	}
	toggleLoading() {
		this.setState({loading: !this.state.loading})
	}

	componentDidMount() {
		setTimeout(() => {
			this.toggleLoading();
		}, 1000)	;
	}

	getStyle() {
		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		let styles = {
			mainContainer: {
				padding: "10px",
				background: "black"
			},
			logo: {
				width: "160px",
				height: "240px",
				display: "block",
				margin: "0 auto",
				paddingTop:"100px"

			},
			flyer : {
				width: "80%",
				display: "block",
				marginTop: "50px",
				marginLeft: "auto",
				marginRight:"auto",
				color: "white",
				border: "1px solid silver",
				boxShadow: "5px 5px 5px #888888"
			}
		}
		if(!this.checkMobile()){
			styles.mainContainer.width = width;
			styles.mainContainer.height =window.innerHeight;
		}
		return styles;
	}


	render() {
		const styles = this.getStyle();
		return (
				<div style={styles.mainContainer}>
						{this.isLoading()}
					<div>
						<img style={styles.flyer} src="public/resources/images/flyer_front.png" />
					</div>
					<div>
						<img style={styles.flyer} src="public/resources/images/flyer_back.png" />
					</div>
				</div>
		)
	}
}