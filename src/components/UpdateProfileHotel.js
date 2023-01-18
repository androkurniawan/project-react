import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';

function UpdateProfileHotel() {
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const deluxeCapacityRef = useRef(null);
    const deluxeFacilityRef = useRef(null);
    const deluxePriceRef = useRef(null);
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const standardCapacityRef = useRef(null);
    const standardFacilityRef = useRef(null);
    const standardPriceRef = useRef(null);
    const superiorCapacityRef = useRef(null);
    const superiorFacilityRef = useRef(null);
    const superiorPriceRef = useRef(null);

    const [result, setResult] = useState({
        address: "",
        city: "",
        deluxeCapacity: "",
        deluxeFacility: "",
        deluxePrice: "",
        email: "",
        name: "",
        phone: "",
        standardCapacity: "",
        standardFacility: "",
        standardPrice: "",
        superiorCapacity: "",
        superiorFacility: "",
        superiorPrice: "",
        username: ""
      })

    const fetchData = () => {
        if (!localStorage.getItem('role')){
              alert("You should login first.")
              window.location.href = "/login"
          } else {
          let token = document.cookie
          let splitToken = token.split(".");
          let user = JSON.parse(atob(splitToken[1]));
          let usernames = user["user"];
          let passwords = user["passkey"];
    
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Basic " + window.btoa(usernames + ":" + passwords));
          myHeaders.append("Content-Type", "application/json");
    
          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
    
          fetch("http://127.0.0.1:5000/hotel", requestOptions)
            .then(response => response.json())
            .then(y => {
                    setResult({
                      address: y.address,
                      city: y.city,
                      deluxeCapacity: y.deluxe_capacity,
                      deluxeFacility: y.deluxe_facility,
                      deluxePrice: y.deluxe_price,
                      email: y.email,
                      name: y.hotel_name,
                      phone: y.phone,
                      standardCapacity: y.standard_capacity,
                      standardFacility: y.standard_facility,
                      standardPrice: y.standard_price,
                      superiorCapacity: y.superior_capacity,
                      superiorFacility: y.superior_facility,
                      superiorPrice: y.superior_price,
                      username: y.username
                    })
                })
            .catch(error => console.log('error', error));
          
          }}
    
      useEffect(() => {
        fetchData();
      }, [])

    const updateProfile = (e) => {
        e.preventDefault()
        let token = document.cookie
        let splitToken = token.split(".");
        let user = JSON.parse(atob(splitToken[1]));
        let usernames = user["user"];
        let passwords = user["passkey"];
    
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + window.btoa(usernames + ":" + passwords));
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
            "hotel_name": nameRef.current.value,
            "hotel_email": emailRef.current.value,
            "hotel_address": addressRef.current.value,
            "city": cityRef.current.value,
            "hotel_phone": phoneRef.current.value,
            "superior_capacity": superiorCapacityRef.current.value,
            "superior_price": superiorPriceRef.current.value,
            "superior_facility": superiorFacilityRef.current.value,
            "deluxe_capacity": deluxeCapacityRef.current.value,
            "deluxe_price": deluxePriceRef.current.value,
            "deluxe_facility": deluxeFacilityRef.current.value,
            "standard_capacity": standardCapacityRef.current.value,
            "standard_price": standardPriceRef.current.value,
            "standard_facility": standardFacilityRef.current.value
          });
          
          var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("http://127.0.0.1:5000/hotel", requestOptions)
            .then(response => response.text())
            .then(result => {
                    alert("Update profile success.")
                    window.location.href = "/profile-hotel"
                })
            .catch(error => console.log('error', error));
    }

    return (
    <>
    <Sidebar />
    
    <div className="container-fluid py-5">
        <div className="container">
            <div className="offset-lg-3 col-lg-8">

                <form id="changeForm" onSubmit={updateProfile} className="row g-3">
                    <span className="border border-secondary"></span>
                    <div className="col-md-4">
                        <label className="form-label">Hotel Name</label>
                        <input id="hotel_name" onChange={(e) => {setResult({name: e.target.value})}} value={result.name} ref={nameRef} type="text" className="form-control" />
                    </div>

                    {/* <div className="col-md-4">
                        <label className="form-label">Username</label>
                        <div id="username" style={{backgroundColor: "yellow"}}>{result.username}</div>
                    </div> */}

                    <div className="col-md-4">
                        <label className="form-label">Email</label>
                        <input ref={emailRef} id="hotel_email" onChange={(e) => {setResult({email: e.target.value})}} value={result.email} type="text" className="form-control form-control-sm" />
                    </div>

                    <div className="row g-3" >
                        <span className="border border-secondary"></span>
                    </div>

                    <span className="border border-secondary"></span>
                    <div className="col-md-4">
                        <label className="form-label">Address</label>
                        <input ref={addressRef} id="hotel_address" onChange={(e) => {setResult({address: e.target.value})}} value={result.address} type="text" className="form-control form-control-sm" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">City</label>
                        <input ref={cityRef} onChange={(e) => {setResult({city: e.target.value})}} value={result.city} id="city"  type="text"  className="form-control form-control-sm" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Phone</label>
                        <input ref={phoneRef} onChange={(e) => {setResult({phone: e.target.value})}} value={result.phone} id="hotel_phone" type="text" className="form-control form-control-sm" />
                    </div>
                    <span className="border border-secondary"></span>
                    <span className="border border-secondary"></span>

                    <div className="col-md-6">
                        <label className="form-label">Superior Capacity</label>
                        <input ref={superiorCapacityRef} onChange={(e) => {setResult({superiorCapacity: e.target.value})}} value={result.superiorCapacity} min="0" name="superior_capacity" type="number" className="form-control form-control-sm" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Superior Price</label>
                        <input ref={superiorPriceRef} onChange={(e) => {setResult({superiorPrice: e.target.value})}} value={result.superiorPrice} min="0" type="number" className="form-control form-control-sm" />
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Superior Facility</label>
                        <input ref={superiorFacilityRef} onChange={(e) => {setResult({superiorFacility: e.target.value})}} value={result.superiorFacility} type="text" className="form-control form-control-sm" />
                    </div>

                    <span className="border border-secondary"></span>
                    <span className="border border-secondary"></span>

                    <div className="col-md-6">
                        <label className="form-label">Deluxe Capacity</label>
                        <input ref={deluxeCapacityRef} onChange={(e) => {setResult({deluxeCapacity: e.target.value})}} value={result.deluxeCapacity} min="0" type="number" className="form-control form-control-sm" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Deluxe Price</label>
                        <input ref={deluxePriceRef} onChange={(e) => {setResult({deluxePrice: e.target.value})}} value={result.deluxePrice} min="0" type="number" className="form-control form-control-sm" />
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Deluxe Facility</label>
                        <input ref={deluxeFacilityRef} onChange={(e) => {setResult({deluxeFacility: e.target.value})}} value={result.deluxeFacility} type="text" className="form-control form-control-sm" />
                    </div>
    
                    <span className="border border-secondary"></span>
                    <span className="border border-secondary"></span>

                    <div className="col-md-6">
                        <label className="form-label">Standard Capacity</label>
                        <input ref={standardCapacityRef} onChange={(e) => {setResult({standardCapacity: e.target.value})}} value={result.standardCapacity} min="0" type="number" className="form-control form-control-sm" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Standard Price</label>
                        <input ref={standardPriceRef} onChange={(e) => {setResult({standardPrice: e.target.value})}} value={result.standardPrice} type="number" className="form-control form-control-sm" />
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Standard Facility</label>
                        <input ref={standardFacilityRef} onChange={(e) => {setResult({standardFacility: e.target.value})}} value={result.standardFacility} type="text" className="form-control form-control-sm" />
                    </div>

                    <span className="border border-secondary"></span>

                    <div className="col-12">
                        <button type='submit' className="btn btn-warning w-100">Save</button>
                        <div style={{paddingBottom: "1em"}}></div>
                    </div>

                </form>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default UpdateProfileHotel;