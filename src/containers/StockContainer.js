import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let stocks = this.props.stocks

    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          stocks.map(stock => {return <Stock name={stock.name} price={stock.price} key={stock.id} ticker={stock.ticker} action={this.props.buyStock} id={stock.id}/>})
        }
      </div>
    );
  }

}

export default StockContainer;
