// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrenciesData} = props

  return (
    <div>
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency Tracker"
        className="crypto-currency-img"
      />
      <div className="crypto-currencies-list">
        <div className="list-header">
          <p className="list-coin-type-heading">Coin Type</p>
          <div className="usd-and-euro-values-container">
            <p className="list-coin-value-heading">USD</p>
            <p className="list-coin-value-heading">EURO</p>
          </div>
        </div>
        <ul className="list-body">
          {cryptoCurrenciesData.map(currency => (
            <CryptocurrencyItem cryptoCurrencyData={currency} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
