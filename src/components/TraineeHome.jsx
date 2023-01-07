import React, {useState,useEffect}from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import {EyeIcon} from '@heroicons/react/outline';

const TraineeHome = () => {
    const [patients, setPatients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        var auth=sessionStorage.getItem("token")
        axios.post(`${process.env.REACT_APP_BKD_URL}/trainee/getPatients`,{
            uid: sessionStorage.getItem("uid")
        }, {
            headers: {Authorization: "Bearer "+auth}
        }).then((response)=>{
            setPatients(response.data.data);
            setIsLoading(false);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    return (
        <div>
            <Navbar home={"trainee"}/> 
            <div className="container flex">
                <div className="left-section p-4 flex flex-col">
                    <Link to="/addPatient" className="add-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                        Add Patient
                    </Link>
                    <Link to="/viewAllSurgeries" className="add-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                        View All Surgeries
                    </Link>
                    <input type="text" className="search-input p-2 border rounded" placeholder="Search for patients..." />
                </div>
                <div className="right-section w-screen p-4">
                {isLoading ? (
                    <div className="loading">Loading...</div>
                ) : patients.length > 0 ? (
                    <table className="patient-table container text-center items-center content-center">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">UID</th>
                                <th className="px-4 py-2">MR.NO</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Age</th>
                                <th className="px-4 py-2">Gender</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {patients.map((patient, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2">{patient.uid}</td>
                                <td className="px-4 py-2">{patient.mrno}</td>
                                <td className="px-4 py-2">{patient.name}</td>
                                <td className="px-4 py-2">{patient.age}</td>
                                <td className="px-4 py-2">{patient.sex}</td>
                                <td className="px-4 py-2 flex justify-center items-center"><Link to={`/viewPatient/${patient.uid}`}><EyeIcon className="h-7 w-7 text-gray-700"/></Link></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="no-patients">No patients added yet.</div>
                )}
                </div>
            </div>
        </div>
    );
}

export default TraineeHome;