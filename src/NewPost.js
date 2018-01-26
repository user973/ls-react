import React, { Component } from 'react';

export default class App extends Component {

    state = {
        posts: [
            'some article 1',
            'some article 2',
            'some article 3',
            'some article 4',
            'some article 5'
        ],
        value: ''
    };

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    handleClick = () => {
        const { posts, value } = this.state;
        if (value) {
            this.setState({
                posts: [...posts, value],
                value: ''
            });
        }
    };

    render() {

        const NewPost = props => <p> {props.text} </p>
        const { posts, value } = this.state;

        return (
            <div className='App'>
                <input onChange={this.handleChange} value={value} />
                <button onClick={this.handleClick}>Добавить</button>
                {
                    posts.map((item, index) => {
                        return <NewPost key={item+index} text={item} />
                    })
                }
            </div>
        );

    }

}