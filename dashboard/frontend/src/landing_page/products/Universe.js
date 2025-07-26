import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platform
        </p>

        <div className="col-4 p-3 mt-5">
          <img src= "media/images/smallcaseLogo.png" alt="logo" style={{width:"50%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src= "media/images/streakLogo.png" alt="logo" style={{width:"50%"}}/>
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="logo" style={{width:"50%"}}/>
          <p className="text-small text-muted">Option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src= "media/images/zerodhaFundhouse.png" alt="logo" style={{width:"50%"}}/>
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src= "media/images/goldenpiLogo.png" alt="logo" style={{width:"50%"}}/>
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src= "media/images/dittoLogo.png" alt="logo" style={{width:"50%"}}/>
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto",}}>SignUp Now</button>
      </div>
    </div>
  );
}

export default Universe;
