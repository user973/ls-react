import React, { Component } from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                'some article 1',
                'some article 2',
                'some article 3',
                'some article 4',
                'some article 5'
            ],
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    handleClick = () => {
        const value = this.state.value;
        if (value) {
            this.setState((prevState, props) => {
                return {
                    posts: [...prevState.posts, value],
                    value: ''
                };
            });
        }
    };

    render() {

        const NewPost = props => <p> {props.text} </p>
        const Button = props => <input type='button' onClick={this.handleClick} value='Добавить' />

        return (
            <div className='App'>
                {
                    this.state.posts.map((x, i) => {
                        return <NewPost key={i} text={x} />
                    })
                }
                <input onChange={this.handleChange} value={this.state.value} />
                <Button />
            </div>
        );

    }

}