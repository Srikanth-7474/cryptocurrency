// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoCurrenciesData: []}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogoUrl: eachData.currency_logo,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))

    console.log(formattedData)

    this.setState({isLoading: false, cryptoCurrenciesData: formattedData})
  }

  render() {
    const {isLoading, cryptoCurrenciesData} = this.state
    return (
      <div className="page-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
