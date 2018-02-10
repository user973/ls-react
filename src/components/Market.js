import React, {Component} from 'react';
import './Market/Market.css';

let id = 0;
const getId = () => {
    console.log(id);
    id += 1;
    return id;
}

export const vegetables = [
    'Капуста',
    'Редиска',
    'Огурцы',
    'Морковь',
    'Горох',
    'Баклажан',
    'Тыква',
    'Чеснок',
    'Лук',
    'Перец',
    'Картофель',
    'Редька'
];

const getNewOrder = () => {
    return {
      id: getId(),
      name: vegetables[Math.floor(Math.random() * vegetables.length)],
      price: 100 + Math.floor(Math.random() * 100),
      createdAt: new Date()
    };
};

export default class Market extends Component {

    render() {
        const {market:{orders}, createOrder, moveOrderToFarm} = this.props;
        const disabled = !orders.length;
        return (
            <div className='market'>
                <h2>Новые заказы в магазине</h2>
                <button className='new-orders__create-button' onClick={() => createOrder(getNewOrder())}>Создать заказ</button>
                <button disabled={disabled} onClick={() => moveOrderToFarm(orders.pop())}>Отправить заказ на ферму</button>
                <div className='order-list'>
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