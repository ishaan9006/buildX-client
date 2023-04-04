import axios from 'axios';
import React, { useState } from 'react'

function Signup({handleState}) {
    const [info, setInfo] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        conpassword: ''
    });
    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }
    function validate() {
        if(info.name.length < 3 || info.lastname.length < 3 || info.password.length < 6 || info.password != info.conpassword || !info.email.includes("@") || !info.email.includes(".com")){
            return false;
        }
        return true;
    }
    const signup = () => {
        console.log(info);
        if(!validate()) {
            console.log('Incorrect values in the input field!');
        }
        else{
            console.log('All values are correct!');
            axios.post('http://localhost:5000/data', {
                info
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }

    }
    return (
        <div className="h-1/2 w-3/5 rounded-2xl bg-white flex flex-col justify-center items-center">
        <h1 className="font-semibold text-sm">Signup to continue</h1>
        <div className="flex w-full justify-center">
            <input name="name" onChange={handleChange} className="p-1 border-2 rounded-lg mt-2 text-md w-1/3 mr-2" placeholder="First name"/>
            <input name="lastname" onChange={handleChange} className="p-1 border-2 rounded-lg mt-2 text-md w-1/3" placeholder="Last name"/>
        </div>

        <input name="email" onChange={handleChange} className="p-1 border-2 rounded-lg mt-2 text-md" placeholder="Email"/>
        <input name="password" onChange={handleChange} className="p-1 border-2 rounded-lg mt-2 text-md" placeholder="Password"/>
        <input name="conpassword" onChange={handleChange} className="p-1 border-2 rounded-lg mt-2 text-md" placeholder="Confirm Password"/>

        

        <button className="h-10 w-2/3 bg-[#2e5ad2] rounded-lg mt-4"
            onClick={() => signup()}
        >
            <p className='text-white'>Signup</p>
        </button>

        <div className="flex justify-center items-baseline mt-2">
            <p className='text-xs font-base'>Already have an account?</p>
            <button onClick={() => handleState()}>
                <p className='text-base font-semibold ml-1 hover:text-[#2e5ad2]'>Login</p>
            </button>
        </div>
    </div>
    )
}

export default Signup
