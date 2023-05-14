import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./overview.css"
import { AiFillStar, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsBoxSeam, BsChevronDown, BsFacebook, BsFillShareFill, BsTruck, BsWhatsapp } from "react-icons/bs"
import { FaInstagram } from 'react-icons/fa';
import { ImTicket } from "react-icons/im"
import Countdown from 'react-countdown';
import { useState } from 'react';

//img-icons
import one from "../../images/product care/1.png"
import two from "../../images/product care/2.png"
import three from "../../images/product care/3.png"
import four from "../../images/product care/4.png"
import Comments from './Comments';
import { useEffect } from 'react';
import Similarproducts from './Similarproducts';

const Mensoverview = () => {

  const { id } = useParams()
  const { mensdata } = useGlobalContext()

  //countdown logic
  ////FOR FINDING OUT TIME FOR COUNTDOWN
  let year = new Date().getFullYear()
  let month = "May"     //enter month eg  "January,April"
  let date = 20       //Enter end date eg. 20,22,23

  const timeStr = `${month} ${date}, ${year}`

  let timeNow = Date.now()
  let timeEnd = Date.parse(timeStr)
  let remainingTime = timeEnd - timeNow
  ////////////////////////////////////////////////////////

  //for rendering the page from top after the route changes
  useEffect(() => {
    window.scroll(0,0)
  },[])
  //counter
  const [count, setCount] = useState(0)

  return (
    <div>
      {
        mensdata.map((singlemen) => {


          if (singlemen.id === Number(id)) {
            const { img, id, discription, title, mrp, sp, review, star } = singlemen

            return (
              <div key={id} className='ov-container'>
                <div className="ov-top" >
                  <div className='ov-top-left' >
                    <img src={`.${img}`} alt="ovimg" className='ov-top-left-1' />
                    <div className='ov-top-left-2'>
                      <img src={`.${img}`} alt="ovimg" className='ov-top-left-2i' />
                      <img src={`.${img}`} alt="ovimg" className='ov-top-left-2i' />
                      <img src={`.${img}`} alt="ovimg" className='ov-top-left-2i' />
                      <img src={`.${img}`} alt="ovimg" className='ov-top-left-2i' />
                    </div>
                  </div>
                  <div className='ov-top-right' >
                    <h4 className='ov-kalki'>{title}</h4>
                    <p className='ov-discription'>{discription}</p>
                    <h4 className='ov-rate'><span className='ov-rate-mrp'>₹<s>{mrp}</s></span><span className='ov-rate-sp'>₹ {sp}</span> <span className='ov-off'>(30% off)</span></h4>

                    <div className='ov-flex-ratings'>
                      <div className='ov-flex-ratings-a'>
                        <p className='ov-rev-star'><AiFillStar color="white" style={{ marginRight: ".3rem" }} /> {star}</p>
                        <p className='ov-flex-num'>{review}  reviews</p>
                      </div>
                    </div>
                    <div className="ov-colors">
                      <h2 className="ov-check-title">COLOURS</h2>
                      <div className="color-con">


                        <div className="ov-red"></div>
                        <div className="ov-blue"></div>
                        <div className="ov-green"></div>
                        <div className="ov-yellow"></div>
                        <div className="ov-pink"></div>
                      </div>
                    </div>

                    <div className="ov-checkbox">
                      <h2 className="ov-check-title">SIZE</h2>
                      <div className="ov-kg-sizes">
                        <div className="ov-kg-s">XS</div>
                        <div className="ov-kg-s">S</div>
                        <div className="ov-kg-s">M</div>
                        <div className="ov-kg-s">L</div>
                        <div className="ov-kg-s">XL</div>
                      </div>
                    </div>
                    <div>
                      <h2 className="ov-check-title">ADD ON'S</h2>
                      <input type="checkbox" id="mens-l" className="ov-box" />
                      <label htmlFor="mens-l" className='ov-l'>Unstiched Fabric</label>
                      <span className='ov-999'> ₹ 999</span>
                      <br />
                      <input type="checkbox" id="mens-m" className="ov-box" />
                      <label htmlFor="mens-m" className='ov-l'>Ready size stitching</label>
                      <span className='ov-999'> ₹ 999</span>
                      <br />
                    </div>
                    <div className='ov-extra-features'>
                      <div className='ov-features'>
                        <BsBoxSeam className='extra-features-icon' />
                        <div>
                          <h3 style={{ fontSize: ".8rem", marginBottom: "0" }}>Easy Returns</h3>
                          <p style={{ fontSize: ".7rem", marginTop: "0.2rem" }}>We Have 7 Days Easy Return Policy</p>
                        </div>
                      </div>
                      <div className='ov-features'>
                        <BsTruck className='extra-features-icon' />
                        <div>
                          <h3 style={{ fontSize: ".8rem", marginBottom: "0" }}>Cash On Delivery</h3>
                          <p style={{ fontSize: ".7rem", marginTop: "0.2rem" }}>Pay When You Recieve The Order</p>
                        </div>
                      </div>
                      <div className='ov-features'>
                        <BsBoxSeam className='extra-features-icon' />
                        <div>
                          <h3 style={{ fontSize: ".8rem", marginBottom: "0" }}>Delivery Options</h3>
                          <p style={{ fontSize: ".7rem", marginTop: "0.2rem" }}>Free Delivery On Order Above 499/-</p>
                        </div>
                      </div>

                    </div>
                    <div className='ov-pincheck'>
                      <input className='ov-inputcheck' placeholder='Enter Delivery Pincode' />
                      <button className='ov-check'>Check</button>
                    </div>
                    <div className='ov--btns'>
                      <button className='ov-addsub' onClick={() => {
                        setCount((prev) => {
                          if (prev < 1) {
                            return prev + 0
                          }
                          return prev - 1
                        })
                      }}>{<AiOutlineMinus />}</button>
                      <span className='ov-count'>{count}</span>
                      <button className='ov-addsub' onClick={() => { setCount((prev) => prev + 1) }}>{<AiOutlinePlus />}</button>
                      <button className='ov-addsub-a' >ADD TO CART</button>
                      <button className='ov-addsub-a' style={{ background: "blue" }}>BUY NOW</button>
                    </div>
                    <div className='ov-wishexplore'>
                      <div className='ov-wishexplore-1  '>
                        <p style={{ fontSize: "1.3rem", marginRight: ".2rem" }}>Add To Wishlist:</p>
                        <AiOutlineHeart color="blue" fontSize="2rem" />
                      </div>
                      <div className='ov-wishexplore-1'>
                        <p style={{ fontSize: "1.3rem", marginRight: ".7rem" }}>Explore For More:</p>
                        <div className='ov-explore-icons'>
                          <FaInstagram color="blue" fontSize="2rem" style={{ marginRight: ".9rem" }} />
                          <BsFacebook color="blue" fontSize="2rem" style={{ marginRight: ".9rem" }} />
                          <BsWhatsapp color="blue" fontSize="2rem" />
                        </div>
                      </div>

                    </div>
                    <div className='ov-spoffer'>
                      <h2 className="ov-check-title">Special Offer</h2>
                      <p style={{ fontSize: "1.2rem", marginBottom: "0rem" }}><ImTicket />  Buy 1 Get 2</p>
                      <p style={{ fontSize: "1.2rem", marginBottom: "0rem", marginTop: "0.3rem" }}><ImTicket /> Use Code "HELLO" For 10% Off</p>
                      <p style={{ fontSize: "1.2rem", marginBottom: "3rem", marginTop: "0.3rem" }}><ImTicket /> Coupon Discount: Rs. 140 Off (Check Cart For Final Savings)</p>
                    </div>
                    <div className='ov-countdown-div'>
                      <Countdown date={Date.now() + remainingTime} className='ov-countdown'>
                        <p className="countdown-msg">SALE ENDS</p>
                      </Countdown>
                      <p className="countdown-notation">Days : Hrs : Mins : sec</p>
                    </div>

                  </div>
                </div>

                {/* //bottom half */}
                <div className='ov-bottom-half' style={{ paddingLeft: "1.5rem" }}>
                  <div className='ov-specifications'>
                    <h2 style={{ fontSize: "2.2rem", marginBottom: ".6rem" }}>Specification</h2>
                    <div className='ov-spec' >
                      <div className='ov-spec-1' >
                        <p style={{ marginBottom: "0", marginTop: "0.4rem" }}>Weight:<span style={{ marginLeft: "2rem" }}>250 Gram</span></p>
                        <p style={{ marginTop: "1rem", marginBottom: "0" }}>Size:<span style={{ marginLeft: "4.2rem" }}>L</span></p>
                      </div>
                      <div className='ov-extra-features ov-spec-2' >
                        <div className='ov-features' style={{ marginTop: "0" }}>
                          <BsBoxSeam className='extra-features-icon' style={{ marginTop: "1.1rem" }} />
                          <div>
                            <h3 style={{ fontSize: "1rem", marginBottom: "0" }}>Easy Returns</h3>
                            <p style={{ fontSize: ".8rem", marginTop: "0.2rem" }}>We Have 7 Days Easy Return Policy</p>
                          </div>
                        </div>
                        <div className='ov-features' style={{ marginTop: "0" }}>
                          <BsTruck className='extra-features-icon' style={{ marginTop: "1.1rem" }} />
                          <div>
                            <h3 style={{ fontSize: "1rem", marginBottom: "0" }}>Cash On Delivery</h3>
                            <p style={{ fontSize: ".8rem", marginTop: "0.2rem" }}>Pay When You Recieve The Order</p>
                          </div>
                        </div>
                        <div className='ov-features' style={{ marginTop: "0" }}>
                          <BsBoxSeam className='extra-features-icon' style={{ marginTop: "1.1rem" }} />
                          <div>
                            <h3 style={{ fontSize: "1rem", marginBottom: "0" }}>Delivery Options</h3>
                            <p style={{ fontSize: ".8rem", marginTop: "0.2rem" }}>Free Delivery On Order Above 499/-</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>






                  <div className='ov-discription' >
                    <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem", marginTop: "3rem" }}>Details and Product Description</h2>
                    <p>Details and Product Description</p>
                    <p>Style No : SG117397</p>
                    <p>Color : Yellow</p>
                    <p>Fabric : Silk</p>
                    <p>Work : Print</p>
                    <p>Manufactured / Packed By : suarabhakti Goods Pvt ltd</p>
                    <p>Inclusive of all taxes</p>
                    <p>Golden Yellow band jackety in tailored in silk fabric in patola print</p>
                    <p>The Jacket is Paired with a matching silk printed kurta</p>
                    <p>The patola jacket is crafted in a mandarin collar with cut sleeves</p>
                  </div>
                  <div className='ov-care' >
                    <h2 style={{ fontSize: "2rem", marginBottom: ".4rem", marginTop: "3rem" }}>Product Care</h2>
                    <p className='ov-care-flex'>
                      <img src={one} alt="icons" width="40px" style={{ marginRight: ".4rem" }} />
                      <span> Do Not Use Bleach</span>
                    </p>
                    <p className='ov-care-flex'>
                      <img src={two} alt="icons" width="40px" style={{ marginRight: ".4rem" }} />
                      <span> Do Not Tumble Dry</span>
                    </p>
                    <p className='ov-care-flex'>
                      <img src={three} alt="icons" width="40px" style={{ marginRight: ".4rem" }} />
                      <span> Dry CleanWith Tetrachloroethylene</span>
                    </p>
                    <p className='ov-care-flex'>
                      <img src={four} alt="icons" width="40px" style={{ marginRight: ".4rem" }} />
                      <span> Iron At Maximum 110<sup>.</sup>C/230<sup>.</sup>F</span>
                    </p>
                  </div>
                  <div >
                    <h2 style={{ fontSize: "2rem", marginBottom: ".4rem", marginTop: "3rem" }}>Reviews</h2>
                    <div className='ov-reviews'>
                      <div className='ov-reviews-1' style={{ textAlign: "center", marginLeft: "2rem", marginRight: "5rem" }}>
                        <h3 style={{ fontSize: "2rem", marginBottom: "0" }}>{star}</h3>
                        <p style={{ fontSize: "1.3rem", marginTop: ".5rem", marginBottom: ".5rem" }}>{review} Reviews</p>
                        <p style={{ marginTop: "0" }}>
                          <AiFillStar color="blue" fontSize="2rem" style={{ marginRight: ".4rem" }} />
                          <AiFillStar color="blue" fontSize="2rem" style={{ marginRight: ".4rem" }} />
                          <AiFillStar color="blue" fontSize="2rem" style={{ marginRight: ".4rem" }} />
                          <AiFillStar color="blue" fontSize="2rem" style={{ marginRight: ".4rem" }} />
                          <AiFillStar color="rgb(235, 232, 232)" fontSize="2rem" style={{ marginRight: ".4rem" }} />
                        </p>
                      </div>
                      <div className='ov-reviews-2'>

                        <div className='ov-reviews-2s'>
                          <p style={{ marginTop: "0", marginBottom: "0" }}>
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                          </p>
                          <div style={{ background: "rgb(235, 232, 232)", width: "300px", height: "7px", borderRadius: "10px", marginLeft: ".7rem", marginRight: ".8rem" }}>
                            <div style={{ background: "blue", width: "80%", height: "7px", borderRadius: "10px" }}></div>
                          </div>
                          <p style={{ fontSize: "1.2rem", margin: "0" }}>750 stars</p>
                        </div>
                        <div className='ov-reviews-2s'>
                          <p style={{ marginTop: "0", marginBottom: "0" }}>
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="rgb(235, 232, 232)" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                          </p>
                          <div style={{ background: "rgb(235, 232, 232)", width: "300px", height: "7px", borderRadius: "10px", marginLeft: ".7rem", marginRight: ".8rem" }}>
                            <div style={{ background: "blue", width: "65%", height: "7px", borderRadius: "10px" }}></div>
                          </div>
                          <p style={{ fontSize: "1.2rem", margin: "0" }}>65 stars</p>
                        </div>
                        <div className='ov-reviews-2s'>
                          <p style={{ marginTop: "0", marginBottom: "0" }}>
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="rgb(235, 232, 232)" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="rgb(235, 232, 232)" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                          </p>
                          <div style={{ background: "rgb(235, 232, 232)", width: "300px", height: "7px", borderRadius: "10px", marginLeft: ".7rem", marginRight: ".8rem" }}>
                            <div style={{ background: "blue", width: "50%", height: "7px", borderRadius: "10px" }}></div>
                          </div>
                          <p style={{ fontSize: "1.2rem", margin: "0" }}>55 stars</p>
                        </div>
                        <div className='ov-reviews-2s'>
                          <p style={{ marginTop: "0", marginBottom: "0" }}>
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="rgb(235, 232, 232)" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="rgb(235, 232, 232)" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="rgb(235, 232, 232)" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                          </p>
                          <div style={{ background: "rgb(235, 232, 232)", width: "300px", height: "7px", borderRadius: "10px", marginLeft: ".7rem", marginRight: ".8rem" }}>
                            <div style={{ background: "blue", width: "35%", height: "7px", borderRadius: "10px" }}></div>
                          </div>
                          <p style={{ fontSize: "1.2rem", margin: "0" }}>7 stars</p>
                        </div>
                        <div className='ov-reviews-2s'>
                          <p style={{ marginTop: "0", marginBottom: "0" }}>
                            <AiFillStar color="blue" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="rgb(235, 232, 232)" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="rgb(235, 232, 232)" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="rgb(235, 232, 232)" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                            <AiFillStar color="rgb(235, 232, 232)" fontSize="1.5rem" style={{ marginRight: ".4rem" }} />
                          </p>
                          <div style={{ background: "rgb(235, 232, 232)", width: "300px", height: "7px", borderRadius: "10px", marginLeft: ".7rem", marginRight: ".8rem" }}>
                            <div style={{ background: "blue", width: "20%", height: "7px", borderRadius: "10px" }}></div>
                          </div>
                          <p style={{ fontSize: "1.2rem", margin: "0" }}>0 stars</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className='ov-comments' >
                    <h2 style={{ fontSize: "2rem", marginBottom: "2rem", marginTop: "3rem" }}>Comments</h2>
                    <div style={{ position: "relative" }}>
                      <div>
                        <Comments />
                        <Comments />
                        <Comments />
                      </div>
                      <button style={{
                        width: "150px", height: "35px", position: "absolute", bottom: "0rem", right: "10rem",
                        border: "none", borderRadius: "10px", background: "blue", color: "white"
                      }}>See More <BsChevronDown /></button>
                    </div>

                  </div>


                  <div className='ov-smproducts' style={{ border: "1px solid red" }}>
                  <h2 style={{ fontSize: "2rem", marginBottom: "2rem", marginTop: "3rem" }}>SIMILAR PRODUCTS</h2>



                  <div className='mens-detail'>
                      <Similarproducts/>
                  </div>
                  </div>
                  <div className='ov-rviewed' style={{ border: "1px solid red" }}>
                  <h2 style={{ fontSize: "2rem", marginBottom: "2rem", marginTop: "3rem" }}>RECENTLY VIEWED</h2>
                  </div>

                </div>
              </div>
            )
          }
          return null
        })
      }
    </div>
  )

}

export default Mensoverview