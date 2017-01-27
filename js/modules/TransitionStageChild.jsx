import React from "react";
import ReactDOM from "react-dom";
import Transition from "./Transition";

/**
 * A class which provides the ReactTransitionGroup animation lifecycle hooks to another component.
 * Intended to be used as a factory by the TransitionStage component.
 */
export default class TransitionStageChild extends React.Component {
	static propTypes = {
		children: React.PropTypes.node.isRequired,
		duration: React.PropTypes.number.isRequired,
		enterDelay: React.PropTypes.number.isRequired,
		leaveDelay: React.PropTypes.number.isRequired,
		transitionName: React.PropTypes.string.isRequired,
		transitionAppear: React.PropTypes.bool.isRequired,
		transitionEnter: React.PropTypes.bool.isRequired,
		transitionLeave: React.PropTypes.bool.isRequired,
		onUnmount: React.PropTypes.func
	};

	constructor(props) {
		super(props);
		this.styles = Transition(props);
		this.unmounting = false;
	}

	componentDidMount() {
		this.el = ReactDOM.findDOMNode(this);
	}

	componentWillUnmount() {
		this.unmounting = true;
		this.props.onUnmount && this.props.onUnmount(this);
	}

	applyStyle(style, el) {
		if (this.unmounting) {
			return;
		}
		if (!el) {
			el = this.el;
		}
		Object.assign(el.style, style);
	}

	applyTransitionStyle(style) {
		if (this.unmounting) {
			return;
		}
		this.applyStyle(style, this.el.childNodes[0]);
	}

	/* Lifecycle Hooks */
	componentWillAppear(onReady) {
		this.applyStyle({ overflow: "hidden" });
		if (this.props.transitionAppear) {
			this.applyTransitionStyle(this.styles.leave);
		}
		this.applyTransitionStyle(this.styles.base);
		setTimeout(() => {
			if (!this.unmounting) {
				onReady();
			}
		}, 0); // allows for recalculation of newly applied style
	}

	componentDidAppear() {
		if (this.props.transitionAppear) {
			setTimeout(() => {
				this.applyTransitionStyle(this.styles.enter);
				setTimeout(() => {
					this.applyStyle({ overflow: "visible" });
				}, this.props.duration);
			}, this.props.enterDelay);
		}
	}

	componentWillEnter(onReady) {
		this.applyStyle({ overflow: "hidden" });
		if (this.props.transitionEnter) {
			this.applyTransitionStyle(this.styles.leave);
		}
		this.applyTransitionStyle(this.styles.base);
		setTimeout(() => {
			if (!this.unmounting) {
				onReady();
			}
		}, 0); // allows for recalculation of newly applied style
	}

	componentDidEnter() {
		if (this.props.transitionEnter) {
			setTimeout(() => {
				this.applyTransitionStyle(this.styles.enter);
				setTimeout(() => {
					this.applyStyle({ overflow: "visible" });
				}, this.props.duration);
			}, this.props.enterDelay);
		}
	}

	componentWillLeave(onReady) {
		if (this.props.transitionLeave) {
			this.applyStyle({ overflow: "hidden" });
			setTimeout(() => {
				this.applyTransitionStyle(this.styles.leave);
				setTimeout(() => {
					onReady();
				}, this.props.duration);
			}, this.props.leaveDelay);
		} else {
			onReady();
		}
	}

	render() {
		const child = React.Children.only(this.props.children);
		const style = Object.assign({}, child.props.style || {}, this.styles.leave);
		return <div style={{ overflow: "hidden" }}>{React.cloneElement(child, { style })}</div>;
	}
}