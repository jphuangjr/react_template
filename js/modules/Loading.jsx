var React = require("react");
import Mask from "./Mask";
const config = require("../../config");

export default class Loading extends React.Component {

	getStyle() {
	 return {
						paddingTop: "50px",
						display: "block",
						marginLeft: "auto",
						marginRight: "auto",
						width: "100px",
						height: "100px",
		        marginBottom: "-10px"
		}
	}

	render() {
		return (
				<Mask color={"rgba(0,0,0,0.8)"} fullScreen={true}>
					<div>
						<img style = {this.getStyle()} src={`public/resources/images/${config.landingPage.logo}`} />
					</div>
					<div style={{color: "white"}}>
						<h1><i className="fa fa-spinner fa-spin"></i> Loading...</h1>
					</div>
				</Mask>
		)
	}
}