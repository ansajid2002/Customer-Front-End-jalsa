import React from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const Kboverview = () => { 

    const {id} = useParams()

    const {kbdata} = useGlobalContext()
    
    return (
      <div>
          {
            kbdata.map((singlemen) => {
                
              
              if(singlemen.id === Number(id)) {
                const {img,id ,discription,title,mrp,sp,} = singlemen
                
                return (
                  <div key={id}>
                    <h1>{title}</h1>
                    <p>{discription}</p>
                    <p>{mrp} {sp}</p>
                    <img src={`.${img}`} alt="random" />
                  </div>
                )
              }
              return null
            })
          }
      </div>
    )
    
}

export default Kboverview