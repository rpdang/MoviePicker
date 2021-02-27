import React from 'react'
import styled, { css } from 'styled-components'


const Button = styled.button`
  position: absolute;
  height: 30%;
  width: 100%;
  top: 50%;
  left:50%;
  font-size: 2.6vmin;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.05) 0px 3px 20px;
  border-width: initial;
  background-color: grey;
  color: white;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  &:hover {
        background-color: #445b65;
        color: white;
  }
`

export default class UpgradedButton extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        buttonText: "Randomize"
      }
    }

    handleClick = () => {
      console.log("Button clicked...")
      let buttonText = this.state.buttonText == "Randomize" ? "Avengers: Endgame" : "Randomiz"
      this.setState({buttonText: buttonText})
    }

    render(){
      return (
        <Button onClick={this.handleClick}>{this.state.buttonText}</Button>
      )
    }
}
