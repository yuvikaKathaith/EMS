import { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import {AuthContext} from "./Context/AuthProvider"



function App() {
  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);
  console.log(authData.empData);

  if(authData){
    const loggenInUser = getLocalStorage("loggedInUser");
  }

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin');
      localStorage.setItem('loggenInUser', JSON.stringify({role: 'admin'}));
      // console.log('This is Admin');
    }
    else if(authData && authData.empData.find((e) => email == e.email) && authData.empData.find((e) => password == e.password)){
      setUser('employee');
      set
      // console.log('This is Employee');
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