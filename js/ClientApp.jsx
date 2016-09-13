const React = require("react");
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');

const Layout = require("./Layout")
import HomePage from "./Homepage";



const App = React.createClass({
	render() {
		return (
				<Router history={hashHistory}>
					<Route path="/" component={Layout}>
						<IndexRoute component={HomePage} />
					</Route>
				</Router>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app'));