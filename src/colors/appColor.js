import React, { Component } from "react";
import Colors from "./colors";

export default class AppColor extends Component{
    state = {color:"black"};

    changeTextColor = (_newColor) => {
        this.setState({color:_newColor})
    }

    render(){
        return(
            <div className="container">
                <h1 style={{color:this.state.color}}>wellcome to custom event</h1>
                <Colors changeTextColor={this.changeTextColor}/>
            </div>
        )
    }
}