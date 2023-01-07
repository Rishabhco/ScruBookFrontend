import React,{useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

const values = [
    { title: '0', id: 1 },
    { title: '1', id: 2 },
    { title: '2', id: 3 },
    { title: '3', id: 4 },
    { title: '4', id: 5 },
    { title: '5', id: 6 },
];

const AddGradings = () => {

    const navigate = useNavigate();
    function navigation(){
        navigate(`/viewPatient/${sessionStorage.getItem('patientId')}`);
    }

    var local = sessionStorage.getItem('home');

    const [draping, setDraping] = useState(0);
    const [sac, setSac] = useState(0);
    const [st, setSt] = useState(0);
    const [ce, setCe] = useState(0);
    const [pvi, setPvi] = useState(0);
    const [ccofft, setCcofft] = useState(0);
    const [cfacc, setCfacc] = useState(0);
    const [hvfw, setHvfw] = useState(0);
    const [poncia, setPoncia] = useState(0);
    const [ne,setNe] = useState(0);
    const [iaat, setIaat] = useState(0);
    const [lirafp, setLirafp] = useState(0);
    const [wc, setWc] = useState(0);
    const [giwn, setGiwn] = useState(0);
    const [epcwmv, setEpcwmv] = useState(0);
    const [cacth, setCacth] = useState(0);
    const [isa, setIsa] = useState(0);
    const [ip, setIp] = useState(0);
    const [osafop, setOsafop] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(draping+sac+st+ce+pvi+ccofft+cfacc+hvfw+poncia+ne+iaat+lirafp+wc+giwn+epcwmv+cacth+isa+ip+osafop);
        axios.post('http://localhost:3001/trainer/addGrading', {
            draping: draping,
            scleralAccess:sac,
            sclerocorneal:st,
            cornealEntry:ce,
            paracentesis:pvi,
            capsulorrhexisCommencement:ccofft,
            capsulorrhexisFormation:cfacc,
            hydrodissection:hvfw,
            prolapse:poncia,
            nucleusExtraction:ne,
            irrigation:iaat,
            lensInsertion:lirafp,
            woundClosure:wc,
            globalIndices:giwn,
            eyePositioning:epcwmv,
            conjunctival:cacth,
            intraocular:isa,
            irisProtection:ip,
            overallSpeed:osafop,
            total: draping+sac+st+ce+pvi+ccofft+cfacc+hvfw+poncia+ne+iaat+lirafp+wc+giwn+epcwmv+cacth+isa+ip+osafop,
            trainerUid:sessionStorage.getItem('uid'),
            patientId:sessionStorage.getItem('patientId'),
            traineeUid:sessionStorage.getItem('traineeId')
        },{
            headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}
        }).then((response)=>{
            console.log(response);
            if(response.status===202){
                swal("Error", response.data.message, "error");
                navigation();
            }
            if(response.status===200){
                swal("Success", response.data.message, "success");
                navigation();
            }
            if(response.status===400){
                swal("Error", response.data.message, "error");
                navigation();
            }
        }).catch((error)=>{
            console.log(error);
            swal("Error","Can't Find Grades. Please Try Again!!","error");
        })
    }

    return (
        <div>
            <Navbar home={`${local}`}/>
            <form onSubmit={handleSubmit}>
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold mb-4 mt-4">Add OSCAR Gradings</h1>
                    <div  className="bg-white flex rounded-lg shadow-md overflow-hidden">
                        <div className="flex flex-col basis-1/2">
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="draping">Draping</label>
                                <select  className="w-full text-gray-900" name="draping" value={draping} onChange={(event) => setDraping(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="sac">Sceleral Access & Cauterization</label>
                                <select  className="w-full text-gray-900" name="sac" value={sac} onChange={(event) => setSac(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="st">Sclerocorneal Tunel</label>
                                <select  className="w-full text-gray-900" name="st" value={st} onChange={(event) => setSt(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="ce">Corneal Entry</label>
                                <select  className="w-full text-gray-900" name="ce" value={ce} onChange={(event) => setCe(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="pvi">Paracentesis & Viscoelastic Insertion</label>
                                <select  className="w-full text-gray-900" name="pvi" value={pvi} onChange={(event) => setPvi(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="ccofft">Capsulorrhexis: Commencement of Flap & Follow Through</label>
                                <select  className="w-full text-gray-900" name="ccofft" value={ccofft} onChange={(event) => setCcofft(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="cfacc">Capsulorrhexis: Formation And Circular Completion</label>
                                <select  className="w-full text-gray-900" name="cfacc" value={cfacc} onChange={(event) => setCfacc(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="hvfw">Hydrodissection: Visible Fluid Wave And Free Prolapse Of One Pole Of Nucleus</label>
                                <select  className="w-full text-gray-900" name="hvfw" value={hvfw} onChange={(event) => setHvfw(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="poncia">Prolapse Of Nucleus Completely into AC</label>
                                <select  className="w-full text-gray-900" name="poncia" value={poncia} onChange={(event) => setPoncia(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="ne">Nucleus Extraction</label>
                                <select  className="w-full text-gray-900" name="ne" value={ne} onChange={(event) => setNe(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="iaat">Irrigation And Aspiration Technique With Adequate Removal Of Cortex</label>
                                <select  className="w-full text-gray-900" name="iaat" value={iaat} onChange={(event) => setIaat(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col basis-1/2">   
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="lirafp">Lens Insertion, Rotation And Final Position Of Intraocular Lens</label>
                                <select  className="w-full text-gray-900" name="lirafp" value={lirafp} onChange={(event) => setLirafp(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="wc">Wound Closure (Including Suturing, Hydration And Checking Security As Required)</label>
                                <select  className="w-full text-gray-900" name="wc" value={wc} onChange={(event) => setWc(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="giwn">Global Indices Wound Neutrality And Minimizing Eye Rolling And Corneal Distortion</label>
                                <select  className="w-full text-gray-900" name="giwn" value={giwn} onChange={(event) => setGiwn(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="epcwmv">Eye Positioned Centrally Within Microscope View</label>
                                <select  className="w-full text-gray-900" name="epcwmv" value={epcwmv} onChange={(event) => setEpcwmv(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="cacth">Conjunctival And Corneal Tissue Handling</label>
                                <select  className="w-full text-gray-900" name="cacth" value={cacth} onChange={(event) => setCacth(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="isa">Intraocular Spatial Awareness</label>
                                <select  className="w-full text-gray-900" name="isa" value={isa} onChange={(event) => setIsa(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="ip">Iris Protection</label>
                                <select  className="w-full text-gray-900" name="ip" value={ip} onChange={(event) => setIp(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="flex mb-4 text-left px-8">
                                <label className="w-full font-bold text-gray-700" htmlFor="osafop">Overall Speed And Fluidity Of Procedure</label>
                                <select  className="w-full text-gray-900" name="osafop" value={osafop} onChange={(event) => setOsafop(Number(event.target.value))}>
                                <option className="w-full text-gray-900" value="">Select a Score</option>
                                {values.map((data) => (
                                <option className="w-full text-gray-900" key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                                ))}
                                </select>
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

export default AddGradings;