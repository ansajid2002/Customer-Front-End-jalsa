import React from 'react'
import "./Women.css"

import Aside from './Aside'
import Mainsection from './Mainsection'

const Women = () => {
  return (
    <div className='mens-main'>
        <div className="aside">
            <Aside/>
        </div>
        <div className='main-section'>
        <Mainsection/>
        </div>
        
        
    </div>
  )
}

export default Women