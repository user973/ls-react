import React, { Component } from 'react';

export default class NewsPost extends Component {
        
    render() {

        return <div className='post_wrapper'><p>{this.props.text}</p></div>;

    }

}