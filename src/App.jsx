import React, { useContext, useEffect, useState } from 'react';
import Login from './assets/components/Auth/Login';
import EmployeeDashBoard from './assets/components/Dash/EmployeeDashboard';
import AdminDashboard from './assets/components/Dash/AdminDashboard'
import { AuthContext } from './assets/context/AuthProvider';
const App = () => {
  const [user, setUser] = useState(null)

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    console.log(loggedInUser);
    
    
  }
})

  const handleLogIn = (email, password) => {
    if (authData && authData.admin.find((e)=>email == e.email && password ==e.password) ) {
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (authData && authData.employee.find((e) => email == e.email && password == e.password)) {
      setUser('employee')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))

    }
    else {
      alert('Invalid credentials')
    }
  }
  const authData = useContext(AuthContext)




  return (
    <>
      {
        !user ? <Login handleLogIn={handleLogIn}></Login> : ''
      }
      {
        user == 'admin' ? <AdminDashboard></AdminDashboard> : user == 'employee' ? < EmployeeDashBoard data={data} /> : ''
      }

    </>
  );
};

export default App;