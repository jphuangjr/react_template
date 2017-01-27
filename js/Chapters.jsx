const React = require("react");
const { Link } = require('react-router');
const config = require("../config");
import MenuBar from "./MenuBar";
import Mask from "./modules/Mask.jsx";
import Loading from "./modules/Loading.jsx";


export default class Chapters extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true
		}
	}

	isLoading() {
		if(this.state.loading){
			return (
					<Loading />
			)
		}
	}
	toggleLoading() {
		this.setState({loading: !this.state.loading})
	}

	componentDidMount() {
		setTimeout(() => {
			this.toggleLoading();
		}, 1000)	;
	}

	getStyle() {
		return {
			mainContainer: {
				background: "black",
				width: window.innerWidth,
				height: window.innerHeight
			},
			contentContainer : {
				width: "70%",
				display: "block",
				margin: "0 auto",
				color: "white",
				paddingTop: "100px"
			}
		}
	}


	render() {
		const styles = this.getStyle();
		return (
				<div style={styles.mainContainer}>
						{this.isLoading()}
					<div style={styles.contentContainer}>

						<h1>History</h1><br/>

						<div><p>In 1928, three enterprising members of the Class of 1930 conceived the idea to form a fraternity to serve the several hundred students of Chinese descent at the University of California, Berkeley. Wing C. Chan, from the Central California town of Oroville; Dong Wing Tom, from San Francisco; and Elmer Leong from Berkeley, did much of the preliminary work towards the formation of the Fraternity. In the Fall of 1928, the three approached Tim Jang, a freshman starting his first year at the university to join.</p><p>On February 1, 1929, the six Founding Fathers signed the fraternity's Constitution in both Chinese and English and officially established Pi Alpha Phi at the University of California, Berkeley. The Six Founders were: D. Wing Tom, Wing Chan, Elmer Leong, Chack Chan, Tim Jang, and George Lee.</p></div>

					<h1>Chapters</h1><br/>


						<div>Α Chapter - University of California, Berkeley - 1929<br/>
							B Chapter - State University of New York, Stony Brook - 1990<br/>
								Γ Chapter - University of California, Davis - 1990<br/>
									Δ Chapter - San José State University - 1991-2003. Re-colonized 2012<br/>
										Ε Chapter - University of California, Riverside - 1993<br/>
											Ζ Chapter - University of California, Santa Cruz - 1995<br/>
												<strong>Η Chapter - University of California, Irvine - 1998</strong><br/>
													Θ Chapter - University of California, San Diego - 2000<br/>
														Ι Chapter - University of Michigan, Ann Arbor - 2000<br/>
															Κ Chapter - University of Arizona, Tucson - 2002<br/>
																Μ Chapter - Michigan State University - 2003<br/>
																	Ν Chapter - University of North Carolina at Chapel Hill - 2003<br/>
																		Ξ Chapter - University of Washington - 2004<br/>
																			O Chapter - University of California, Santa Barbara - 2006<br/>
																				Π Chapter - University of Iowa - 2011</div>
																		</div>
				</div>
		)
	}
}