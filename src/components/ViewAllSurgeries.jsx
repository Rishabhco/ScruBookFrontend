import React,{useEffect, useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import {EyeIcon} from '@heroicons/react/outline';
import {Link} from 'react-router-dom';

const ViewAllSurgeries = () => {

    const [surgeries, setSurgeries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.post("http://localhost:3001/trainee/getPatients", {
            uid: sessionStorage.getItem("uid")
        }, {
            headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}
        }).then((response)=>{
            setSurgeries(response.data.data);
            setIsLoading(false);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    return (
        <div>
            <Navbar home={"trainee"}/>
            <div className="container">
                <h1 className="text-2xl font-bold mb-4 mt-4">All Surgery Detials</h1>
                {isLoading ? (
                    <div className="loading">Loading...</div>
                ) : surgeries.length > 0 ? (
                    <table className="patient-table container text-center items-center content-center">
                        <thead>
                            <tr className="text-sm">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Age</th>
                                <th className="px-4 py-2">Eye Of Surgery</th>
                                <th className="px-4 py-2">Type Of Surgery</th>
                                <th className="px-4 py-2">Anterior Segment Diagnosis</th>
                                <th className="px-4 py-2">Posterior Segment Diagnosis</th>
                                <th className="px-4 py-2">Systemic Diagnosis</th>
                                <th className="px-4 py-2">Pre OP Vision</th>
                                <th className="px-4 py-2">Post OP Vision UCVA</th>
                                <th className="px-4 py-2">Post OP Vision UCVA-PH</th>
                                <th className="px-4 py-2">Complications Intra OP</th>
                                <th className="px-4 py-2">Complications Post OP Day-1</th>
                                <th className="px-4 py-2">Complications Post OP Day-30</th>
                                <th className="px-4 py-2">Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                        {surgeries.map((surgery, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2">{surgery.name}</td>
                                <td className="px-4 py-2">{surgery.age}</td>
                                <td className="px-4 py-2">{surgery.eyeOfSurgery}</td>
                                <td className="px-4 py-2">{surgery.typeOfSurgery}</td>
                                <td className="px-4 py-2">{surgery.anteriorSegmentDiagnosis}</td>
                                <td className="px-4 py-2">{surgery.posteriorSegmentDiagnosis}</td>
                                <td className="px-4 py-2">{surgery.systemicDiagnosis}</td>
                                <td className="px-4 py-2">{surgery.preOpVision}</td>
                                <td className="px-4 py-2">{surgery.postOPUcva}</td>
                                <td className="px-4 py-2">{surgery.postOPUcvaPH}</td>
                                <td className="px-4 py-2">{surgery.complicationsIntraOP}</td>
                                <td className="px-4 py-2">{surgery.complicationsPostOPDayOne}</td>
                                <td className="px-4 py-2">{surgery.complicationsPostOPDayThirty}</td>
                                <td className="px-4 py-2 flex justify-center items-center"><Link to={`/viewPatient/${surgery.uid}`}><EyeIcon className="h-7 w-7 text-gray-700"/></Link></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="no-patients">No patients added yet.</div>
                )}
            </div>
        </div>
    )
}

export default ViewAllSurgeries;