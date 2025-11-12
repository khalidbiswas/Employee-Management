import React, { useContext, useEffect, useState } from 'react';
import Login from './assets/components/Auth/Login';
import EmployeeDashBoard from './assets/components/Dash/EmployeeDashboard';
import AdminDashboard from './assets/components/Dash/AdminDashboard'
import { AuthContext } from './assets/context/AuthProvider';
const App = () => {
  const [user, setUser] = useState(null)
  const userData = useContext(AuthContext)
  const [loggedInUser, setLoggedinUser] = useState(null)


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {

      const currentLog = JSON.parse(loggedInUser);

      setUser(currentLog.role);
      setLoggedinUser(currentLog.data);

    }
  }, [])

  const handleLogIn = (email, password) => {
    if (!userData) return alert('Wrong id or password!');
    const adminData = userData?.admin?.find((e) => email === e.email && password === e.password);
    const employeeData = userData?.employee?.find((e) => email === e.email && password === e.password);

    
    
    
    

    if (adminData) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminData, }))
      setLoggedinUser(adminData);
    }
    else if (employeeData) {


      setUser('employee');
      setLoggedinUser(employeeData)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employeeData, }))



    }
  }
  
  return (
    <>
      {
        !user && <Login handleLogIn={handleLogIn}></Login>
      }
      {
        user === 'admin' && <AdminDashboard data={loggedInUser} /> }
      {
      user === 'employee' && < EmployeeDashBoard data={loggedInUser} />
      }

    </>
  );
};

export default App;