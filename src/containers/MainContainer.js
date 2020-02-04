import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    stocksBought: [],
    sortStocks: [],
    radio: "",
    filter: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stocks => {
      this.setState({
        stocks: stocks,
        sortStocks: stocks
      })
    })
  }

  buyStock = (id) => {
    let stock = this.state.stocks.find(stock => stock.id === id)

    if (!this.state.stocksBought.includes(stock)){
      this.setState(prevState => ({ 
        stocksBought: [...prevState.stocksBought, stock]
      }))
    }
  }

  sellStock = (id) => {
    let soldStock = this.state.stocks.find(stock => stock.id === id)

    this.setState(prevState => ({
      stocksBought: prevState.stocksBought.filter(stock => stock !== soldStock)
    }))
  }

  sort = (type) => {
    let stocks = this.state.filter === "" ? this.state.stocks : this.state.stocks.filter(stock => stock.type === this.state.filter)
    console.log(stocks)
    if (type === "Alphabetically"){
      this.setState({
        sortStocks: stocks.sort((a, b) => a.name.localeCompare(b.name)),
        radio: type
      })
    } else if (type === 'Price') {
      this.setState({
        sortStocks: stocks.sort((a, b) => (a.price - b.price)),
        radio: type
      }) 
    } 
  }

  filter = (type) => {
    this.setState({
      filter: type
    })
  }

  render() {
    
    return (
      <div>
        <SearchBar sort={this.sort} radio={this.state.radio} filter={this.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.sortStocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.stocksBought} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

