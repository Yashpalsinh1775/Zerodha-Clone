import React from 'react';

function Stats() {
    return (
        <div className='container p-'>
            <div className='row p-5'>
                <div className='col-6 p-3'>
                    <h1 className='fs-2 mb-5'>Trust With Confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>
                        That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crore worth of equilty     inverstments.
                    </p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>
                        No gimmicks, apam, "gamification", or annoying push notificaton. High quality apps that you use at your pace, the way you like.
                    </p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'> 
                        Not just an app, but a whole ecosystem. Our inverstments in 30+ fintech startup offer you tailord services specific to your needs.
                    </p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>
                        With initiatives like Nudge and Kill Swith, we don't just facilitate transaction, but actively help you do better with your money.
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' alt='' style={{width:"90%"}}/>
                    <div className='text-center'>
                        <a href='fbd' className='mx-5' style={{textDecoration:"none"}}>Explore our Product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='fbd' style={{textDecoration:"none"}}>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;