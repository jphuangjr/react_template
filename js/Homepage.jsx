const React = require("react")
const { Link } = require('react-router')

import MenuBar from "./MenuBar"

export default class HomePage extends React.Component {

	render() {
		return (
				<div>
					<MenuBar
							title="Title"
							menuItems= {[
								{name:"Menu Item 1", action: function(){alert("hey")}}
							]}/>
				</div>
		)
	}
}

