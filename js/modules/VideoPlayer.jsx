var React = require("react");
import Mask from "./Mask";
const config = require("../../config");

export default class VideoPlayer extends React.Component {

	getStyle() {
		return {
			display: "block",
			marginLeft: "auto",
			marginRight: "auto",
			color: "white",
			backgroundColor: "black",
			border: "none"
		}
	}

	render() {
		const styles = this.getStyle();
		return (
				<Mask color={"rgba(0,0,0,0.9)"} fullScreen={true}>
					<div>
						<iframe width="760" height="515" src="https://www.youtube.com/embed/ml4FdiVlLKw?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
					</div>
					<br/>
					<button onClick={this.props.close} style={styles}><i className="fa fa-times-circle"></i> CLOSE</button>
				</Mask>
		)
	}
}
