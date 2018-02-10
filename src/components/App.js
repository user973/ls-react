import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App/App.css';

import {getMarket, getFarm, getBudget} from '../reducers';
import {createOrder, moveOrderToFarm} from '../actions/marketActions';
import {moveOrderToCustomer} from '../actions/farmActions';

import Market from './Market';
import Farm from './Farm';
import Budget from './Budget';

class App extends Component {

    render() {
        const {market, farm, budget, createOrder, moveOrderToFarm, moveOrderToCustomer} = this.props;
        return (
            <div className='app'>
                <Market market={market} createOrder={createOrder} moveOrderToFarm={moveOrderToFarm} />
                <Farm farm={farm} moveOrderToFarm={moveOrderToFarm} moveOrderToCustomer={moveOrderToCustomer} />
                <Budget budget={budget} />
            </div>
        );
    }

}

const mapStateToProps = state => ({
    market: getMarket(state),
    farm: getFarm(state),
    budget: getBudget(state)
});

const mapDispatchToProps = dispatch =>  ({
    createOrder: (payload) => dispatch(createOrder(payload)),
    moveOrderToFarm: (payload) => dispatch(moveOrderToFarm(payload)),
    moveOrderToCustomer: (payload) => dispatch(moveOrderToCustomer(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);