import React from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import TransitionStageChild from "./TransitionStageChild";
import omit from "lodash/omit";


export default class TransitionStage extends React.Component {
	static propTypes = {
		/**
		 * @prop {any} children [undefined]
		 * The child element(s) to apply the transition to.
		 */
		children: React.PropTypes.any,

		/**
		 * @prop {any} component ["div"]
		 * The type of component to render.
		 * See {@link https://facebook.github.io/react/docs/animation.html#rendering-a-different-component ReactTransitionGroup}
		 * for more info.
		 */
		component: React.PropTypes.any,

		/**
		 * @prop {number} enterDelay [0]
		 * The delay before the enter transition begins, in ms.
		 */
		enterDelay: React.PropTypes.number,

		/**
		 * @prop {number} leaveDelay [0]
		 * The delay before the leave transition begins, in ms.
		 */
		leaveDelay: React.PropTypes.number,

		/**
		 * @prop {number} duration [125]
		 * The duration of the transition, in ms.
		 */
		duration: React.PropTypes.number,

		/**
		 * @prop {string} transitionName [undefined]
		 * The unique identifier for the transition type. Valid options are "scaleDown",
		 "scaleUp", "scaleLeft", "scaleRight", "slideDown", "slideUp", "slideLeft", "slideRight" and "fade". Required.
		 */
		transitionName: React.PropTypes.oneOf([
			"scaleDown",
			"scaleUp",
			"scaleLeft",
			"scaleRight",
			"slideDown",
			"slideUp",
			"slideLeft",
			"slideRight",
			"fade"
		]).isRequired,

		/**
		 * @prop {bool} transitionAppear [true]
		 * Whether or not to apply the enter transition when a component is initially mounted to the group.
		 */
		transitionAppear: React.PropTypes.bool,

		/**
		 * @prop {bool} transitionEnter [true]
		 * Whether or not to apply the enter transition when a component is added to the group.
		 */
		transitionEnter: React.PropTypes.bool,

		/**
		 * @prop {bool} transitionLeave [true]
		 * Whether or not to apply the leave transition when a component is unmounted from the group.
		 */
		transitionLeave: React.PropTypes.bool,

		/**
		 * @prop {func} onUnmount [undefined]
		 * A callback to invoke when the transitioned component is unmounted after the leave transition is
		 * completed.
		 */
		onUnmount: React.PropTypes.func,

		// this prop is ignored
		childFactory: React.PropTypes.func
	};

	static defaultProps = {
		component: "div",
		duration: 125,
		enterDelay: 0,
		leaveDelay: 0,
		transitionAppear: true,
		transitionEnter: true,
		transitionLeave: true
	};

	render() {
		let { childFactory, ...props} = this.props;
		const groupProps = omit(props, ["duration", "enterDelay", "leaveDelay", "onUnmount"]);
		let TransitionStageChildFactory = React.createFactory(TransitionStageChild);
		childFactory = (c) => {
			return TransitionStageChildFactory(Object.assign({}, this.props, c.props), c);
		};

		return (
			<ReactTransitionGroup {...groupProps} childFactory={childFactory}>
				{this.props.children}
			</ReactTransitionGroup>
		);
	}
}