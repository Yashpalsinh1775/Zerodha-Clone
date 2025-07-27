import React from 'react';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Images' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more.</p>

                <a 
                    href='https://zerodha-clone-dashboard-psk3.onrender.com'
                    target='_blank'  
                    rel='noopener noreferrer' 
                    className='p-2 btn btn-primary fs-5'
                    style={{ width: "20%", margin: "0 auto", display: "inline-block" }}
                >
                    SignUp Now
                </a>
            </div>
        </div>
    );
}

export default Hero;
