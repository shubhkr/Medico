import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './routes/Navbar';

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
	    <Router>
	      <div>
	        <Navbar />
	      </div>
	    </Router>
		);
	}
}
