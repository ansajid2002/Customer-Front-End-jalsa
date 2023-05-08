import React from 'react'
import "./Mainsection.css"
import { AiOutlineHeart,AiFillStar} from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Mainsection = () => {

    const mensData = [
        {
            id: 1,
            img: "./images/mens/m1.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 2,
            img: "./images/mens/m2.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 3,
            img: "./images/mens/m3.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 4,
            img: "./images/mens/m4.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 5,
            img: "./images/mens/m1.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 6,
            img: "./images/mens/m2.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 7,
            img: "./images/mens/m3.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 8,
            img: "./images/mens/m4.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 9,
            img: "./images/mens/m1.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 10,
            img: "./images/mens/m2.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 11,
            img: "./images/mens/m3.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        },
        {
            id: 12,
            img: "./images/mens/m4.png",
            title:"kalki",
            discription:"Silk Patola Kurta Suit",
            mrp:"1,500",
            sp:"1,000",
            star:4.5,
            review:"3,456"
        }
    ]

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
                        const { id,img,title,discription,mrp,sp,star,review } = m

                        return (<div className='mens-info' key={id}>

                            <div className='mens-img-sec'>
                                <img src={img} alt="iiimg" className='mens-img' />
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
                                    <p className='mens-flex-icons'><BsFillShareFill color=" blue" font-size="1.5rem"/></p>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
            <div className='pages'>

            </div>
        </div>
    )
}

export default Mainsection


// return (<div className='single-men'>
//                         <div className='img-sec'>
//                             <img src={img} alt="iiimg" className='img-singles'/>
//                             <h2 className='img-like'><Link style={{textDecoration:"none",color:"inherit"}} to="/wishlist"><AiOutlineHeart color='blue'/></Link></h2>
//                         </div>
//                         <div className='img-details'>
//                             <h4 className='kalki'>Kalki</h4>
//                             <p className='para'>Silk Patola Kurta Set</p>
//                             <h4 className='img-rate'>₹<s>1,500.00</s>  ₹ 1,000.00</h4>
//                             <div className='flex-rat'>
//                                 <p className='rating-num'>3,456  reviews</p>
//                                 <p className='rating-icon'><BsFillShareFill color=" blue" /></p>
//                             </div>
//                         </div>
//                         </div>)