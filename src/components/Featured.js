import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Featured.css'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

const Featured = () => {

  const [data, setData] = useState(null)

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  if (!data) return null

  return (
    <div className='featured'>
      <div className='container'>
        <div className='left'>
          <h2>Explore as principais criptomoedas, como Bitcoin, Ethereum e Dogecoin.</h2>
          <p>Veja todos os ativos disponíveis: Criptomoedas e NFTs</p>
          <button className='btn'>Ver mais moedas</button>
        </div>

        <div className='right'>
          {data.map((coin) => (
            <div className='card' key={coin.id}>
              <div className='top'>
                <img src={coin.image} alt={coin.name} />
              </div>

              <div>
                <h5>{coin.name}</h5>
                <p>{coin.current_price.toLocaleString()}</p>
              </div>

              {coin.price_change_percentage_24h < 0 ? (
                <span className='red'>
                  <FiArrowDown className='icon' />
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className='green'>
                  <FiArrowUpRight className='icon' />
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featured