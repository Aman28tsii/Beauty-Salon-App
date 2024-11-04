import React from 'react';
import { Link, Route,Routes } from 'react-router-dom';
import Appointment from './Appointment';
import ManageService from './ManageService';
import ViewReport from './ViewReport';

const AdminPanel= () => {
  return (
    <div>
      <h1><b>Welcome to Admin Page</b></h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Appointment">Appointment</Link></li>
          <li><Link to="/ManageService">Manage Service</Link></li>
          <li><Link to="/ViewReport">ViewReport</Link></li>
        </ul>
      </nav>
  
<Routes>

      <Route path='/Appointment' element={<Appointment/>}>Appointment</Route>
      <Route path='/ManageService' element={<ManageService/>}>ManageService</Route>
      <Route path='/ViewReport' element={<ViewReport/>}>ViewReport</Route>
      
      </Routes>
    </div>
  );
}

export default AdminPanel;