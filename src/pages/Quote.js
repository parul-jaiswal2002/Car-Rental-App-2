import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Quote.css';

const Quote = () => {
    return (
        <>
            <div className='box' >
                <div className='QuoteContainer'>
                    <div className='wrapper'>

                        <div className='quote'>
                            <h2>Main Quote for the website will be placed here to make understand</h2>

                        </div>

                        <div className='input'>
                            <label>
                                <input type="date" placeholder="startdate" />
                            </label>
                        </div>

                        <div className='input'>
                            <label>
                                <input type="date" placeholder=" enddate" />
                            </label>
                        </div>
                        <Link to="/CarBooking"><button className='check-btn'>
                            check
                        </button></Link>





                    </div>
                </div>

            </div>

        </>
    )
}

export default Quote