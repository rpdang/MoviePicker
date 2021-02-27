import React from 'react';
import Button from './Button';

class Greet extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: "awesome"};
	}
	
	
	changeValue = () => {
		this.setState(
			{val: "wonderful"}
			);
		}
	
	render(){
		return(
			<div>
				<h1>Hello {this.state.val} World</h1>
				<Button/>
			</div>
		);
	}
}


export default Greet;