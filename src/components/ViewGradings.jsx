import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const ViewGradings = () => {

    const navigate = useNavigate();
    function navigation(){
        navigate(`/viewPatient/${window.location.pathname.split("/")[2]}`);
    }

    const [gradings, setGradings] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        var auth=sessionStorage.getItem("token")
        axios.post(`${process.env.REACT_APP_BKD_URL}/${sessionStorage.getItem('home')}/getGradings`,{
            uid: window.location.pathname.split("/")[2]
        }, {
            headers: {Authorization: "Bearer "+auth}
        }).then((response)=>{
            if(response.status===202 && sessionStorage.getItem('home')==="trainee"){
                console.log("No Gradings Added. Contact trainer to add gradings!!");
                swal("Error", "No Gradings Added. Contact trainer to add gradings!!", "error")
                navigation();
            }
            if(response.status===202 && sessionStorage.getItem('home')==="trainer"){
                console.log("No Gradings Added. Please Add gradings!!");
                swal("Error", "No Gradings Added. Please Add gradings!!", "error")
                navigation();
            }
            if(response.status===200){
                setGradings(response.data.data[0]);
                setIsLoading(false);
            }
        }).catch((err)=>{
            console.log(err);
        })
    });

    return(
        <div>
            <Navbar home={`${sessionStorage.getItem('home')}`}/>
            {isLoading ?(
                <div className="loading">Loading...</div>
            ):(
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4 mt-4">View OSCAR Gradings</h1>
                <div  className="bg-white flex rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col basis-1/2">
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="draping">Draping</label>
                            <div className="w-full text-gray-900 text-center">{gradings.draping}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="sac">Sceleral Access & Cauterization</label>
                            <div className="w-full text-gray-900 text-center">{gradings.scleralAccess}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="st">Sclerocorneal Tunel</label>
                            <div className="w-full text-gray-900 text-center">{gradings.sclerocorneal}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="ce">Corneal Entry</label>
                            <div className="w-full text-gray-900 text-center">{gradings.cornealEntry}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="pvi">Paracentesis & Viscoelastic Insertion</label>
                            <div className="w-full text-gray-900 text-center">{gradings.paracentesis}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="ccofft">Capsulorrhexis: Commencement of Flap & Follow Through</label>
                            <div className="w-full text-gray-900 text-center">{gradings.capsulorrhexisCommencement}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="cfacc">Capsulorrhexis: Formation And Circular Completion</label>
                            <div className="w-full text-gray-900 text-center">{gradings.capsulorrhexisFormation}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="hvfw">Hydrodissection: Visible Fluid Wave And Free Prolapse Of One Pole Of Nucleus</label>
                            <div className="w-full text-gray-900 text-center">{gradings.hydrodissection}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="poncia">Prolapse Of Nucleus Completely into AC</label>
                            <div className="w-full text-gray-900 text-center">{gradings.prolapse}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="ne">Nucleus Extraction</label>
                            <div className="w-full text-gray-900 text-center">{gradings.nucleusExtraction}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="iaat">Irrigation And Aspiration Technique With Adequate Removal Of Cortex</label>
                            <div className="w-full text-gray-900 text-center">{gradings.irrigation}</div>
                        </div>
                    </div>
                    <div className="flex flex-col basis-1/2">   
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="lirafp">Lens Insertion, Rotation And Final Position Of Intraocular Lens</label>
                            <div className="w-full text-gray-900 text-center">{gradings.lensInsertion}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="wc">Wound Closure (Including Suturing, Hydration And Checking Security As Required)</label>
                            <div className="w-full text-gray-900 text-center">{gradings.woundClosure}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="giwn">Global Indices Wound Neutrality And Minimizing Eye Rolling And Corneal Distortion</label>
                            <div className="w-full text-gray-900 text-center">{gradings.globalIndices}</div>  
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="epcwmv">Eye Positioned Centrally Within Microscope View</label>
                            <div className="w-full text-gray-900 text-center">{gradings.eyePositioning}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="cacth">Conjunctival And Corneal Tissue Handling</label>
                            <div className="w-full text-gray-900 text-center">{gradings.conjunctival}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="isa">Intraocular Spatial Awareness</label>
                            <div className="w-full text-gray-900 text-center">{gradings.intraocular}</div>    
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="ip">Iris Protection</label>
                            <div className="w-full text-gray-900 text-center">{gradings.irisProtection}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="osafop">Overall Speed And Fluidity Of Procedure</label>
                            <div className="w-full text-gray-900 text-center">{gradings.overallSpeed}</div>
                        </div>
                        <div className="flex mb-4 text-left px-8">
                            <label className="w-full font-bold text-gray-700" htmlFor="total">Total</label>
                            <div className="w-full text-gray-900 text-center">{gradings.total}</div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ViewGradings;