import React, { Component } from "react";

export default class FormColor extends Component {
    state = {color:"red"};
    inputRef = React.createRef()

    changeColor = () => {
        let input_val = this.inputRef.current.value
        this.setState({color:input_val});
      }

    render() {
        return (
            <div className="container">
                <h2>Enter Favorite color:<span>{this.state.color}</span></h2>
                <select id="color" onClick={this.changeColor} defaultValue={this.state.color}>
                    <option value="red" ref={this.inputRef}>red</option>
                    <option value="orange">orange</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                </select>
            </div>
        )
    }
}


