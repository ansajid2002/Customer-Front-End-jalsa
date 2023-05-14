import React, { useState } from 'react'

import "./Forgetpass.css"

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Forgetpass = () => {
  const [value, setValue] = useState()
  // function Example() {
    // `value` will be the parsed phone number in E.164 format.
  //   // Example: "+12133734253".
  //   
  //   return (
      // <PhoneInput
      //   placeholder="Enter phone number"
      //   value={value}
      //   onChange={setValue}/>
  //   )
  // }
  return (
    <div className="forgetpass">
        <div className='forgetpass-container'>
        <h1 className='forgetpass-title'>Forget your Password?</h1>
        <p className="forgetpass-text">Enter your Email and Phone number and recover your account</p>
        <input type="text" placeholder='E-mail' className='forgetpass-input'/>

        <div className="forgetpass-hrs">
            <p className='forgetpass-hr'></p>
            <p className='forgetpass-or'>or</p>
            <p className='forgetpass-hr'></p>
        </div>
        
        
        <PhoneInput
        placeholder="Enter phone number"
        type="tel"
        value={value}
        onChange={setValue}
        className=' forgetpass-input forgetpass-input-num'
        />
        

        <button className="forgetpass-button">RESET PASSWORD</button>
        </div>
    </div>
  )
}

export default Forgetpass