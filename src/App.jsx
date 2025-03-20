import { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import {AuthContext} from "./Context/AuthProvider"



function App() {
  // localStorage.clear();
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = getLocalStorage("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
    }
    else if(authData){
      const employee = authData.empData.find((e) => email == e.email && password == e.password);
      if(employee){
        console.log(employee);
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}));
      }
    }
    else{
      alert('Invalid credentials');
    }
  }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user=='admin'? <AdminDashboard/> : user == 'employee'? <EmployeeDashboard data={loggedInUserData} /> : null }
    </>
  )
}

export default App