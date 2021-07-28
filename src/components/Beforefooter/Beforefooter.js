import React from 'react'
import cancel from '../../images/icon 2.png'

import brain from '../../images/icon 3.png'

import warning from '../../images/icon 1.png'


function Beforefooter() {
    return (
        <div className="container">
            <div className="wrapper">
                <span className="line"></span>
                <div className="text">
                    Don’t forget about the spacing! It’s
                    very important

                </div>
                <div className="row">
                    <div className="col-sm-12  col-lg-4">
                        <div className="text-content">
                            <div className="image">
                                <img src={warning} alt="" />
                                <div className="other-text">
                                    Lorem ipsum
                                </div>
                            </div>


                            <div className="paragraphe">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua.Ut enim ad minim
                                veniam,quis nostrud
                                exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12  col-lg-4">
                        <div className="text-content">
                            <div className="image">
                                <img src={cancel} alt="" />
                                <div className="other-text">
                                    Lorem ipsum
                                </div>
                            </div>

                            <div className="paragraphe">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua.Ut enim ad minim
                                veniam,quis nostrud
                                exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12  col-lg-4">
                        <div className="text-content">
                            <div className="image">
                                <img src={brain} alt="" />
                                <div className="other-text">
                                    Consulting
                                </div>
                            </div>

                            <div className="paragraphe">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua.Ut enim ad minim
                                veniam,quis nostrud
                                exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn'>It’s almost done, don’t give up</button>

            </div>
        </div>
    )
}

export default Beforefooter
