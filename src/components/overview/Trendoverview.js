import React from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const Trendoverview = () => { 

    const {id} = useParams()

    const {trenddata} = useGlobalContext()
    
    return (
      <div>
          {
            trenddata.map((singlemen) => {
                
            
              if(singlemen.id === Number(id)) {
                const {img,id ,discription,title,mrp,sp,} = singlemen
                
                return (
                  <div key={id}>
                    <h1>{title}</h1>
                    <p>{discription}</p>
                    <p>{mrp} {sp}</p>
                    <img src={`.${img}`} alt="randeeom" />
                  </div>
                )
              }
              return null
            })
          }
      </div>
    )
    
}

export default Trendoverview