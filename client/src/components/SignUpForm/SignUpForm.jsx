import React from 'react'
import './SignUpForm.css'

const SignUpForm = () => {
  return (
    <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content p-3 p-md-4">
            <div className="modal-header pt-4">
            <h1 className="modal-title" id="signUpModalLabel">Create a Lakbay Account</h1>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="#" className="needs-validation" noValidate>
            <div className="modal-body py-3">
                <div className="row g-0 g-sm-4">
                <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
                    <input type="text" id="formFirstName" className="form-control" placeholder="Firstname"
                    aria-label="Firstname" required />
                    <label htmlFor="formFirstName" className="ps-3 ps-sm-4">First Name</label>
                    <div className="invalid-feedback">
                    First name cannot be empty.
                    </div>
                </div>
                <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
                    <input type="text" id="formLastName" className="form-control" placeholder="Lastname" aria-label="Lastname"
                    required />
                    <label htmlFor="formLastName" className="ps-3 ps-sm-4">Last Name</label>
                    <div className="invalid-feedback">Last name cannot be empty.</div>
                </div>
                </div>

                <div className="row g-0 g-sm-4">
                <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
                    <input type="email" className="form-control" id="formEmail" placeholder="name@example.com" required />
                    <label htmlFor="formEmail" className="ps-3 ps-sm-4">Email Address</label>
                    <div className="invalid-feedback">
                    Please choose a valid email.
                    </div>
                </div>
                <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
                    <input type="number" className="form-control" id="formNumber" placeholder="____ - ___ - ____" required />
                    <label htmlFor="formNumber" className="ps-3 ps-sm-4">Phone Number</label>
                    <div className="invalid-feedback">
                    Please choose a valid number.
                    </div>
                </div>
                </div>

                <div className="form-floating mb-3">
                <input type="password" className="form-control" id="formPassword" placeholder="Password" required />
                <label htmlFor="formPassword">Password</label>
                <div className="invalid-feedback">
                    Please choose a valid password.
                </div>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="formConfirmPass" placeholder="Confirm Password"
                    required />
                <label htmlFor="formConfirmPass">Confirm Password</label>
                <div className="invalid-feedback">Password doesn't match.</div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn modal-cancel-btn" data-bs-dismiss="modal">
                Cancel
                </button>
                <button type="submit" className="btn modal-signup-btn">Sign Up</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default SignUpForm