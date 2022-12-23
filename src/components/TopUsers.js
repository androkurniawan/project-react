import React, {useEffect, useState} from 'react';
// import Top1 from '../assets/img/top1.jpg';
// import Top2 from '../assets/img/top2.jpg';
// import Top3 from '../assets/img/top3.jpg';

function TopUsers() {
    const [top, setTop] = useState([]);

    const fetchData = () => {
        return fetch("http://127.0.0.1:5000/topuser")
            .then((response) => response.json())
            .then(x => {
                setTop(x)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    const people = top.map(y => {
        return (
            <div className="col-md-4 mb-5 mb-md-0" key={y.id}>
                <div className="d-flex justify-content-center mb-4">
                    <img src={require(`../assets/img/top1.jpg`)} alt="" className="rounded-circle shadow-1-strong" width="150" height="150" />
                </div>
                <h5 id="top1Name" className="mb-3">{y.customer_name}</h5>
                <h6 id="top1TotalBooking" className="text-primary mb-3">Total booking: {y.number_of_booking}</h6>
                <p className="px-xl-3"><i className="fas fa-quote-left pe-2"></i>
                    Words can't explain the kind of treatment I received from the management of Oracle. They are the best in the country.
                </p>
            </div>
        )
    })

    return (
        <section id="topUser" className="mb-3">
            <section id="horizontalLine">
                <div className="divider"><span></span><span>Top Users</span><span></span></div>
            </section>

            <div className="container">
                <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-xl-8 text-center">
                </div>
                </div>
                <div className="row text-center">

                    {people}

                </div>
                </div>
        </section>
  )
}

export default TopUsers
