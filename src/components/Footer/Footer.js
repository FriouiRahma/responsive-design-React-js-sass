import React from 'react'
import logo from '../../icons/logo.png';
import twitter from '../../icons/twitter.png';
import facebook from '../../icons/facebook.png';
import linkedin from '../../icons/linked in.png';

function Footer() {
    return (
        <div className="footer">
            <div className='container'>
                <div className="row">
                    <div className='col-sm-4'>
                        <div  className='image'>
                        <img src={logo} alt="logo" className="logo" />
                    
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className="wrapper-email">
                            <div className="top-email">
                                Send us your email to stay tuned
                            </div>
                            <form className="xoxo-form" >
                                <input type="text" placeholder="your email@email.com" />
                                <button className='xoxo-icon'>
                                   xoxo
                                </button>
                            </form>
                            <div className="bottom-email">
                                © 2020. All rights reserved.
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="right">
                            <div className="follow">
                                Follow us
                            </div>
                            <div className='logos'>
                                <div className='facebook'>
                                    <img src={facebook} alt="logo" className="Facebook" />
                                </div>
                                <div className="linkedin">
                                    <img src={linkedin} alt="logo" className="linkedin" />
                                </div>
                                <div className="twitter">
                                    <img src={twitter} alt="logo" className="Twitter" />
                                </div>
                            </div>
                           
                        </div>
                       
                    </div>
                <div className="version-mobile">
                   
                       
                            <div  className="image-mobile">
                            <img src={logo} alt="logo" className="logo" />
                            </div>
                        
                        
                            <div className="rights-mobile">
                            © 2020. All rights reserved.
                            </div>
                      

            

                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
