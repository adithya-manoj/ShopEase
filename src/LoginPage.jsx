import React, { useState } from 'react';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form data:', formData);
    };

    return (
        <div className='w-100 h-100'>
            <div className='w-50 border border-1 mx-auto rounded-4 '>
            <div><h2 className="fw-bold text-center">Login</h2></div>
            
            <div className='d-flex justify-content-center align-items-center'>
                <form onSubmit={handleSubmit} >

                    <div>
                        <div>
                            <label htmlFor="email" className='fw-bold'>Email</label>
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className='rounded-pill m-2 p-2'
                            />
                        </div>

                    </div>
                    <div>
                        <div>
                            <label htmlFor="password" className='fw-bold'>Password</label>
                        </div>
                        <div>

                            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className='rounded-pill m-2 p-2' />
                        </div>

                    </div>


                    <button type="submit" className="btn btn-dark text-white rounded-pill w-100 m-1">
                        Login
                    </button>

                </form>
            </div>
            <div className='d-flex justify-content-center'>
            <div className='fw-bold m-1'>Forgot Password?</div>
            <div className='fw-bold m-1'>/</div>
            <div className='fw-bold m-1'>Create Account</div>
            </div>
            <div className='d-flex justify-content-center'>
                <div>Manage Subscriptions</div>
            </div>
            </div>
        </div>
    );
};

export default LoginPage;
