var React = require("react");

export default class Mask extends React.Component {

	getStyles() {
		return {
			mask: {
				backgroundColor: this.props.color,
				position: this.props.fullScreen ? "fixed" : "absolute",
				top: 0,
				left: 0,
				width: "100%",
				cursor: "default",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				zIndex: 1000
			},
			children: {
				backgroundColor: "transparent",
				zIndex: 1001
			}
		};
	}

	render() {
		const styles = this.getStyles();
		return (
			<div style={styles.mask} onClick={this.props.onClick}>
				<div style={styles.children}>{this.props.children}</div>
			</div>
	)
	}
}