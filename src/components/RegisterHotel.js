import React from 'react';

function RegisterHotel() {
    return (
        <section>
            <div id="background-image">
            <div class="container" style={{paddingTop: "1.5em"}}><p></p></div>
            <div className="container text-center">
                <h1><b>One step more... Complete your data!</b></h1>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="offset-lg-2 col-lg-8">

                        <div className="row g-3" action="#">
                            <span className="border border-warning"></span>
                            <div className="col-md-4">
                            <label className="form-label"><b>Hotel Name</b></label>
                            <input id="hotelName" type="text" className="form-control form-control-sm" placeholder="Enter your hotel name" autocomplete="off" />
                            </div>

                            <div className="col-md-4">
                            <label className="form-label"><b>Username</b></label>
                            <input id="hotelUsername" type="text" className="form-control form-control-sm" placeholder="Create username for your hotel" autocomplete="off" />
                            </div>

                            <div className="col-md-4">
                            <label className="form-label"><b>Email</b></label>
                            <input id="hotelEmail" type="email" className="form-control form-control-sm" placeholder="Enter your email" autocomplete="off" />
                            </div>

                            <div className="col-md-6">
                            <label className="form-label"><b>Password</b></label>
                            <input id="hotelPassword" type="password" className="form-control form-control-sm" placeholder="Enter your password" autocomplete="off" />
                            <label className="form-text">Make the unpredictable password</label>
                            </div>

                            <div className="col-md-6">
                            <label className="form-label"><b>Confirm Password</b></label>
                            <input id="hotelPasswordConfirm" type="password" className="form-control form-control-sm" placeholder="Enter your password again" autocomplete="off" />
                            </div>

                            <div className="col-md-4">
                            <label className="form-label"><b>Address</b></label>
                            <input id="hotelAddress" type="text" className="form-control form-control-sm" placeholder="The address of your hotel" autocomplete="off" />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label"><b>City</b></label>
                                <input id="hotelCity" type="text" className="form-control form-control-sm" placeholder="The city of your hotel location" autocomplete="off" />
                                </div>

                            <div className="col-4">
                            <label className="form-label"><b>Phone Number</b></label>
                            <input id="hotelPhone" type="text" className="form-control form-control-sm" placeholder="Your hotel phone number" autocomplete="off" />
                            </div>
                        
                        <div className="row g-3" >
                            <span className="border border-warning"></span>

                            <div className="col-6">
                            <label className="form-label"><b>Superior Capacity</b></label>
                            <input id="superiorCapacity" type="number" min="0" className="form-control form-control-sm" />
                            <label className="form-text">Choose the capacity of Superior room</label>
                            </div>

                            <div className="col-6">
                            <label className="form-label"><b>Superior Price</b></label>
                            <input id="superiorPrice" type="number" min="0" className="form-control form-control-sm" />
                            <label className="form-text">Set price for Superior room</label>
                            </div>

                            <div className="col-12">
                            <label className="form-label"><b>Superior Room Facility</b></label>
                            <textarea id="superiorFacility" className="form-control form-control-sm"></textarea>
                            </div>
                            
                        </div>

                        <div className="row g-3" >
                            <span className="border border-warning"></span>

                            <div className="col-6">
                            <label className="form-label"><b>Deluxe Capacity</b></label>
                            <input min="0" id="deluxeCapacity" type="number" className="form-control form-control-sm" />
                            <label className="form-text">Choose the capacity of Deluxe room</label>
                            </div>

                            <div className="col-6">
                            <label className="form-label"><b>Deluxe Price</b></label>
                            <input min="0" id="deluxePrice" type="number" className="form-control form-control-sm" />
                            <label className="form-text">Set price for Deluxe room</label>
                            </div>

                            <div className="col-12">
                            <label className="form-label"><b>Deluxe Room Facility</b></label>
                            <textarea id="deluxeFacility" className="form-control form-control-sm"></textarea>
                            </div>
                            
                        </div>

                        <div className="row g-3" >
                            <span className="border border-warning"></span>

                            <div className="col-6">
                            <label className="form-label"><b>Standard Capacity</b></label>
                            <input min={0} id="standardCapacity" type="number" className="form-control form-control-sm" />
                            <label className="form-text">Choose the capacity of Standard room</label>
                            </div>

                            <div className="col-6">
                            <label className="form-label"><b>Standard Price</b></label>
                            <input min={0} id="standardPrice" type="number" className="form-control form-control-sm" />
                            <label className="form-text">Set price for Standard room</label>
                            </div>

                            <div className="col-12">
                            <label className="form-label"><b>Standard Room Facility</b></label>
                            <textarea id="standardFacility" className="form-control form-control-sm"></textarea>
                            </div>
                            
                        </div>


                            <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">
                                I agree with <a href="google.com">term and condition</a>.
                                </label>
                            </div>
                            </div>

                            <div className="col-12">
                            <button type="submit" className="btn btn-warning w-100" href="login.html"><b>Register My Hotel</b></button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
    )
}

export default RegisterHotel;