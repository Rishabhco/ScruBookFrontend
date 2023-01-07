import React,{useEffect,useState} from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Profile = () => {

    const [employeeId, setEmployeeId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState(0);
    const [designation, setDesignation] = useState('');
    const [hospital, setHospital] = useState('');
    const [email, setEmail] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    var local = sessionStorage.getItem("home");
    useEffect(() => {
        var auth=sessionStorage.getItem('token');
        var home=sessionStorage.getItem("home");
        var uid=sessionStorage.getItem("uid");
        axios.get(`http://localhost:3001/${home}/profile/${uid}`,{
            headers: {Authorization: "Bearer "+auth,}
        }).then((response)=>{
            setEmployeeId(response.data.data.uid);
            setName(response.data.data.name);
            setPhone(response.data.data.phone);
            setDob(response.data.data.dob);
            setAge(response.data.data.age);
            setDesignation(response.data.data.designation);
            setHospital(response.data.data.hospitalName);
            setEmail(response.data.data.email);
            setIsLoading(false);
        }
        ).catch((err)=>{
            console.log(err);
        }
    )}, [])


  return (
    <div>
        <Navbar home={`${local}`} />
        {isLoading ? (
            <div className="loading">Loading...</div>
        ):(
            <div className='bg-indigo-50 py-1'>
                <div className='justify-center w-11/12 h-full bg-white my-14 mx-14 py-10'>
                    <div className='flex flex-row flex-wrap ml-16'>
                        <div className='col-span-2'>
                            <h2 className='text-4xl font-bold ml-7 mt-2 text-black'>{name}</h2>
                            <h1 className='text-lg font-semibold ml-7 mt-2 text-black'><span className='text-lg font-bold mt-2 text-indigo-700'>{designation}</span> at {hospital}</h1>
                        </div>
                    </div>
                    <p className='px-5 ml-8 mt-7 text-xl font-semibold text-left'>
                    Employee ID: {employeeId}<br />
                    </p>
                    <p className='px-5 ml-8 mt-7 text-xl font-semibold text-left'>
                    Phone: {phone}<br />
                    </p>
                    <p className='px-5 ml-8 mt-7 text-xl font-semibold text-left'>
                    Email: {email}<br />
                    </p>
                    <p className='px-5 ml-8 mt-7 text-xl font-semibold text-left'>
                    Date of Birth: {dob}<br />
                    </p>
                    <p className='px-5 ml-8 mt-7 text-xl font-semibold text-left'>
                    Age: {age}
                    </p>
                    <div className='flex flex-row'>
                        <div className="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded mt-5 ml-14 py-2 px-8 flex">
                            <h2 className='mt-2 ml-3'>{designation}</h2>
                        </div>
                        <div className="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded mt-5 ml-5 py-3 px-8 flex">
                            <h2 className='mt-2 ml-3'>{hospital}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default Profile;
