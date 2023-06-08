import React, { Component } from 'react'

export default class Galary extends Component {
  state = {counter:0};
  img_ar = ["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg"]
  next = () => {
    this.setState({counter:this.state.counter + 1})
    if(this.state.counter+1 >= 4){
      this.setState({counter:0});
    }
  }
  back = () => {
    this.setState({counter:this.state.counter - 1})
    if(this.state.counter-1 < 0){
      this.setState({counter:0});
    }
  }

  render() {
    return (
      <div>
        <h1>2</h1>
        <img src={"/images/"+this.img_ar[this.state.counter]} width="200" height="200"/>
        <button onClick={this.next}>next</button>
        <button onClick={this.back}>back</button>
      </div>
    )
  }
}