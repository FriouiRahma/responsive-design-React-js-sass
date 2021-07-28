import React from 'react';
import fond from '../../images/fond 1.png'

function AfterNavbar() {
    return (
        <div className="wrapper-text">
            <div className="container">
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='title'>
                            BE CAREFUL TO RESPECT THE DESIGN!
                        </div>
                        <div className='text-button'>
                            <div className='text'>
                                Technologies : HTML CSS JS
                                Détail des specs front : Zeplin
                                3 maquettes desktop, tablet et mobile, 2 breakpoints
                                Desktop/ tablet :  1200px (Desktop) / 1199 tablet
                                Tablet / Mobile : 600px (Tablet) / 599 (mobile)
                            </div>
                            <button className='discover'>
                                Let's discover
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fond'>
                <img src={fond} alt="fond" />
            </div>
        </div>

    )
}

export default AfterNavbar
