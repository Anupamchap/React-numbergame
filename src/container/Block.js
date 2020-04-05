import React, { Component } from 'react';
import '../css/block.css'

class Block extends Component {
    render() {
        
        return (
            <div>
              <p className='square' id={this.props.id} onClick={this.props.onClk} >{this.props.value}</p>  
            </div>
        );
    }
}

export default Block;