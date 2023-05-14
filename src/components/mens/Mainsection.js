import React,{useState,useEffect} from 'react'
import "./Mainsection.css"
import { AiOutlineHeart,AiFillStar} from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import { Link ,} from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

import { useGlobalContext } from '../../context'

const Mainsection = () => {
    
  const {mensdata} = useGlobalContext()
    
    ////////pagination///////////////////
    
    const [page,setPage] = useState(0)
  
    const [items,setItems] = useState([])
  
  const Paginate =(data) => {
    const itemsPerPage =12
    const numberOfPages = Math.ceil(data.length / itemsPerPage)

    const newItems = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return data.slice(start, start + itemsPerPage)
    })
    return newItems
  }
  
  const data = Paginate(mensdata)
  useEffect(() => {
    setItems(data[page])
  }, [page])
  

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  
  }
  const handlePage = (index) => {
    setPage(index)
  }
    /////////////////PAGINATION ENDS////////////////////

    
    return (
        <div>
            <div className='mens-sort-sec'>
            <label htmlFor="cars" className="mens-sort">Sort:</label>

            <select name="cars" id="cars" className='mens-popular'>
                <option value="volvo">Popular</option>
                <option value="saab">Branded</option>
                <option value="mercedes">Trending</option>
                <option value="audi">Sales</option>
            </select>
            </div>
            <div className='mens-detail'>
                {
                    items.map((m) => {
                        const { id,img,title,discription,mrp,sp,star,review } = m

                        return (<div className='mens-info' key={id}>

                            <div className='mens-img-sec'>
                                <Link to={`/mens/${id}`} ><img src={img} alt="iiimg" className='mens-img'/></Link>
                                <h2 className='mens-img-like'><Link style={{ textDecoration: "none", color: "inherit" }} to="/wishlist"><AiOutlineHeart color='blue' fontSize="2rem"/></Link></h2>
                            </div>
                            <div className='mens-detail-sec'>
                                <h4 className='mens-kalki'>{title}</h4>
                                <p className='mens-discription'>{discription}</p>
                                <h4 className='mens-rate'><span className='mens-rate-mrp'>₹<s>{mrp}</s></span><span className='mens-rate-sp'>₹ {sp}</span> </h4>
                                
                                <div className='mens-flex-ratings'>
                                    <div className='mens-flex-ratings-a'>
                                    <p className='mens-rev-star'><AiFillStar color="white"/> {star}</p>
                                    <p className='mens-flex-num'>{review}  reviews</p>
                                    </div>
                                    <p className='mens-flex-icons'><BsFillShareFill color=" blue" fontSize="1.5rem"/></p>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
            <div className='btn-container'>
            
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              <IoIosArrowForward/>
            </button>
          </div>
        </div>
    )
}

export default Mainsection


