const React = require("react")


const MenuBar = React.createClass({

	propTypes : {
		menuItems : React.PropTypes.array
	},
	defaultProps : {
		menuItems: [{name:"Menu Item 1", action: function(){console.log("hey")}}]
	},

	getStyle() {
		return {
			menuBar :{
				padding: "12px 10px 5px 30px",
				marginBottom: "0px",
				background: "Black"
			},
			title : {
				fontWeight: "bold",
				fontFamily: "Montserrat",
				color: "#FFFFFF",
				fontSize: "18px"
			},
			leftMenu : {
				margin: "-7px 0 0 0",
				display: "inline-block",
				float: "right",
				padding: "10px"
			},
			items : {
				color: "#FFFFFF",
				margin: "0 7px 0 7px",
				cursor: "pointer"
			}
		}
	},

	generateMenu(){
		return this.props.menuItems.map(this.generateMenuItem)
	},
	generateMenuItem(item) {
		const styles = this.getStyle();
		return <span style={styles.items} onClick ={item.action}>{item.name}</span>
	},

	render() {
		const styles = this.getStyle();
		return (
				<nav className="navbar navbar-default navbar-fixed-top" style={styles.menuBar}>
					<div className="title"><span style={styles.title}>{this.props.title}</span>
						<span style={styles.leftMenu}>
						{this.generateMenu()}
						</span>
					</div>
				</nav>
		)
	}
});

export default MenuBar;
