import React, {Component} from 'react';

export default class Step extends Component {

    handleClick = () => {
        const {isClickable, onClick, number} = this.props;
        if (isClickable) {
            onClick(number);
        }
    }

    render() {

        const {isSelected, isClickable, number, children} = this.props;
        return (
            <div className={`step${isSelected ? ' step-selected' : ''}${isClickable ? ' step-clickable' : ''}`} onClick={this.handleClick}>
                <p className='step__number'>{number}</p>
                <p className='step__title'>{children}</p>
            </div>
        );

    }
}

Step.defaultClass = {
    isSelected: false,
    isClickable: false,
    number: 1,
    children: 'Personal information'
}