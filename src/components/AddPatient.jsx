import React,{useState} from 'react';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';
import {gender, anteriorSegment,posteriorSegment,systemicDiagnosis,eyeOfSurgery,typeOfSurgery,OPVision, complicationsIntraArray,complicationsPostDayArray,assisstedStepArray} from './OptionsData';

const AddPatient = () => {

    const navigate = useNavigate();
    function navigation(){
        navigate('/trainee');
    }

    var local = sessionStorage.getItem("home");

    const [patientUid, setPatientId] = useState("");
    const [patientMRNo, setPatientMRNo] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [sex,setSex]=useState("");
    const [placeOfSurgery, setPlaceOfSurgery] = useState("");
    const [dos, setDos] = useState("");
    const [eos,setEos]=useState("");
    const [tos,setTos]=useState("");
    const [prev, setPrev] = useState("");
    const [preOPAstigmatism, setPreOPAstigmatism] = useState("");
    const [postOPUCVA, setPostOPUCVA] = useState("");
    const [postOPUCVAPH, setPostOPUCVAPH] = useState("");
    const [postOPAstigmatism, setPostOPAstigmatism] = useState("");
    const [complicationReason, setComplicationReason] = useState("");
    const [assisstedBy, setAssisstedBy] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [selectedValuesSystemic, setSelectedValuesSystemic] = useState("");
    const [selectedValuesAnterior, setSelectedValuesAnterior] = useState("");
    const [selectedValuesPosterior, setSelectedValuesPosterior] = useState("");
    const [selectedValuesAssisstedStep, setSelectedValuesAssisstedStep] = useState("");
    const [selectedValuescomplicationsIntra,setSelectedValuesComplicationsIntra]=useState("");
    const [selectedValuescomplicationsPostDayOne,setSelectedValuesComplicationsPostDayOne]=useState("");
    const [selectedValuescomplicationsPostDayThirty,setSelectedValuesComplicationsPostDayThirty]=useState("");

    const handleChangeSystemic = (value) => {
        const title = value.map((item) => item.title);
        const titleString = title.join(", ");
        setSelectedValuesSystemic(titleString); 
    };
    const handleChangeAnterior = (value) => {
        const title = value.map((item) => item.title);
        const titleString = title.join(", ");
        setSelectedValuesAnterior(titleString);
    };
    const handleChangePosterior = (value) => {
        const title = value.map((item) => item.title);
        const titleString = title.join(", ");
        setSelectedValuesPosterior(titleString);
    };
    const handleChangeAssisstedStep = (value) => {
        const title = value.map((item) => item.title);
        const titleString = title.join(", ");
        setSelectedValuesAssisstedStep(titleString);
    };
    const handleChangeComplicationsIntra = (value) => {
        const title = value.map((item) => item.title);
        const titleString = title.join(", ");
        setSelectedValuesComplicationsIntra(titleString);
    };
    const handleChangeComplicationsPostDayOne = (value) => {
        const title = value.map((item) => item.title);
        const titleString = title.join(", ");
        setSelectedValuesComplicationsPostDayOne(titleString);
    };
    const handleChangeComplicationsPostDayThirty = (value) => {
        const title = value.map((item) => item.title);
        const titleString = title.join(", ");
        setSelectedValuesComplicationsPostDayThirty(titleString);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/trainee/addPatient',{
            uid: patientUid,
            mrno: patientMRNo,
            name: name,
            phone: phone,
            age: Number(age),
            sex,
            dateOfSurgery:dos,
            placeOfSurgery,
            anteriorSegmentDiagnosis:selectedValuesAnterior,
            posteriorSegmentDiagnosis:selectedValuesPosterior,
            systemicDiagnosis:selectedValuesSystemic,
            eyeOfSurgery:eos,
            typeOfSurgery:tos,
            preOpVision:prev,
            preOpAstigmatism:preOPAstigmatism,
            postOPUcva:postOPUCVA,
            postOPUcvaPH:postOPUCVAPH,
            postOpAstigmatism:postOPAstigmatism,
            complicationsIntraOP:selectedValuescomplicationsIntra,
            complicationsPostOPDayOne:selectedValuescomplicationsPostDayOne,
            complicationsPostOPDayThirty:selectedValuescomplicationsPostDayThirty,
            commplicationReason:complicationReason,
            assistedStep:selectedValuesAssisstedStep,
            videoLink:videoLink,
            traineeUid:sessionStorage.getItem("uid"),
            trainerUid:assisstedBy
        },{headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }}
        ).then((response) => {
            console.log(response);
            if(response.status===202){
                swal("Error", "Patient already exists!", "error");
                navigation();
            }
            if(response.status===200){
                swal("Success!", "Patient added successfully!", "success");
                navigation();
            }
            if(response.status===400){
                swal("Error", "Something went wrong!", "error");
                navigation();
            }
        }).catch((error)=>{
            console.log(error);
            swal("Error!", "Something went wrong!", "error");
            navigation();
        })
    }

    return (
        <div>
            <Navbar home={`${local}`}/>
            <form onSubmit={handleSubmit}>
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold mb-4 mt-4">Add Patient Details</h1>
                    <div  className="bg-white flex rounded-lg shadow-md overflow-hidden">
                        <div className="flex flex-col basis-1/2">
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-1/2 font-bold text-gray-700" htmlFor="uid">UID</label>
                                <input className="w-3/4 text-gray-900 mx-2" id="uid" type="text" placeholder="Enter the patient ID" value={patientUid}
                                onChange={(event) => setPatientId(event.target.value)} required/>
                                <label className="w-1/2 font-bold text-gray-700" htmlFor="mrno">MR No</label>
                                <input className="w-3/4 text-gray-900" id="mrno" type="text" placeholder="Enter the patient mr no" value={patientMRNo}
                                onChange={(event) => setPatientMRNo(event.target.value)} required/>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="name">Name</label>
                                <input id="name" type="text" placeholder="Enter the patient name" value={name}
                                onChange={(event) => setName(event.target.value)} required className="w-full text-gray-900"></input>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="phone">Phone</label>
                            <input id="phone" type="text" placeholder="Enter the patinet phone number" value={phone}
                            onChange={(event) => setPhone(event.target.value)} required className="w-full text-gray-900"></input>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="age">Age</label>
                            <input id="age" type="text" placeholder="Enter the patient age" value={age}
                            onChange={(event) => setAge(event.target.value)} required className="w-full text-gray-900"></input>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="sex">Gender</label>
                                <select  className="w-full text-gray-900" name="sex" value={sex} onChange={(event) => setSex(event.target.value)}>
                                <option className="w-full text-gray-900" value="">Select a Gender</option>
                                {gender.map((sex) => (
                                <option className="w-full text-gray-900" key={sex.id} value={sex.title}>
                                    {sex.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label htmlFor="dos" className="w-full font-bold text-gray-700">Date of surgery</label>
                                <input className="w-full text-gray-900" id="dos" type="date" placeholder="Enter the date of surgery" value={dos} onChange={(event) => setDos(event.target.value)} required
                                />
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="placeOfSurgery">Place Of Surgery</label>
                                <input id="placeOfSurgery" type="text" placeholder="Enter the place of surgery" value={placeOfSurgery}
                                onChange={(event) => setPlaceOfSurgery(event.target.value)} required className="w-full text-gray-900"></input>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-1/2 font-bold text-gray-700" htmlFor="asd">Anterior Segment Diagnosis</label>
                                <Dropdown id="asd" className="font-bold text-gray-700" isSearchable isMulti placeHolder="Select a Segment" options={anteriorSegment} onChange={(value)=>handleChangeAnterior(value)}/>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-1/2 font-bold text-gray-700" htmlFor="psd">Posterior Segment Diagnosis</label>
                                <Dropdown id="psd" className="font-bold text-gray-700" isSearchable isMulti placeHolder="Select a Segment" options={posteriorSegment} onChange={(value)=>handleChangePosterior(value)}/>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-1/2 font-bold text-gray-700" htmlFor="sd">Systemic Diagnosis</label>
                                <Dropdown id="sd" className="font-bold text-gray-700" isSearchable isMulti placeHolder="Select a Segment" options={systemicDiagnosis} onChange={(value)=>handleChangeSystemic(value)}/>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="eos">Eye of Surgery</label>
                                <select  className="w-full text-gray-900" name="eos" value={eos} onChange={(event) => setEos(event.target.value)}>
                                <option className="w-full text-gray-900" value="">Select the Eye Of Surgery</option>
                                {eyeOfSurgery.map((eye) => (
                                <option className="w-full text-gray-900" key={eye.id} value={eye.title}>
                                    {eye.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="tos">Type of Surgery</label>
                                <select  className="w-full text-gray-900" name="tos" value={tos} onChange={(event) => setTos(event.target.value)}>
                                <option className="w-full text-gray-900" value="">Select the Type Of Surgery</option>
                                {typeOfSurgery.map((type) => (
                                <option className="w-full text-gray-900" key={type.id} value={type.title}>
                                    {type.title}
                                </option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="prev">Pre OP Vision</label>
                                <select  className="w-full text-gray-900" name="prev" value={prev} onChange={(event) => setPrev(event.target.value)}>
                                <option className="w-full text-gray-900" value="">Select the Pre OP Vision</option>
                                {OPVision.map((pre) => (
                                <option className="w-full text-gray-900" key={pre.id} value={pre.title}>
                                    {pre.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="preOPAstigmatism">Pre OP Astigmatism</label>
                            <input id="preOPAstigmatism" type="text" placeholder="Enter the pre op astigmatism" value={preOPAstigmatism}
                            onChange={(event) => setPreOPAstigmatism(event.target.value)}  className="w-full text-gray-900"></input>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="postOPUCVA">Post OP UCVA</label>
                                <select  className="w-full text-gray-900" name="postOPUCVA" value={postOPUCVA} onChange={(event) => setPostOPUCVA(event.target.value)}>
                                <option className="w-full text-gray-900" value="">Select the Post OP UCVA</option>
                                {OPVision.map((post) => (
                                <option className="w-full text-gray-900" key={post.id} value={post.title}>
                                    {post.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="postOPUCVA">Post OP UCVA PH</label>
                                <select  className="w-full text-gray-900" name="postOPUCVAPH" value={postOPUCVAPH} onChange={(event) => setPostOPUCVAPH(event.target.value)}>
                                <option className="w-full text-gray-900" value="">Select the Post OP UCVA PH</option>
                                {OPVision.map((post) => (
                                <option className="w-full text-gray-900" key={post.id} value={post.title}>
                                    {post.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="postOPAstigmatism">Post OP Astigmatism</label>
                            <input id="postOPAstigmatism" type="text" placeholder="Enter the post op astigmatism" value={postOPAstigmatism}
                            onChange={(event) => setPostOPAstigmatism(event.target.value)}  className="w-full text-gray-900"></input>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-1/2 font-bold text-gray-700" htmlFor="complicationsIntra">Complications Intra OP</label>
                                <Dropdown id="complicationsIntra" className="font-bold text-gray-700" isSearchable isMulti placeHolder="Select the Complications Intra OP" options={complicationsIntraArray} onChange={(value) => handleChangeComplicationsIntra(value)}/>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-1/2 font-bold text-gray-700" htmlFor="complicationsPostOne">Complications Post OP - Day 1</label>
                                <Dropdown id="complicationsPostOne" className="font-bold text-gray-700" isSearchable isMulti placeHolder="Select the Complications Post OP - Day 1" options={complicationsPostDayArray} onChange={(value) => handleChangeComplicationsPostDayOne(value)}/>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-1/2 font-bold text-gray-700" htmlFor="complicationsPostThirty">Complications Post OP - Day 30</label>
                                <Dropdown id="complicationsPostThirty" className="font-bold text-gray-700" isSearchable isMulti placeHolder="Select the Complications Post OP - Day 30" options={complicationsPostDayArray} onChange={(value) => handleChangeComplicationsPostDayThirty(value)}/>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="complicationReason">Complication Reason</label>
                            <input id="complicationReason" type="text" placeholder="Enter the comlication reason" value={complicationReason}
                            onChange={(event) => setComplicationReason(event.target.value)}  className="w-full text-gray-900"></input>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="assisstedby">Assissted By</label>
                                <input id="assisstedby" type="text" placeholder="Enter the assisstant id" value={assisstedBy}
                                onChange={(event) => setAssisstedBy(event.target.value)} required className="w-full text-gray-900"></input>
                                </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-1/2 font-bold text-gray-700" htmlFor="assistedStep">Assisted Step</label>
                                <Dropdown id="assistedStep" className="font-bold text-gray-700" isSearchable isMulti placeHolder="Select the Assisted Step" options={assisstedStepArray} onChange={(value) => handleChangeAssisstedStep(value)}/>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="videoLink">Video Link</label>
                            <input id="videoLink" type="text" placeholder="Enter the video link" value={videoLink}
                            onChange={(event) => setVideoLink(event.target.value)}  className="w-full text-gray-900"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-4 mb-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >Save the Details</button>
                </div>
            </form>
        </div>
    );
}

export default AddPatient;