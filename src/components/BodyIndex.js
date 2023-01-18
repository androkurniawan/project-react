import React, {useState} from 'react';
import Hotel1 from '../assets/img/hotel1.webp';
import Hotel2 from '../assets/img/hotel2.jpg';
import Hotel3 from '../assets/img/hotel3.jpg';
import WhyOracle1 from '../assets/img/whyoracle1.png';
import WhyOracle2 from '../assets/img/whyoracle2.png';
import WhyOracle3 from '../assets/img/whyoracle3.png';
import WhyOracle4 from '../assets/img/whyoracle4.png';
// import Rating1 from '../assets/img/rating1.jpg';
// import Rating2 from '../assets/img/rating2.jpg';
// import Rating3 from '../assets/img/rating3.jpg';
import {Carousel} from 'react-bootstrap';
import MostVisitedHotels from './MostVisitedHotels';
import TopUsers from './TopUsers';
import HighestRatedHotel from './HighestRatedHotel';

function SearchingHotel() {
    const [input, setInput] = useState({
        city: '',
        checkin: '',
        checkout: ''
    })

    const handleChange = (e) => {
        setInput(prevInput => {
            return {...prevInput, [e.target.name]: e.target.value}}
        );
    }

    const checkingEntry = (e) => {
        e.preventDefault();
        if (!input.city || !input.checkin || !input.checkout) {
            alert("Any field can not be empty.")
        } else if (input.checkin > input.checkout) {
            alert("Checkout date must be after checkin date.")
        } else handleSubmit()
    }

    const handleSubmit = () => {
        // e.preventDefault();
        localStorage.setItem('city', input.city)
        localStorage.setItem('checkin', input.checkin)
        localStorage.setItem('checkout', input.checkout)
        window.location.href = "/searching"
    }

    return (
        <section className="searchingHotel">
            <div className="container py-5">
                <div className="row">

                    <div className="col-lg-6 align-self-center">
                        <div>
                            <form className="row g-3" onSubmit={checkingEntry} id="searchingForm">
                                <div><h2>Find the <span style={{color:"#ffc300"}}>best</span> hotel for you.</h2></div>
                                
                                <label htmlFor="city" className="form-label mb-0">Destination City</label>
                                <div className="col-md-8 input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>                        
                                    <input id="city" name="city" type="text" className="form-control input-field"
                                    placeholder="Enter a city" onChange={handleChange}></input>
                                </div>

                                <div className="mb-3 col-md-6">
                                    <label htmlFor="checkin" className="form-label">Check-in</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <span className="bi-person"><i className="fa-regular fa-calendar-check"></i></span>
                                        </span>
                                        <input onChange={handleChange} type="date" className="form-control" id="checkin" name="checkin" />
                                    </div>       
                                </div>

                                <div className="mb-3 col-md-6">
                                    <label htmlFor="checkout" className="form-label">Check-out</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <span className="bi-person"><i className="fa-solid fa-calendar-check"></i></span>
                                        </span>
                                        <input onChange={handleChange} type="date" className="form-control" id="checkout" name="checkout" />
                                    </div>
                                </div>
                                
                                <button type="submit" className="btn btn-warning">Search</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6">

                    <div className="px-4 py-5">
                        <Carousel>
                            <Carousel.Item interval={900}>
                                <img className="d-block w-100" width="250" height="400" src={Hotel1} alt="First slide" />
                                <Carousel.Caption>
                                    <h5 style={{color:"#ffd60a"}}><span style={{backgroundColor:"#001d3d"}}>L Hotel, Padang</span></h5>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={900}>
                                <img className="d-block w-100" width="250" height="400" src={Hotel2} alt="Second slide" />
                                <Carousel.Caption>
                                    <h5 style={{color:"#ffd60a"}}><span style={{backgroundColor:"#001d3d"}}>Pesona Hotel, Pekan Baru</span></h5>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={900}>
                                <img className="d-block w-100" width="250" height="400" src={Hotel3} alt="Third slide" />
                                <Carousel.Caption>
                                    <h5 style={{color:"#ffd60a"}}><span style={{backgroundColor:"#001d3d"}}>In Hotel, Bandung</span></h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>

                </div>
            
            </div>

        <div className="container py-3 text-center">
            <h2>Why Oracle</h2>
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="py-3" width="200em" src={WhyOracle1} alt="" />
                            <h4>Ease of Payment</h4>
                            <p>Choose your preferred payment method (transfers, credit cards, self-service payments, internet banking, and installments).</p>
                        </div>
                        <div className="col-md-3">
                            <img className="py-3" width="200em" src={WhyOracle2} alt=""/>
                            <h4>Discounts & Promos</h4>
                            <p>Enjoy special prices for Oracle members and also get a variety of other interesting promos.</p>
                        </div>
                        <div className="col-md-3">
                            <img className="py-3" width="200em" src={WhyOracle3} alt="" />
                            <h4>OraclePoint</h4>
                            <p>Collect OraclePoin from your transactions and use it as a discount on the next transaction.</p>
                        </div>
                        <div className="col-md-3">
                            <img className="py-3" width="200em" src={WhyOracle4} alt="" />
                            <h4>Best Price Guarantee</h4>
                            <p>Oracle guarantees you the best price when placing an order.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section id="review" className="main-biru">
            <div className="container-fluid py-3 text-center">
                <h2>Trusted by more than a million people</h2>
                <p>Oracle is one of the best hotel reservation app</p>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="row">
                            <div className="col-md-4">
                                <h3>99.99%</h3>
                                <p>Satisfaction</p>
                            </div>
                            <div className="col-md-4">
                                <h3>20K</h3>
                                <p>Users/day</p>
                            </div>
                            <div className="col-md-4">
                                <h3>36.000</h3>
                                <p>Revervation/year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <MostVisitedHotels />

        <TopUsers />

        <HighestRatedHotel />

        </section>

  )
}

export default SearchingHotel;