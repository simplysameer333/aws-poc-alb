import React from 'react';
import ReactDOM from 'react-dom';
import fetch from "isomorphic-fetch";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {message: ''};
	}

	componentDidMount() {
		(async () => {
			const response = await fetch('http://localhost:9000/api/home');
			const body = await response.json();
			this.setState({ message: body });
		})();		
	}

	render() {
		const {message} = this.state;
		return <div>{message} </div>
	}
}