import Header from "../../Header/Header";
import personLogo from '../../../../src/assets/logo-icon.svg'
import './ForgotPassword.css'
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from 'axios'

const ForgotPassword = () => {

    const navigate = useNavigate
    const [formData, setFormData] = useState({})
    const [validated, setValited] = useState(false)


    const twoWayBind = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }


    const NavigateToSignIn = () => {
        navigate('/SignIn')
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.target;
        setValited(true)
        if (form.checkValidity()) {
            const req = {
                ...formData,
                email: formData?.email
            }

            console.log(req, 'req')
            axios.post('http://localhost:9000/api/v1/users/forgotPassword', req)
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        window.alert('reset link sent to register email')

                    }
                    navigate('/ResetPassword', {
                        state: { type: "course", token: 'data' },
                    })
                })
                .catch((err) => {
                    console.log(err)
                }
                )
        }
    }

    return (
        <>
            <Header />

            <div className="row align-items-center justify-content-center g-0 min-vh-100 mb-5 ">
                <div className="col-lg-5 col-md-8 py-8 py-xl-0 sub-container">

                    <div className="card shadow" style={{ marginBottom: "10%" }}>

                        <div className="card-body p-6">
                            <div className="mb-4">
                                <a href="../index.html"><img src={personLogo} className="mb-4" alt="logo-icon" /></a>
                                <h1 className="mb-1 fw-bold">Forgot Password</h1>
                                <p>Fill the form to reset your password.</p>
                            </div>

                            <form noValidate validated={validated} onSubmit={(event) => { handleSubmitForm(event) }} className="forgot-email">

                                <div className="mb-3">
                                    <span>
                                        <label for="email" className="form-label">Email</label>
                                        <input onChange={(e) => { twoWayBind('email', e.target.value) }} type="email" id="email" className="form-control w-50 email-input" name="email" placeholder="Enter Your Email " required="" />
                                    </span>
                                </div>

                                <div className="mb-3 d-grid">
                                    <button type="submit" className="btn btn-primary email-input w-50">
                                        Send Resest Link
                                    </button>
                                </div>
                                <span>Return to <a href="/SignIn" onClick={() => { NavigateToSignIn() }}>sign in</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;