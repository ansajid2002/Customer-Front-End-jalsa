import React from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const Hloverview = () => { 

    const {id} = useParams()

    const {hldata} = useGlobalContext()
    
    return (
      <div>
          {
            hldata.map((singlemen) => {
                
              
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

export default Hloverview