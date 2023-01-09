import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';

const Navbar=(props)=>{

    let navigate = useNavigate();
    function navigation() {
        navigate(`/${props.home}login`);
    }

    sessionStorage.setItem('home',props.home);

    const handleSubmit = (e) => {
        e.preventDefault();
        var auth=sessionStorage.getItem('token');
        console.log(auth);
        axios.get(`${process.env.REACT_APP_BKD_URL}/${props.home}/logout`,{
            headers: {Authorization: "Bearer "+auth}
        }).then((response)=>{
            if(response.status===200){
                sessionStorage.removeItem('token');
                swal("Success!", "Logout Successfully", "success");
                navigation();
            }
        }).catch((err)=>{
            console.log(err);
            if(err.response.status===401){
                swal("ERROR!", "Please Login Again", "error");
            }
            if(err.response.status===400){
                swal("ERROR!", "Please Try Again !!", "error");
            }
        })
    }
    return (
        <nav className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white">
            <a href={`/${props.home}`}>
                <div className="flex items-center">
                    <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4.75V7a5 5 0 0110 0v-2.25a1 1 0 00-1-1h-5a1 1 0 00-1 1z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 10a1 1 0 011 1v3a1 1 0 001 1h3a1 1 0 011 1c.867 0 1.837-.996 2.5-2.5C22 14.837 21.004 15 20 15h-3a1 1 0 00-1 1v3a1 1 0 01-1 1h-8a1 1 0 01-1-1v-8a1 1 0 011-1h5.5z"></path></svg>
                    <span className="font-semibold text-xl tracking-tight">ScrubBook</span>
                </div>
            </a>
            <div className="flex items-center">
                <a href={`/${props.home}`} className="inline-block px-3 py-2 font-semibold leading-none text-white focus:outline-none">Home</a>
                <a href="/profile" className="inline-block px-3 py-2 font-semibold leading-none text-white focus:outline-none">Profile</a>
                <button onClick={handleSubmit} className="inline-block px-3 py-2 font-semibold leading-none text-white focus:outline-none">Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;
