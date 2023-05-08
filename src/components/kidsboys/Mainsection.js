import React,{useState,useEffect} from 'react'
import "./Mainsection.css"
import { AiOutlineHeart,AiFillStar} from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Mainsection = () => {

    const mensData = [
        {
            id: 1,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 2,
            img: "./images/kidsboys/kb2.png"
        },
        {
            id: 3,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 4,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 5,
            img: "./images/kidsboys/kb2.png"
        },
        {
            id: 6,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 7,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 8,
            img: "./images/kidsboys/kb2.png"
        },
        {
            id: 9,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 1,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 2,
            img: "./images/kidsboys/kb2.png"
        },
        {
            id: 3,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 4,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 5,
            img: "./images/kidsboys/kb2.png"
        },
        {
            id: 6,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 7,
            img: "./images/kidsboys/kb1.png"
        },
        {
            id: 8,
            img: "./images/kidsboys/kb2.png"
        },
        {
            id: 9,
            img: "./images/kidsboys/kb1.png"
        }
    ]
    ////////pagination///////////////////
    const peopData = mensData
    const [page,setPage] = useState(0)
  const [followers,setFollowers] = useState([])
  
  const Paginate =(data) => {
    const itemsPerPage =10
    const numberOfPages = Math.ceil(data.length / itemsPerPage)

    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return data.slice(start, start + itemsPerPage)
    })
    return newFollowers
  }
  
  const data = Paginate(peopData)
  
  useEffect(() => {
    setFollowers(data[page])
  }, [ page])
  


  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
    console.log("next");
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
    console.log("prev");
  }

  const handlePage = (index) => {
    setPage(index)
  }
    /////////////////////////////////////
    return (
        <div>
            <div className='mens-sort-sec'>
            <label for="cars" className="mens-sort">Sort:</label>

            <select name="cars" id="cars" className='mens-popular'>
                <option value="volvo">Popular</option>
                <option value="saab">Branded</option>
                <option value="mercedes">Trending</option>
                <option value="audi">Sales</option>
            </select>
            </div>
            <div className='mens-detail'>
                {
                    mensData.map((m) => {
                        const { img } = m

                        return (<div className='mens-info'>

                            <div className='mens-img-sec'>
                                <img src={img} alt="iiimg" className='mens-img' />
                                <h2 className='mens-img-like'><Link style={{ textDecoration: "none", color: "inherit" }} to="/wishlist"><AiOutlineHeart color='blue' fontSize="2rem"/></Link></h2>
                            </div>
                            <div className='mens-detail-sec'>
                                <h4 className='mens-kalki'>Kalki</h4>
                                <p className='mens-discription'>Silk Patola Kurta Set</p>
                                <h4 className='mens-rate'><span className='mens-rate-mrp'>₹<s>1,500.00</s></span><span className='mens-rate-sp'>₹ 1,000.00</span> </h4>
                                
                                <div className='mens-flex-ratings'>
                                    <div className='mens-flex-ratings-a'>
                                    <p className='mens-rev-star'><AiFillStar color="white"/> 4.5</p>
                                    <p className='mens-flex-num'>3,456  reviews</p>
                                    </div>
                                    <p className='mens-flex-icons'><BsFillShareFill color=" blue" font-size="1.5rem"/></p>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>

            
            <div className='pages'>
            <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
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
              next
            </button>
          </div>

            </div>
        </div>
    )
}

export default Mainsection

