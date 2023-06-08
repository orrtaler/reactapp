import React, {Component} from 'react'
import Message from "./message"

export default class AppLearn extends Component{
    render(){
        return(
            <div className="container">
                <Message msg="First 1" bg="red"/>
                <Message msg="First 2" bg="rgb(0,255,255)"/>
                <hr/>
            </div>
        )
    }
}