/**
 * Defines the available transitions for the TransitionStage component.
 */
export default (props) => {
	let styles = {
		// defines the style to apply to "initialize" the transition; should not actually animate
		base: {},
		// defines the style to apply when the component enters the DOM; should provide the enter transition
		enter: {},
		// defines the style to apply when the component is removed from the DOM; should provide the leave transition
		leave: {}
	};

	switch (props.transitionName) {
		case "slideDown":
		case "slideUp":
		case "slideLeft":
		case "slideRight":
			styles.base = Object.assign(styles.base, {
				transition: "transform " + props.duration + "ms ease-in-out, opacity " + props.duration + "ms ease-in-out"
			});
			styles.enter = Object.assign(styles.enter, {
				transform: "translate(0, 0)",
				opacity: 1
			});
			styles.leave = Object.assign(styles.leave, {
				opacity: 0
			});
			if (props.transitionName === "slideDown") {
				styles.leave = Object.assign(styles.leave, {
					transform: "translate(0, -100%)"
				});
			} else if (props.transitionName === "slideUp") {
				styles.leave = Object.assign(styles.leave, {
					transform: "translate(0, 100%)"
				});
			} else if (props.transitionName === "slideLeft") {
				styles.leave = Object.assign(styles.leave, {
					transform: "translate(100%, 0)"
				});
			} else if (props.transitionName === "slideRight") {
				styles.leave = Object.assign(styles.leave, {
					transform: "translate(-100%, 0)"
				});
			}
			break;
		case "scaleDown":
		case "scaleUp":
		case "scaleLeft":
		case "scaleRight":
			styles.base = Object.assign(styles.base, {
				transition: "transform " + props.duration + "ms ease-in-out, opacity " + props.duration + "ms ease-in-out"
			});
			styles.enter = Object.assign(styles.enter, {
				transform: props.transitionName === "scaleDown" || props.transitionName === "scaleUp" ? "scaleY(1)" : "scaleX(1)",
				opacity: 1
			});
			styles.leave = Object.assign(styles.leave, {
				transform: props.transitionName === "scaleDown" || props.transitionName === "scaleUp" ? "scaleY(0)" : "scaleX(0)",
				opacity: 0
			});
			if (props.transitionName === "scaleDown") {
				styles.base = Object.assign(styles.base, {
					transformOrigin: "50% 0"
				});
			} else if (props.transitionName === "scaleUp") {
				styles.base = Object.assign(styles.base, {
					transformOrigin: "50% 100%"
				});
			} else if (props.transitionName === "scaleLeft") {
				styles.base = Object.assign(styles.base, {
					transformOrigin: "100% 50%"
				});
			} else if (props.transitionName === "scaleRight") {
				styles.base = Object.assign(styles.base, {
					transformOrigin: "0 50%"
				});
			}
			break;
		case "fade":
			styles.base = Object.assign(styles.base, {
				transition: "opacity " + props.duration + "ms ease-out"
			});
			styles.enter = Object.assign(styles.enter, {
				opacity: 1
			});
			styles.leave = Object.assign(styles.leave, {
				opacity: 0
			});
			break;
		default:
			throw "Transition '" + props.transitionName + "' does not exist. Check the transitionName prop.";
	}
	return styles;
};