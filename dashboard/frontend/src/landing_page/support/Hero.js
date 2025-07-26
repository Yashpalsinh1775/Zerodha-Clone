import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="sc">
          Track Tickets
        </a>
      </div>
      <div className="row p-3 m-5">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a Tickets.
          </h1>
          <input placeholder="E.g how do i activate F&O, why is my order getting rejected." />
          <br />
          <ol>
            <li><a href="f">Track Acount Openning</a></li>
            <li><a href="f">Track segment activation</a><br /></li>
            <li><a href="f">Intraday margins</a></li>
            <li><a href="f">Kite user manual</a></li>  
          </ol>
        </div>
        <div className="col-6 p-3">
          <h1>Featured</h1>
          <ol>
            <li><a href="f">Current Takeover and Delisting - January 2024</a></li>
            <li><a href="f">Latest Intraday leverage - MIS & CO</a></li>
          </ol>        
        </div>
      </div>
    </section>
  );
}

export default Hero;
