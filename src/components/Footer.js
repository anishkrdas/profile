import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>&copy;2021 Anish Kumar Das.</p>
                        </div>
                        <div className="d-flex">
                            <p>Design by anishkrdas@outlook.com</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:+917768862416">+091-776-886-2416</a>
                        </div>
                    </div>
                    {/*<div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a><br/>
                                <a className="footer-nav">About</a><br/>
                                <a className="footer-nav">Profile</a><br/>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Techs.</a><br/>
                                <a className="footer-nav">Contact</a><br/>
                                <a className="footer-nav">Accolades</a><br/>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
            
        </div>
    )
}

export default Footer
