import React, { useState } from 'react';
import axios from 'axios'

const Signup = () => {
    // let [name, setName] = useState('')

    // let handleName = (e) => {
    //     setName(e.target.value)
    // }
    // let handleSubmit = (e) => {
    //     e.preventDefault()
    //     //check if both passwords are the same
           //this code wasnt done so i left it out
    //     const newUser = {
    //         name: name,
    //         email: email,
    //         address: address,
    //         city: city,
    //         state: state,
    //         zipcode: zipcode,
    //         password: password
    //     }
    //     axios.post('http://localhost:3001/api/users/register', newUser) THIS LINE NEEDS TO BE REDONE ONCE LOUIS FINISHES BACKEND
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(ewrr => {
    //             console.log(err)
    //         })
    // }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3 text-light">
                <div className="card card-body bg-dark">
                    <h2 className="py-2">Register</h2>
                    <a class="btn btn-dark btn-lg" href="/login" role="button">Already have an account? Sign in!</a>
                    <form action="/ideas" method="post" /*onSubmit={handleSubmit}*/>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" /*value={name} onInput={handleName}*/ className="form-control" placeholder='Name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" /*value={email} onInput={handleEmail}*/ className="form-control" placeholder='Email'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="address" name="address" /*value={address} onInput={handleAddress}*/ className="form-control" placeholder='Address'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input type="city" name="city" /*value={city} onInput={handleCity}*/ className="form-control" placeholder='City'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State:</label>
                            <input type="state" name="state" /*value={state} onInput={handleState}*/ className="form-control" placeholder='State'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="zipcode">Zipcode:</label>
                            <input type="zipcode" name="zipcode" /*value={zipcode} onInput={handleZipcode}*/ className="form-control" placeholder='Zipcode'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" /*value={password} onInput={handlePassword}*/ className="form-control" placeholder='Password'/>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="password2">Confirm Password: Might remove - was j</label>
                            <input type="password" name="password2" value={password2} onInput={handlePassword2} className="form-control" />
                        </div> */}
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;