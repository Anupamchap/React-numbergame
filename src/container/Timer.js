import React, { Component } from 'react';
import '../css/timer.css'

class Timer extends Component {
    constructor (props){
        super(props);
        this.state = {
            count:0
        }

    }

    onFirst = () => {        
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count+1
            }))
        },1000)
    }

    onLast = () => {        
        clearInterval(this.timer)
        setTimeout(()=>alert("Congratulation!! You finshed the game in:"+this.state.count+" seconds."),1)
    }

    render() {
        const {count} = this.state
        return (            
                <h2 id='timer' onFirst={this.onFirst}>Timer:{count}</h2>    
        );
    }


}

export default Timer;