import React, { Component } from "react";

export default class Cake extends Component {
    state = { counter: 0 };
    img_ar = ["cheese cake.jpg", "chocklet cake.jpg", "orange cake.jpg", "strawberry cake.jpg"]
    inputRef = React.createRef();

    changeCake = () => {
        let input_val = this.inputRef.current.value;
        this.setState({ counter: input_val });
    }

    render() {
        return (
            <div>
                <h1>4</h1>
                <h2>Choose your favorite cake:</h2>
                <select ref={this.inputRef} onClick={this.changeCake} className="form-select">
                    <option value="0">cheese cake</option>
                    <option value="1">chocolate cake</option>
                    <option value="2">orange cake</option>
                    <option value="3">strawberry cake</option>
                </select>
                <img src={"/images/" + this.img_ar[this.state.counter]} width="200" height="200" />
            </div>
        )
    }
}