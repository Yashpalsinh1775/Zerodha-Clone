import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(240, 240, 240)"}}>
        <div className='container border-top mt-5' >
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/logo.svg' style={{width:"50%"}}/>
                    <p>
                        &copy;2010 - 2024, Not Zerodha Broking Ltd, All rights reserved.
                    </p>
                </div>
                <div className='col'>
                    <p>Company</p>
                        <a href='' style={{textDecoration:"none"}}>About</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Products</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Pricing</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Referral programme</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Careers</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Press & media</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Zerodha cares (CSR)</a> <br />
                </div>
                <div className='col'>
                    <p>Support</p>
                        <a href='' style={{textDecoration:"none"}}>About</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Contact</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Support portal</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Z-Correct blog</a> <br />
                        <a href='' style={{textDecoration:"none"}}>List of charges</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Download & resources</a> <br />
                </div>
                <div className='col'>
                    <p>Account</p>
                        <a href='' style={{textDecoration:"none"}}>About</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Open an account</a> <br />
                        <a href='' style={{textDecoration:"none"}}>Fund transfer</a> <br />
                        <a href='' style={{textDecoration:"none"}}>60 day challenge</a> <br />
                </div> 
                <div className='mt-5text-small text-muted mt-5' style={{fontSize:"14px"}}>
                    <p>
                        Zerodha is one of India’s largest and most trusted stockbroking platforms, known for pioneering the discount broking model in the country. Founded in 2010 by Nithin Kamath and headquartered in Bengaluru, Zerodha disrupted traditional brokerage by offering zero brokerage on equity delivery trades and a flat ₹20 per order for intraday and F&O trades. With over 7.5 million active users, it ranks among the top stockbrokers in India. Zerodha provides access to equity, derivatives, commodities, and currency markets through its in-house trading platform, Kite, which is widely praised for its speed, simplicity, and advanced tools. The company also offers mutual fund investments via Coin and portfolio tracking via Console. As a SEBI-registered broker and member of NSE, BSE, and MCX, Zerodha ensures strict regulatory compliance and client fund security. Beyond trading, it invests in financial literacy through its Varsity education platform and has expanded into asset management (Zerodha Fund House) and lending (Zerodha Capital). Though highly profitable and growing, Zerodha remains privately held, with no plans to list on the stock market in the near future. It is especially favored by cost-conscious retail traders and long-term investors seeking a reliable, transparent, and technology-driven trading experience.
                    </p>
                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.Mandatory details for filling complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID, Benefits: Effective Comminication, Speedy redressal of the grievances.
                    </p>
                    <p>
                        investments in securities market are subject to market risks: read all the related decuments carefully before inversting.
                    </p>
                    
                    <p>
                        Zerodha Broking Ltd. is a member of NSE, BSE, and MCX. It is also a depository participant with CDSL and NSDL. The company is registered with SEBI under the Securities and Exchange Board of India (SEBI) Registration No. INZ000031633. Zerodha is known for its innovative approach to stockbroking, offering a user-friendly platform, low-cost trading options, and a commitment to financial education through its various initiatives.
                    </p>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;