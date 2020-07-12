import React from "react";
import { Player } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";
import {
	Link
} from "react-router-dom";

class WatchPage extends React.Component {
	render() {
		return (
			<>
			<Link to="/">Home</Link>
			<Player
				playsInline
				src={"http://localhost:8080/vid?v="+this.props.match.params.key}
			/>
			</>
		)
	}
}

export default WatchPage;
