import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home";
import Application from "./screens/App";

import "./index.css";

function App() {
	return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/app" component={Application} />
				</div>
			</Router>
	);
} 

export default App;