import React from 'react';
import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";
/* Components */
import ListPage from "./components/list.js";
import WatchPage from "./components/watch.js";

/* App Component acting as the Router */
class App extends React.Component {
	render() {
		return (
			<Router>
				<Route exact path="/" component={ListPage} />
				<Route exact path="/watch/:key" component={WatchPage} />
			</Router>
		)
	}
}

export default App;
