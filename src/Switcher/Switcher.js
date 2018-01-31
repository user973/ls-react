import React, {Component} from 'react';
import './Switcher.css';

class Switcher extends Component {

    state = {
        selectedChild: 0
    }

    handleChangeChild = e => {
        const selectedChild = e.target.getAttribute('data-id');
        this.setState({selectedChild});
    }

    render() {

        const {selectedChild} = this.state;
        const {children} = this.props;

        return (
            <div className='switcher'>
                <nav>
                    <ul className='component-list'>
                        {
                            children.map((item, index) => {
                                return (
                                  <li className='component-list__name' key={index} onClick={this.handleChangeChild} data-id={index}>
                                    {item.type.displayName || item.type.name}
                                  </li>
                                );
                            })
                        }
                    </ul>
                </nav>
                <hr/>
                <div className='component-wrapper'>
                    {children[selectedChild]}
                </div>
            </div>
        );
    }
}

export default Switcher;
