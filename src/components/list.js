import React from "react";
import {
	Link
} from "react-router-dom";

class ListPage extends React.Component {
	state = {
		movies: []
	}

	componentDidMount() {
		fetch("http://localhost:8080/")
		.then(res => res.json())
		.then((data) => {
			this.setState({ movies: data })
		})
		.catch(console.log)
	}

	render() {
		return (
			<div>
				<ul>
				{ this.state.movies.map((movie) => (
					<li><Link to={"/watch/"+movie.key}>{movie.basename} </Link></li>
				))}
				</ul>
			</div>
		)
	}
}

export default ListPage;
