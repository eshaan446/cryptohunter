import React from 'react'
import { useEffect, useState } from "react"
import Axios from 'axios'
import Coin from './Coin'
import "./App.css"
import { Input } from '@material-ui/core'


function App() {
    const [allcoins, setallcoins] = useState([])
    const [searchword, setsearch] = useState("");
    useEffect(() => {
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((resp) => {
            setallcoins(resp.data.coins)
        });
    }, [])
    const filterCoins = allcoins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchword.toLowerCase());
    })

    return (
        <>
            <div className='body bg-dark'>
                <div class="d-flex h-100 text-center text-white bg-dark">

                    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                        <header class="mb-auto">
                            <div>
                                <h3 class="float-md-start mb-0"><i class="fa-solid fa-coins"></i>&nbsp;<span id="title">CryptoHunter</span>&nbsp;<i class="fa-solid fa-coins"></i></h3>
                            </div>
                        </header>
                        <main class="px-3 my-4">
                            <h1>Track price of<span id="title">&nbsp;top 100 cryptocurrencies in the world</span>.</h1>
                            <p class="lead">Get real time price and live details of your cryptocurrency to <span id="title">invest wisely</span>.</p>
                        </main>
                    </div>
                </div>
                <div className="container-flush text-center">
                    <div className='cryptoh bg-dark'>
                        <Input id="inp" placeholder='Search any coin.....' onChange={(e) => { setsearch(e.target.value) }} />
                    </div>
                    <div className='cryptod bg-light'>{filterCoins.map((coin) => {
                        return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} mktcap={coin.marketCap}
                            pc1h={coin.priceChange1h} pc2h={coin.priceChange1d} pc3h={coin.priceChange1w} rank={coin.rank} ts={coin.totalSupply} as={coin.availableSupply} />
                    })}</div>
                </div>
                <div class="d-flex h-100 text-center text-white bg-dark">

                    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

                        <main class="px-3">
                            <h6>Made with ❤️ by Eshaan</h6>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
