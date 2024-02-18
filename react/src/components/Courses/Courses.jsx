import './Courses.css'

import python from '../../../src/assets/courses/1200px-Python.svg.png'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Courses = () => {

    const [courses, setCourses] = useState()

    // useEffect(() => {
    //     axios.get(`http://localhost:9000/api/v1/courses`)
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err))
    // }, [])

    return (
        <div className='main-card-container'>
            <h3> Software Training Courses Provided By Tech-Coding -</h3>
            <div className='card-container d-flex flex-wrap'>
                <div className="card">
                    <div className="property-card">
                        <a href="#">
                            <div className="property-image">
                                <div className="property-image-title">

                                </div>
                            </div></a>
                        <div className="property-description">
                            <h5> Card Title </h5>
                            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                        </div>
                        <a href="#">
                            <div className="property-social-icons">

                            </div>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="property-card">
                        <a href="#">
                            <div className="property-image">
                                <div className="property-image-title">

                                </div>
                            </div></a>
                        <div className="property-description">
                            <h5> Card Title </h5>
                            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                        </div>
                        <a href="#">
                            <div className="property-social-icons">

                            </div>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <div className="property-card">
                        <a href="#">
                            <div className="property-image">
                                <div className="property-image-title">

                                </div>
                            </div></a>
                        <div className="property-description">
                            <h5> Card Title </h5>
                            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                        </div>
                        <a href="#">
                            <div className="property-social-icons">

                            </div>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <div className="property-card">
                        <a href="#">
                            <div className="property-image">
                                <div className="property-image-title">

                                </div>
                            </div></a>
                        <div className="property-description">
                            <h5> Card Title </h5>
                            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                        </div>
                        <a href="#">
                            <div className="property-social-icons">

                            </div>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <div className="property-card">
                        <a href="#">
                            <div className="property-image">
                                <div className="property-image-title">

                                </div>
                            </div></a>
                        <div className="property-description">
                            <h5> Card Title </h5>
                            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                        </div>
                        <a href="#">
                            <div className="property-social-icons">

                            </div>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <div className="property-card">
                        <a href="#">
                            <div className="property-image">
                                <img src={python} height='100' width='100' style={{ marginBottom: '15px' }} />
                                <div className="property-image-title">
                                    <p>price</p>
                                    <p>click for demo</p>
                                </div>
                            </div></a>
                        <div className="property-description">
                            <h5> Card Title </h5>
                            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                            <button className='w-100'>Read More...</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Courses;