import React from 'react';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Images' className='mb-5'/>
                <h1 className='mt-5'>Inverst in everything</h1>
                <p>Online plateform to inverst in stocks, derivatives, mutual funds, and more.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto",}}>SignUp Now</button>
            </div>
        </div>
    );
}

export default Hero;