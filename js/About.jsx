const React = require("react");
const { Link } = require('react-router');
const config = require("../config");
import MenuBar from "./MenuBar";
import Mask from "./modules/Mask.jsx";
import Loading from "./modules/Loading.jsx";


export default class About extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true
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
		}, 500)	;
	}

	getStyle() {
		return {
			mainContainer: {
				background: "black",
				width: window.innerWidth,
				height: window.innerHeight
			},
			logo: {
				width: "160px",
				height: "240px",
				display: "block",
				margin: "0 auto",
				paddingTop:"100px"
				//boxShadow: "5px 5px 5px #888888"
			},
			contentContainer : {
				width: "70%",
				display: "block",
				margin: "0 auto",
				color: "white"
			}
		}
	}


	render() {
		const styles = this.getStyle();
		return (
				<div style={styles.mainContainer}>
						{this.isLoading()}
						<img style={styles.logo} src={`public/resources/images/${config.about.logo}`}/>
						<div style={styles.contentContainer}>
							<h3 style={{textAlign:"center"}}>Pi Alpha Phi focuses itself on several core values, which are written into its. The 5 pillars of the fraternity are: Academic Excellence, Asian Awareness, Brotherhood, Leadership, and Philanthropy.</h3><br/>

							<h3>Academic Excellence</h3>
								<p>The Fraternity creates a studious environment and encourages each of its members to achieve his greatest academic potential. The Fraternity supports all educational endeavors and recognizes exceptional academic achievement.</p>
							<h3>Asian American Awareness</h3>
								<p>The Fraternity believes in learning Asian American culture, heritage and history. The Fraternity encourages its members to pass on this knowledge to others.</p>
							<h3>Brotherhood</h3>
								<p>The Fraternity encourages mutual trust, respect, and loyalty among its members. The Fraternity creates an extended family that nurtures lifelong "friendships" through the shared bonds of tradition, shared values, and unity.</p>
							<h3>Leadership</h3>
								<p>The Fraternity provides opportunities to fulfill important duties within the organization and helps members develop leadership skills in preparation for their future careers and endeavors.</p>
							<h3>Philanthropy</h3>
								<p>The Fraternity is committed to its responsibility to serve others and encourages participation in activities for the betterment of not only the Asian American community, but the community as a whole. One of its national events is the Jade Ribbon Campaign.</p>
					</div>
				</div>
		)
	}
}