const React = require("react");
const { Link } = require('react-router');
const config = require("../config");
import MenuBar from "./MenuBar";
import Mask from "./modules/Mask.jsx";
import Loading from "./modules/Loading.jsx";
import VideoPlayer from "./modules/VideoPlayer.jsx";

export default class HomePage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			showVideo: false
		}
	}

	checkMobile() {
		if(screen.width < 500){
			return true;
		}
	}
	getWindowWidth() {
		console.log(window.innerWidth)
		console.log(window.innerHeight)
	}

	getStyle() {

		let styles = {
			background :{
				padddingTop:"100px",
				width: "100%",
				height: screen.height,
				backgroundImage: "url('public/resources/images/" + config.landingPage.backgroundImage +"')",
				backgroundRepeat:"no-repeat",
				backgroundPosition: "center center",
				backgroundSize: "cover"
			},
			player : {
				display: "block",
				marginLeft: "auto",
				marginRight: "auto",
				color: "white",
				backgroundColor: "rbga(0,0,0,.1) !important",
				border: "none"
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
		};
		if(this.checkMobile()){
			styles.background.height = "1500px";
		}
		return styles;
	}

	isLoading() {
		if(this.state.loading){
			return (
					<Loading />
			)
		}
	}

	loadVideo() {
		this.toggleLoading();
		this.setState({showVideo: true});
		setTimeout(() => {
			this.toggleLoading();
			//this.setState({showVideo: true})
		}, 1000);
	}

	toggleLoading() {
		this.setState({loading: !this.state.loading})
	}

	componentDidMount() {
		setTimeout(() => {
			this.toggleLoading();
			//this.setState({showVideo: true})
			this.loadVideo();
		}, 1000);
	}

	getVideoPlayer() {
		const scope = this;
		if(this.state.showVideo === true){
			return (
					<VideoPlayer
							close= {function(){scope.setState({showVideo:false})}}
					/>
			)
		}
	}

	render() {
		const styles = this.getStyle();
		if(this.checkMobile()){
			return (
					<div></div> //Mobile stuff
			)
		} else {
			return (
					<div style={styles.background}>
						<img style={styles.logo} src={`public/resources/images/${config.landingPage.logo}`} />
						<h1 style={styles.title}>{config.landingPage.title}</h1>
						<h5 style={styles.subtitle}>{config.landingPage.subtitle}</h5>
						{this.getVideoPlayer.bind(this)()}
						{this.isLoading()}
						<br/>
						<br/>
						<br/>

					</div>
			)
		}

	}
}
