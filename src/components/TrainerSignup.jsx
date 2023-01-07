import React,{useState} from "react";
import axios from "axios";
import { useNavigate,Link} from "react-router-dom";
import swal from "sweetalert";


const hospitals = [
    { name: 'Aravind Eye Hospital, Coimbatore', id: 1 },
    { name: 'Aravind Eye Hospital, Madurai', id: 2 },
    { name: 'Aravind Eye Hospital, Pondicherry', id: 3 },
    { name: 'Aravind Eye Hospital, Chennai', id: 4 },
    { name: 'Aravind Eye Hospital, Salem', id: 5 },
    { name: 'Aravind Eye Hospital, Tirupati', id: 6 },
    { name: 'Aravind Eye Hospital, Tirunelveli', id: 7 },
    { name: 'Others', id: 8 },
];
  
const designations = [
    { title: 'MS Resident', id: 1 },
    { title: 'Primary DNB Resident', id: 2 },
    { title: 'Secondary DNB Resident', id: 3 },
    { title: 'DO Resident', id: 4 },
    { title: 'Fellow', id: 5 },
    { title: 'Consultant', id: 6 },
];

const TrainerSignup = () => {

    const [employeeId, setEmployeeId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [designation, setDesignation] = useState('');
    const [hospital, setHospital] = useState('');
    const [email, setEmail] = useState('');

    let navigate = useNavigate();
    function navigation() {
        navigate('/trainer');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const age = Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e+10);
        axios.post(`${process.env.REACT_APP_BKD_URL}/trainer/signup`, {
            uid: employeeId,
            name,
            phone,
            password,
            dob,
            designation,
            hospitalName: hospital,
            email,
            age
        }).then((response) => {
            sessionStorage.setItem("token", response.data.data.token.val);
            sessionStorage.setItem("uid", response.data.data.data.uid);
            if (response.status === 200) {
                navigation();
            }
        }).catch((err) => {
            console.log(err);
            if (err.response.status === 404) {
                swal("ERROR!", "Use valid Employee Id","error");
            }
            if (err.response.status === 401) {
                swal("ERROR!", "Password is Invalid", " error");
            }
            if (err.response.status === 500 || err.response.status === 400) {
                swal("ERROR!", "Please Try Again !!", "error");
            }
        })
    };
    
    return (
        <div className="flex">
            <div className="bg-gray-800 w-1/2 h-screen flex items-center justify-center">
            <Link to="/"><h1 className="text-5xl text-white">Welcome to the ScruBook</h1></Link>
            </div>
            <div className="w-1/2 h-screen flex flex-col items-center justify-center">
                <div className="text-2xl font-bold mb-4 mt-4">Trainer Signup</div>
                <div className="flex">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex flex-row justify-around">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employeeId">Employee ID</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="employeeId" type="text" placeholder="Enter your employee ID" value={employeeId}
                                    onChange={(event) => setEmployeeId(event.target.value)} required
                                />
                            </div> 
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name" type="text" placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} required
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-around">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="text" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone" type="text" placeholder="Enter your phone number" value={phone} onChange={(event) => setPhone(event.target.value)} required
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-around">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hospital">Hospital</label>
                                <select className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="hospital" value={hospital} onChange={(event) => setHospital(event.target.value)}>
                                <option className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="">Select a Hospital</option>
                                {hospitals.map((hospital) => (
                                <option className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" key={hospital.id} value={hospital.name}>
                                    {hospital.name}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation">Designation</label>
                                <select  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="designation" value={designation} onChange={(event) => setDesignation(event.target.value)}>
                                <option className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="">Select a Designation</option>
                                {designations.map((designation) => (
                                <option className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" key={designation.id} value={designation.title}>
                                    {designation.title}
                                </option>
                                ))}
                                </select>
                            </div>    
                        </div>
                        <div className="flex flex-row justify-around">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">Date Of Birth</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="dob" type="date" placeholder="Enter your date of birth" value={dob} onChange={(event) => setDob(event.target.value)} required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password" type="password" placeholder="Enter the password" value={password} onChange={(event) => setPassword(event.target.value)} required
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >Sign Up</button>
                        </div>
                        <div className="mb-4">
                            <a
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="/trainerlogin"
                            >Already a user? Login into your account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TrainerSignup;