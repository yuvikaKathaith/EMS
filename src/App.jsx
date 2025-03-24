import { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import {AuthContext} from "./Context/AuthProvider"

const App = () => {
  // localStorage.clear();
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);
  // console.log(authData)

  useEffect(() => { // this useeffect checks the local storage loggedInUser when it reloads, it keeps the user logged in  
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []) // dependency arrays means run this only when components loads/reloads

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
    }
    else if(authData){
      const employee = authData[0].empData.find((e) => email == e.email && password == e.password);
      if(employee){
        // console.log(employee);
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}));
      }
    }
    else{
      alert('Invalid credentials');
    }
  }
  return (
    <div className="text-white">
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user=='admin'? <AdminDashboard changeUser={setUser} /> : user == 'employee'? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : null }
    </div>
  )
}

export default App