import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-5">
          Free equity investment and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
            <img src="media/images/pricingEquity.svg" alt="img"/>
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted">
                All equity delivery investment (NSE, BSE), are absolutely free - ₹0 Brokerage
            </p>
        </div>
        <div className="col-4 p-4 ">
            <img src="media/images/intradayTrades.svg" alt="img"/>
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="text-muted">
                Flate Rs.20 or 0.03%(whichever is lower) per executed order on Intraday trades across equity, currency, and commodity trades
            </p>
        </div>
        <div className="col-4 p-4">
            <img src="media/images/pricingEquity.svg" alt="img"/>
            <h1 className="fs-3">Free direct MF</h1>
            <p className="text-muted">
                All direct mutual fund investment are absolutely free - ₹0 commission & DP charges.
            </p>
        </div>
      </div>      
    </div>
  );
}

export default Hero;
