const React = require("react");
const { Link } = require('react-router');
import  MenuItem from './modules/MenuItem.jsx';


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
				top:0,
				position:"fixed",
				width: "100%",
				padding: "12px 20px 6px 30px",
				marginBottom: "-20px",
				background: "Black"
			},
			title : {
				fontWeight: "bold",
				fontFamily: "Montserrat",
				color: "#FFFFFF",
				fontSize: "18px",
				textDecoration: "none"
			},
			leftMenu : {
				margin: "-7px 0 0 0",
				display: "inline-block",
				float: "right",
				padding: "10px"
			},
			items : {
				color: "#FFFFFF",
				margin: "0 12px",
				cursor: "pointer",
				textDecoration: "none"
			}
		}
	},



	generateMenu(){
		const styles = this.getStyle();
		var items = this.props.menuItems.map(this.generateMenuItem);
		items.push(<span style={styles.items}></span>);
		return items;
	},
	generateMenuItem(item) {
		//<Link to={item.location} style={styles.items} onClick ={item.action}>{item.name}</Link>
		const styles = this.getStyle();
		return (
				<span>
					<Link to={item.location} style={styles.items} onClick ={item.action}><MenuItem name={item.name} /></Link>
				</span>
		)
	},

	render() {
		const styles = this.getStyle();
		return (
				<nav className="navbar navbar-default navbar-fixed-top" style={styles.menuBar}>
					<div className="title"><Link to={"/"} style={styles.title}>{this.props.title}</Link>
						<span style={styles.leftMenu}>
						{this.generateMenu()}
						<MenuItem />
						</span>
					</div>
				</nav>
		)
	}
});

export default MenuBar;
