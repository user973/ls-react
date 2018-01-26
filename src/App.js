import React, { Component } from 'react';
import NewsPost from './NewsPost';

export default class App extends Component {

    state = {
        news: [],
        newsInput: ''
    };

    handleChange = event => {
        this.setState({ newsInput: event.target.value });
    };

    handleNewPost = () => {
        const { news, newsInput } = this.state;
        this.setState({
            news: [...news, {text: newsInput}],
            newsInput: ''
        });
    };

    render() {

        const { news, newsInput } = this.state;

        return (
            <div className='App'>
                <input onChange={this.handleChange} value={newsInput} />
                <button onClick={this.handleNewPost}>Добавить</button>
                {
                    news.map((item, index) => {
                        return <NewsPost key={item.text+index} text={item.text} />
                    })
                }
            </div>
        );

    }

}