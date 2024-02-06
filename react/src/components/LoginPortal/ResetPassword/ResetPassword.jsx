import Header from "../../Header/Header";
import personLogo from '../../../../src/assets/lock-icon.jpg'
import './ResetPassword.css'
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from 'axios'

const ResetPassword = () => {

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
                password: formData?.password,
                passwordConfirm: formData?.passwordConfirm
            }
            console.log(req, 'req')
            axios.patch(`http://localhost:9000/api/v1/users/resetPassword/5eef41644c9e969e81f3a9d126a4ef0749d5dc4fd326b8b436c019659428704e`, req)
            console.log(response)
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        window.alert('your password is reset successfully')
                    }

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
            <div className="row align-items-center justify-content-center g-0 min-vh-100 mt-4 mb-5 ">
                <div className="col-lg-5 col-md-8 py-8 py-xl-0 sub-container">

                    <div className="card shadow" style={{ marginBottom: "7%" }}>

                        <div className="card-body p-6">
                            <div className="mb-4">
                                <a href="../index.html"><img src={personLogo} height='200' width='200' className="mb-1" alt="logo-icon" /></a>
                                <h1 className="mb-1 fw-bold">Reset Password</h1>
                                <p>You can reset your password here.</p>
                            </div>

                            <form noValidate validated={validated} onSubmit={(event) => { handleSubmitForm(event) }} className="forgot-email">

                                <div className="form-outline align-items-center  flex-fill  mb-4">
                                    {/* <label className="form-label" for="form3Example4c">Password</label> */}
                                    <input style={{ marginLeft: '146px' }} type="password" placeholder="Password" className="form-control  w-50" onChange={(e) => twoWayBind('password', e.target.value)} />

                                </div>

                                <div className="form-outline align-items-center flex-fill mb-4">
                                    {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                                    <input style={{ marginLeft: '146px' }} type="password" placeholder="Repeat your Password" className="form-control w-50" onChange={(e) => twoWayBind('passwordConfirm', e.target.value.trim())} />

                                </div>


                                <div className="mb-3 d-grid">
                                    <button type="submit" className="btn btn-primary email-input w-50">
                                        Reset Password
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

export default ResetPassword;