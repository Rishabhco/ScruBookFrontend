import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const ViewPatient = () => {
    const [patients, setPatients] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        var auth=sessionStorage.getItem("token")
        axios.post(`http://localhost:3001/${sessionStorage.getItem("home")}/viewPatient`,{
            uid: window.location.pathname.split("/")[2]
        }, {
            headers: {Authorization: "Bearer "+auth}
        }).then((response)=>{
            setPatients(response.data.data);
            sessionStorage.setItem('patientId',response.data.data.uid);
            sessionStorage.setItem('traineeId',response.data.data.traineeUid);
            setIsLoading(false);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    var local = sessionStorage.getItem("home");

    let button;
    if (local === 'trainer') {
        button=true;
    }
    if(local === 'trainee') {
        button=false;
    }

    return (
        <div>
            <Navbar home={local}/>
            {isLoading ? (
                <div className="loading">Loading...</div>
            ) : (  
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold mb-4 mt-4">Patient Details</h1>
                    <div className="bg-white flex rounded-lg shadow-md overflow-hidden">
                        <div className="flex flex-col basis-1/2">
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">UID/MR No</div>
                                <div className="w-full text-gray-900">{patients.uid}/{patients.mrno}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Name</div>
                                <div className="w-full text-gray-900">{patients.name}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Phone</div>
                                <div className="w-full text-gray-900">{patients.phone}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Age</div>
                                <div className="w-full text-gray-900">{patients.age}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Gender</div>
                                <div className="w-full text-gray-900">{patients.sex}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Date of surgery</div>
                                <div className="w-full text-gray-900">{patients.dateOfSurgery}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Place of surgery</div>
                                <div className="w-full text-gray-900">{patients.placeOfSurgery}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Anterior Segment Diagnosis</div>
                                <div className="w-full text-gray-900">{patients.anteriorSegmentDiagnosis}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Posterior Segment Diagnosis</div>
                                <div className="w-full text-gray-900">{patients.posteriorSegmentDiagnosis}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Systemic Diagnosis</div>
                                <div className="w-full text-gray-900">{patients.systemicDiagnosis}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Eye of Surgery</div>
                                <div className="w-full text-gray-900">{patients.eyeOfSurgery}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Type of Surgery</div>
                                <div className="w-full text-gray-900">{patients.typeOfSurgery}</div>
                            </div>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Pre Op Vision</div>
                                <div className="w-full text-gray-900">{patients.preOpVision}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Pre OP Astigmatism</div>
                                <div className="w-full text-gray-900">{patients.preOpAstigmatism}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Post OP UCVA</div>
                                <div className="w-full text-gray-900">{patients.postOPUcva}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Post OP UCVA PH</div>
                                <div className="w-full text-gray-900">{patients.postOPUcvaPH}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Post OP Astigmatism</div>
                                <div className="w-full text-gray-900">{patients.postOpAstigmatism}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Complications Intra OP</div>
                                <div className="w-full text-gray-900">{patients.complicationsIntraOP}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Complications Post OP - Day 1</div>
                                <div className="w-full text-gray-900">{patients.complicationsPostOPDayOne}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Complications Post OP - Day 30</div>
                                <div className="w-full text-gray-900">{patients.complicationsPostOPDayThirty}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-1/2 font-bold text-gray-700">Complication Reason</div>
                                <div className="w-1/2 text-gray-900">{patients.commplicationReason}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Assisted By</div>
                                <div className="w-full text-gray-900">{patients.trainerUid}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Assisted Step</div>
                                <div className="w-full text-gray-900">{patients.assistedStep}</div>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <div className="w-full font-bold text-gray-700">Video Link</div>
                                <div className="w-full text-gray-900">{patients.videoLink}</div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                <div className="flex justify-center items-center">
                    {button ?(
                        <div className="flex flex-row justify-center mt-4 mx-2">
                            <Link to="/addGradings">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Gradings</button>
                            </Link>
                        </div>
                    ):(
                        <div className="flex flex-row justify-center mt-4 mx-2">
                            <Link to="/updateProfile">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Profile</button>
                            </Link>
                        </div>
                    )}
                    <div className="flex flex-row justify-center mt-4 mx-2">
                        <Link to={`/viewGradings/${patients.uid}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Gradings</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
}

export default ViewPatient;