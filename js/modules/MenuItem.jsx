var React = require("react");
var Radium = require("radium");

@Radium
export default class MenuItem extends React.Component {

	getStyles() {
		return {
			item: {
				color: "#FFFFFF",
				margin: "0 12px",
				cursor: "pointer",
				textDecoration: "none"
			},
			underline: {
				height: "5px",
				backgroundColor: "red",
				borderRadius: "15px",
				width: "0px",
				/* HOVER OFF */
				WebkitTransition: "width 1s"
			}
		}
	}
	render() {
		const styles = this.getStyles();
		return (
				<div style={{display:"inline-block"}}>
					<span className="target" style={styles.item}>{this.props.name}</span>
					<span className="underline"></span>
				</div>
		)
	}
}

