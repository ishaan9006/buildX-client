import axios from 'axios';
import React, { useState } from 'react'

function Login({login, handleState}) {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const userLogin = () => {
        try{
            console.log(data);
            axios.post('http://localhost:5000/login',{
                data
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }
        catch(err){
            console.log(err);
        }

    }
    return (
        <div className="h-1/2 w-3/5 rounded-2xl bg-white flex flex-col justify-center items-center">
            <h1 className="font-semibold text-sm">Login to continue</h1>
            <input name="email" value={data.email} onChange={handleChange} className="p-1 border-2 rounded-lg mt-2 text-md" placeholder="Email"/>
            <input name="password" value={data.password} onChange={handleChange}className="p-1 border-2 rounded-lg mt-2 text-md" placeholder="Password"/>

            <div className="flex w-2/3 justify-end items-end mt-1">
                <button>
                    <p className="font-semibold text-xs hover:text-[#2e5ad2]">Forgot password?</p>
                </button>

            </div>

            <button
                className="h-10 w-2/3 bg-[#2e5ad2] rounded-lg mt-4"
                onClick={() => userLogin()}
            >
                <p className='text-white'>Login</p>
            </button>

            <div className="flex justify-center items-baseline mt-2">
                <p className='text-xs font-base'>Dont have an account?</p>
                <button onClick={() => handleState()}>
                    <p className='text-base font-semibold ml-1 hover:text-[#2e5ad2]'>Signup</p>
                </button>
            </div>
        </div>
    )
}

export default Login
