import React,{Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useGlobalContext } from '../../context';
import { BsFillShareFill } from 'react-icons/bs';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Similarproducts = () => {
    const {mensdata} = useGlobalContext()
    return (
    <div className='mens-detail'>
    <Carousel width="500px">
                {
                    mensdata.map((m) => {
                        const { id,img,title,discription,mrp,sp,star,review } = m
                            
                        return (
                            
                            <div className='mens-info' key={id}>
                        
                            <div className='mens-img-sec'>
                                <Link to={`/mens/${id}`} ><img src={`.${img}`} alt="iiimg" className='mens-img'/></Link>
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
                </Carousel>
            </div>
  )
}

export default Similarproducts  






//  
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>