import React, {Component} from 'react';
import './Farm/Farm.css';

export default class Farm extends Component {

    render() {
        const {farm: {orders}, moveOrderToFarm, moveOrderToCustomer} = this.props;
        const disabled = !orders.length;
        return (
            <div className='farm'>
                <h2>Производство на ферме</h2>
                <button disabled={disabled} onClick={() => moveOrderToCustomer(orders.pop())}>Отправить урожай клиенту</button>
                <div>
                {
                    orders.map((item, index) => {
                        return (
                            <div key={item.id} className='order'>
                                <div className='order__upper'>
                                    <p className='p--order'>Название: {item.name}</p>
                                    <p className='p--order'>Цена: <span className='order-price'>{item.price}</span></p>
                                </div>
                                <div className='order__lower'>
                                    <p className='p--order'>Создан: {item.createdAt.toString()}</p>
                                </div>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        );
    }

}