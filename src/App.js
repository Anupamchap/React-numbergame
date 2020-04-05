import React, { Component } from 'react';
import Block from './container/Block';
import Timer from './container/Timer';
import './App.css'

class App extends Component {
  constructor() {
    super();

    var counters = this.createCounters()
    this.state = { count: 1, counters };
    this.timerref = React.createRef();
  }

  createCounters = () => {
    var counters = []

    for (let i = 1; i < 26; i++) {
      var newobj = {}
      var found = true
      let val
      while (found) {
        val = Math.ceil(Math.random() * 25)
        found = counters.some(el => el.value === val);
      }
      newobj.id = i;
      newobj.value = val
      counters.push(newobj)
    }

    return counters;
  }




  handleClick = (event) => {
    if (this.state.count == 1) {
      this.timerref.current.onFirst();
    }

    if (event.target.innerHTML == this.state.count) {

      document.getElementById(event.target.id).style.visibility = 'hidden'

      this.setState({ count: this.state.count + 1 })


      if (this.state.count == 25) {

        this.timerref.current.onLast();
      }
    }


  }

  render() {
    let items = []
    for (let i = 0; i < 25; i++) {
      items.push(<Block style={{ display: true }} key={this.state.counters[i].id} id={this.state.counters[i].id} value={this.state.counters[i].value} onClk={this.handleClick} />)
      if ((i + 1) % 5 === 0) {
        items.push(<br></br>)
      }
    }


    return (
      <div >
        <h1>Number Game</h1>
        <Timer ref={this.timerref} />
        <p style={{ "background-color": "yellow" }}>Click all the number from 1 to 25 in sequence.</p>
        {items}
      </div>
    );
  }
}



export default App;

