
import { CircleUserRound } from 'lucide-react'
import Header from '../../Header/Header';
import { useState } from 'react';
import axios from 'axios'


const SignUp = () => {

    const [formData, setFormData] = useState({})
    const [validated, setValited] = useState(false)



    const twoWayBind = (key, value) => {
        console.log(key, value)
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handleSubmitform = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.target;
        setValited(true)
        if (form.checkValidity()) {
            const req = {
                ...formData
            }

            console.log(req, 'formData')
            axios.get('', req)
            localStorage.setItem('userDetails', JSON.stringify(req));
        }

    }

    return (
        <>
            <Header />
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px", marginTop: '50px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form noValidate validated={validated} onSubmit={(event) => handleSubmitform(event)} className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">


                                                    <div className="form-outline flex-fill mb-0">
                                                        <span>
                                                            <CircleUserRound />
                                                            <label className="form-label" for="form3Example1c">Your Name</label>
                                                        </span>

                                                        <input type="text" id="form3Example1c" className="form-control " onChange={(e) => twoWayBind('name', e.target.value.trim())} />

                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" onChange={(e) => twoWayBind('email', e.target.value.trim())} />
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" onChange={(e) => twoWayBind('password', e.target.value)} />
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" className="form-control" onChange={(e) => twoWayBind('passwordconfirm', e.target.value.trim())} />
                                                        <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default SignUp;