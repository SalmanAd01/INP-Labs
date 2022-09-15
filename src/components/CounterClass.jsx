import React, { Component } from 'react'

export class CounterClass extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
  render() {
    return (
        <section className="counter h-100 mt-5 mb-5 d-flex justify-content-center" id="counter">
        <div className="container">
          <h1>Using Class Componenet</h1>

        <div className="row">
          <div className="col">
            <button className="btn btn-primary" onClick={()=>this.setState(prev=>({ count: prev.count - 1 }))}>-</button>
          </div>
          <div className="col">
            <input type="number" name="counter-num" id="counter" value={this.state.count} disabled/>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={()=>this.setState(prev=>({ count: prev.count + 1 }))}>+</button>
          </div>
        </div>
        </div>
    </section>
    )
  }
}

export default CounterClass 