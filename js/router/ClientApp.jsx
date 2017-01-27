const React = require("react");
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');

const Layout = require("./Layout");
import HomePage from "../Homepage";
import Form from "../Form";
import About from "../About";
import Chapters from "../Chapters";
import RushSchedule from "../RushSchedule";

const App = React.createClass({
	render() {
		return (
				<Router history={hashHistory}>
					<Route path="/" component={Layout}>
						<IndexRoute component={HomePage} />
						<Route path="/contact" component={Form} />
						<Route path="/about" component={About} />
						<Route path="/chapters" component={Chapters} />
						<Route path="/RushSchedule" component={RushSchedule} />
					</Route>
				</Router>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app'));