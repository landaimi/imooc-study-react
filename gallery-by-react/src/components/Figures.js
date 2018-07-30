import React, { Component } from 'react';
import image from '../images/1.jpg';
class Figures extends Component {
    render(){
        return (<div className='imgSec'>
            <figure >
                <p>{this.props.image.title}</p>
                <img src={this.props.image.imageURL}></img>
            </figure>
        </div>)
    }
}

export default Figures;