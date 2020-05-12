import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" components={Home} />
					<Route path="/about" components={About} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
