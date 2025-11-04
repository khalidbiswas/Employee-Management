import React, { useContext, useState } from 'react';
import Login from './assets/components/Auth/Login';
import EmployeeDashBoard from './assets/components/Dash/EmployeeDashboard';
import AdminDashboard from './assets/components/Dash/AdminDashboard'
import { AuthContext } from './assets/context/AuthProvider';
const App = () => {
  const [user, setUser] = useState(null)


  const handleLogIn = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
    } else if (email == 'user@example.com' && password == '123') {
      setUser('employee')

    }
    else {
      alert('Invalid credentials')
    }
  }
  const data = useContext(AuthContext)

console.log(data);

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