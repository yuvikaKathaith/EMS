import { useEffect, useState } from "react";
import Login from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";



function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin');
      console.log('This is Admin');
    }
    else if(email == 'employee@me.com' && password == '123'){
      setUser('employee');
      console.log('This is Employee');
    }
    else{
      alert('Invalid credentials');
    }
  }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user=='admin'? <AdminDashboard/> : <EmployeeDashboard />}
    </>
  )
}

export default App