var React = require("react");
var Radium = require("radium");

class menuItem extends React.Component {

	getStyles() {
		return {
			section : {
				display:"inline-block",
				width: "70px",
				textAlign:"center",
				':hover': {
					color: "red"
				}
			},
			item: {
				color: "#FFFFFF",
				margin: "0 12px",
				cursor: "pointer",
				textDecoration: "none",
				':hover': {
					color: "red"
				}
			},
			underline: {
				display:"inline-block",
				height: "2px",
				backgroundColor: "white",
				color: "white",
				borderRadius: "15px",
				width: "90%",
				/* HOVER OFF */
				transition: "all ease-in 1000ms"
				//WebkitTransition: "width 1s"
			},
			test: {
				'hover:': {}
			}
		}
	}
	render() {
		const styles = this.getStyles();
		return (
				<div className="section" style={styles.section}>
					<span key="target" style={styles.item}>{this.props.name}</span>
						{Radium.getState(this.state, 'target', ':hover') ? (
								<span style={styles.underline}></span>
						) : null}

				</div>
		)
	}
}

const MenuItem = Radium(menuItem);

export default MenuItem;