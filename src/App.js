import Home from './components/Home';
import TraineeLogin from './components/TraineeLogin';
import TraineeSignup from './components/TraineeSignup';
import TrainerLogin from './components/TrainerLogin';
import TrainerSignup from './components/TrainerSignup';
import TraineeHome from './components/TraineeHome';
import TrainerHome from './components/TrainerHome';
import Profile from './components/Profile';
import AddPatient from './components/AddPatient';
import ViewPatient from './components/ViewPatient';
import AddGradings from './components/AddGradings';
import ViewGradings from './components/ViewGradings';
import ViewAllSurgeries from './components/ViewAllSurgeries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/traineelogin" element={<TraineeLogin />} />
          <Route exact path="/traineesignup" element={<TraineeSignup />} />

          <Route exact path="/trainerlogin" element={<TrainerLogin />} />
          <Route exact path="/trainersignup" element={<TrainerSignup />} />
          
          <Route exact path="/trainee" element={<TraineeHome />} />
          <Route exact path="/trainer" element={<TrainerHome />} />

          <Route exact path="/profile" element={<Profile />} />

          <Route exact path="/addPatient" element={<AddPatient />} />
          <Route exact path="/viewPatient/:uid" element={<ViewPatient />} />
          
          <Route exact path="/addGradings" element={<AddGradings />} />
          <Route exact path="/viewGradings/:uid" element={<ViewGradings />} />

          <Route exact path="/viewAllSurgeries" element={<ViewAllSurgeries />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
