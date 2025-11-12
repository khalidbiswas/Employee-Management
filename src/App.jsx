import React, { useContext, useEffect, useState } from 'react';
import Login from './assets/components/Auth/Login';
import EmployeeDashBoard from './assets/components/Dash/EmployeeDashboard';
import AdminDashboard from './assets/components/Dash/AdminDashboard'
import { AuthContext } from './assets/context/AuthProvider';
const App = () => {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  const [loggedInUser, setLogginUser] = useState(null)

  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {

      const currentLog = loggedInUser.JSON.parse(loggedInUser);

      setUser(currentLog.role);
      setLogginUser(currentLog.data);

    }
  }, [])

  const handleLogIn = (email, password) => {
    if (userData) {

      const adminData = userData.admin.find((e) => email == e.email && password == e.password)
      if (adminData) {
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      }
    } else if (userData) {
      const employeeData = userData.employee.find((e) => email == e.email && password == e.password)
      if (employeeData) {
        setUser('employee');
        setLogginUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: 'employee' }))

      }
    }
    else {
      alert('Invalid credentials')
    }
  }





  return (
    <>
      {
        !user ? <Login handleLogIn={handleLogIn}></Login> : ''
      }
      {
        user == 'admin' ? <AdminDashboard></AdminDashboard> : user == 'employee' ? < EmployeeDashBoard /> : ''
      }

    </>
  );
};

export default App;