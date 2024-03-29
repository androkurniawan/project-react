import React, {useState, useEffect} from 'react';

function Booking() {
    // const [hotelData, setHotelData] = useState([]);
    const [data, setData] = useState({
        hotelName: '',
        city: '',
        address: '',
        superiorPrice: '',
        deluxePrice: '',
        standardPrice: '',
        superiorStock: '',
        deluxeStock: '',
        standardStock: '',
        superiorFacility: '',
        deluxeFacility: '',
        standardFacility: ''
    })

    const [superiorAmount, setSuperiorAmount] = useState(0);
    const [deluxeAmount, setDeluxeAmount] = useState(0);
    const [standardAmount, setStandardAmount] = useState(0);

    const city = localStorage.getItem('city');
    const checkin = localStorage.getItem('checkin');
    const checkout = localStorage.getItem('checkout');
    const hotelId = localStorage.getItem('idSearching');
    const fetchingData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "idHotel": hotelId,
        "checkin": checkin,
        "checkout": checkout,
        "city": city
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/hotelbooking", requestOptions)
        .then(response => response.json())
        .then(y => {
            setData({
                hotelName: y[0]._hotel_name,
                city: y[0].city,
                address: y[0].address,
                superiorPrice: y[0].superior_price,
                deluxePrice: y[0].deluxe_price,
                standardPrice: y[0].standard_price,
                superiorStock: y[0].superior_stock,
                deluxeStock: y[0].deluxe_stock,
                standardStock: y[0].standard_stock,
                superiorFacility: y[0].superior_facility,
                deluxeFacility: y[0].deluxe_facility,
                standardFacility: y[0].standard_facility
            })
        })
        .catch(error => {
            alert('Back to Home page and complete all form to see/search available hotels.')
            window.location.href = "/"
        })
    }

    useEffect(() => {
        fetchingData();
    }, [])

    const handleChangeSuperior = (e) => {
        setSuperiorAmount(e.target.value)        
    }

    const handleChangeDeluxe = (e) => {
        setDeluxeAmount(e.target.value)        
    }

    const handleChangeStandard = (e) => {
        setStandardAmount(e.target.value)        
    }

    const reservation = () => {
        if (localStorage.getItem('role') !== 'customer'){
            if (window.confirm("You should login as Customer to booking a hotel. Do you want login as customer now")) {
                document.cookie = "username=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                localStorage.removeItem("role")
                window.location.href = "/login-booking"
              } else {
              }
        } else {
        let token = document.cookie
        let splitToken = token.split(".");
        let user = JSON.parse(atob(splitToken[1]));
        let usernames = user["user"];
        let passwords = user["passkey"];

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + window.btoa(usernames + ":" + passwords));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "check_in_date": checkin,
        "check_out_date": checkout,
        "amount_of_superior_room": superiorAmount,
        "amount_of_deluxe_room": deluxeAmount,
        "amount_of_standard_room": standardAmount,
        "hotel_id": hotelId
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        if (superiorAmount !== 0 || deluxeAmount !== 0 || standardAmount !== 0) {
            fetch("http://127.0.0.1:5000/booking", requestOptions)
                .then(response => response.text())
                .then(result => {
                    alert("Success booking a hotel.")
                    window.location.href = "/mybooking"
                })
                .catch(error => {
                    alert("Fetching Failed.")
                    console.log('error', error)
                })
        } else (alert("You can not booking with zero room."))
        }
    }

    return (
        <section id="horizontalLine" className="mb-0">
            <div className="divider">
                <span></span><span>Booking</span><span></span>
            </div>

            <main>
                <div className="container offset-md-1 mb-1 py-2">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                            <img src={require("../assets/img/caribooking.png")} width="100%" height="300" className="d-block w-100" alt="" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="h-100 p-5 border bg-light">
                                <h1 id="hotelName">{data.hotelName}</h1>
                                <h2 id="hotelCity">{data.city}</h2>
                                <h3 id="hotelAddress">Addres: {data.address}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section>
                <div className="container py-2">
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h2 className="fw-normal"><span style={{color:"red"}}>Room</span> and <span style={{color:"red"}}>Facility</span></h2>
                    </div>
                
                <main>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header text-bg-danger py-3">
                                    <h4 className="my-0 fw-normal text-center">Superior Room</h4>
                                </div>
                            <div className="card-body">
                                <h1 className="card-title text-center pricing-card-title mb-3" id="superiorPrice">Rp {data.superiorPrice}<small className="text-muted fw-light" id="perNight1">/night</small></h1>
                                <div className="text-center">
                                    <p>Facility:</p>
                                    <p id="superiorFacility">{data.superiorFacility}</p>
                                </div>
                                <small className="text-muted text-start" id="superiorStock">Stock: {data.superiorStock}</small><br></br>
                                <small className="text-muted text-start">Amount of room can't exceed stock. </small>
                                <input onChange={handleChangeSuperior} className="col-md-4" id="superiorAmount" type="number" value={superiorAmount} min="0" max={data.superiorStock} /> 
                            </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header text-bg-danger py-3">
                                    <h4 className="my-0 fw-normal text-center">Deluxe Room</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title mb-3 text-center" id="deluxePrice">Rp {data.deluxePrice}<small className="text-muted fw-light">/night</small></h1>
                                    <div className="text-center">
                                    <p>Facility:</p>
                                    <p id="deluxeFacility">{data.deluxeFacility}</p>
                                </div>
                                    <small className="text-muted text-start" id="deluxeStock">Stock: {data.deluxeStock}</small><br></br>
                                    <small className="text-muted text-start">Amount of room can't exceed stock. </small>
                                    <input onChange={handleChangeDeluxe} className="col-md-4" type="number" value={deluxeAmount} min="0" max={data.deluxeStock} id="deluxeAmount" />
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header text-bg-danger py-3">
                                    <h4 className="my-0 fw-normal text-center">Standard Room</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title text-center pricing-card-title mb-3" id="standardPrice">Rp {data.standardPrice}<small className="text-muted fw-light">/night</small></h1>
                                <div className="text-center">
                                    <p>Facility:</p>
                                    <p id="standardFacility">{data.standardFacility}</p>
                                </div>
                                    <small className="text-muted text-start" id="standardStock">Stock: {data.standardStock}</small><br></br>
                                    <small className="text-muted text-start">Amount of room can't exceed stock. </small>
                                    <input onChange={handleChangeStandard} className="col-md-4" value={standardAmount} type="number" min="0" max={data.standardStock} id="standardAmount" />
                                </div>
                            </div>
                        </div>



                    </div>
                </main>
            </div>

            <div className="d-flex flex-row mb-3 container">
        <div className="p-2">
            <h3>Total price: Rp {(superiorAmount*data.superiorPrice) + (deluxeAmount*data.deluxePrice) + (standardAmount*data.standardPrice)},-</h3>
            
        </div>
    </div>
      
    <div className="container">
        <div className="col mb-5">
        <button onClick={reservation} type="button" className="col-md-12 btn btn-warning">Book Now</button>
        </div>
    </div>

            </section>







            

    </section>
    )
}

export default Booking;