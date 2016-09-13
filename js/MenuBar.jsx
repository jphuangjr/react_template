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
				padding: "20px",
				background: "grey"
			},
			title : {
				padding: "10px"
			},
			leftMenu : {
				margin: "-7px 0 0 0",
				display: "inline-block",
				float: "right",
				background: "red",
				padding: "10px"
			},
			items : {
				background: "green",
				margin: "0 5px 0 5px",
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
				<div style={styles.menuBar}>
					<div className="title">{this.props.title}
						<span style={styles.leftMenu}>
						{this.generateMenu()}
						</span>
					</div>
				</div>
		)
	}
});

export default MenuBar;