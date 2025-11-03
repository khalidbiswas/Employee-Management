import React from 'react';
import Login from './assets/components/Auth/Login';
import EmployeeDashBoard from './assets/components/Dash/EmployeeDashboard';
import AdminDashboard from './assets/components/Dash/AdminDashboard'
const App = () => {
  return (
    <>
      {/* <Login></Login> */}
      <EmployeeDashBoard/>
      <AdminDashboard></AdminDashboard>
    </>
  );
};

export default App;