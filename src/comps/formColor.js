import React, { Component } from 'react';

export default class FormColor extends Component {
    state = {color:""};
    inputRef = React.createRef();

    changeColor = () => {
        let input_val = this.inputRef.current.value;
        this.setState({color:input_val});
      }

    render() {
        return (
            <div className="container">
                <h1>3</h1>
                <h2>Enter Favorite color:<span>{this.state.color}</span></h2>
                <select ref={this.inputRef} onClick={this.changeColor} className="form-select">
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                </select>
            </div>
        )
    }
}


