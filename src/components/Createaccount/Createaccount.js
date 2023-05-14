import React from 'react'
import "./Createaccount.css"


const Createaccount = () => {
    return (
        <div className='createacc'>
            <div className='createacc-container'>
                <h1  className='createacc-title'>Create an account and discover the benefits</h1>
                <p className="createacc-text">his is the login form containing two lines This is the login form containing two lines his is the login form containing two lines This is the login </p>

                <div className='createacc-inputs'>
                    <input type="text" placeholder='First Name' className='createacc-input' />
                    <input type="text" placeholder='Last Name' className='createacc-input' />
                    <input type="text" placeholder='Email' className='createacc-input' />
                    <input type="text" placeholder='Password' className='createacc-input' />
                </div>

                <div className="createacc-agree">
                    <input type="radio" />
                    <label >I agree to the Fashion Jalsa terms of Services and Privacy Policy</label>
                </div>
                <button className="createacc-button">SIGN UP</button>
                <p className='createacc-already'>Are you already a member?</p>
            </div>
        </div>
    )
}

export default Createaccount