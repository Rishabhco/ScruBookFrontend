import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import swal from 'sweetalert';

const TrainerLogin = () => {

    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();
    function navigation() {
        navigate('/trainer');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_BKD_URL}/trainer/login`, {
            uid: employeeId,
            password
        }).then((response) => {
            sessionStorage.setItem("token", response.data.data.token.val);
            sessionStorage.setItem("uid", response.data.data.trainer.uid);
            if (response.status === 200) {
                navigation();
            }
        }).catch((err) => {
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
                <h1 className="text-2xl text-gray-700 font-bold mb-4">Trainer Login</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employeeId">Employee ID</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="employeeId"
                        type="text"
                        placeholder="Enter your employee ID"
                        value={employeeId}
                        onChange={(event) => setEmployeeId(event.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >Login</button>
                </div>
                <div className="mb-4">
                    <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="/trainersignup"
                    >  Not a user? Create an account</a>
                </div>
                </form>
            </div>
        </div>
    );
};

export default TrainerLogin