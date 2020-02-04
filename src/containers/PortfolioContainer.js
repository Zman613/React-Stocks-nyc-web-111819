import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    
    let stocks = this.props.stocks

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            stocks.map(stock => {return <Stock name={stock.name} price={stock.price} key={stock.id} ticker={stock.ticker} action={this.props.sellStock} id={stock.id}/>})
          }
      </div>
    );
  }

}

export default PortfolioContainer;

