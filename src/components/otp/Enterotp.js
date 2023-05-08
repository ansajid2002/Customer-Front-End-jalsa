import React from 'react'

const Enterotp = () => {
  return (
    <div className='otp'>
      <div className='otp-container'>
        <h1 className='otp-title'>Forget your password?</h1>
        <p className="otp-text">code has been sent to 91***********99</p>
        <div className="otp-inputs">
          <input type="text" className='otp-input' maxLength={1}/>
          <input type="text" className='otp-input' maxLength={1}/>
          <input type="text" className='otp-input' maxLength={1}/>
          <input type="text" className='otp-input' maxLength={1}/>
        </div>
        <p className='otp-text'>resent code in 55s</p>
        <button className='otp-btn'>VERIFY</button>
      </div>
    </div>
  )
}

export default Enterotp
