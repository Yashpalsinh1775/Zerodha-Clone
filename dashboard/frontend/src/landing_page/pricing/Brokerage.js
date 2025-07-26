import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className=" row p-5 mt-5 border-top">
        <div className="col-8 p-4">
          <a href="edf" style={{textDecoration:"none"}}><h3 className="text-center fs-5 mb-4">Brokerage calculate</h3></a>
            <ul style={{textAlign:"left", lineHeight:"2.3", fontSize:"12px"}} className="text-muted">
                <li className="mb-3">
                Call & Trade and RMS auto-squareoff: Additional charges of 250+
                GST per order.
                </li>
                <li className="mb-3">Digital contract notes will be sent via e-mail.</li>
                <li className="mb-3">
                Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.
                </li>
                <li className="mb-3">
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
                </li>
                <li className="mb-3">
                For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
                </li>
                <li className="mb-3">              
                    If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.
                </li>
            </ul>
        </div>
        <div className="col-4 p-4">
          <a href="gdf" style={{textDecoration:"none"}}><h3 className="text-center fs-5" >List of charges</h3></a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
