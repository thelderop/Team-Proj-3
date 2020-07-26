import React from 'react'

export default function Login() {
    return (
        <div className="row mt-4">
        <div className="col-md-7 offset-md-3 text-light">
            <div className="card card-body bg-dark">
                <h2 className="py-2">Login</h2>
                <form action="/ideas" method="post" /*onSubmit={handleSubmit}*/>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" /*value={email} onInput={handleEmail}*/ className="form-control" placeholder='Email' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" /*value={password} onInput={handlePassword}*/ className="form-control" placeholder='Password'/>
                    </div>

                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                </form>
            </div>
        </div>
    </div>
    )
}