import React from 'react'

function Coin({name, icon, price, symbol, mktcap, pc1h, pc2h, pc3h, rank, ts, as}) {
  return (
    <>
        <div className='container coin text-center'>
            <h1>Name: {name} [{symbol}]</h1>
            <img src={icon}/><br/><br/>
            <h3>Price: <span id="details">{"$"+price}</span></h3>
            <h3>Price change(1h): <span id="details2">{pc1h+"%"}</span></h3>
            <h3>Price change(1d): <span id="details2">{pc2h+"%"}</span></h3>
            <h3>Price change(1w): <span id="details2">{pc3h+"%"}</span></h3>
            <h3>Available Supply: <span id="details">{as}</span>&nbsp;<i class="fa-solid fa-coins"></i></h3>
            <h3>Total Supply: <span id="details">{ts}</span>&nbsp;<i class="fa-solid fa-coins"></i></h3>
            <h3>Market Cap: <span id="details">{"$"+mktcap}</span></h3>
            <h3>Rank as per Market cap: <span id="details3">{rank}</span></h3>
        </div>
    </>
  )
}

export default Coin
