import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const employees = [
  { id: 1, firstName: "Arjun", email: "e@e.com", password: "123" },
  { id: 2, firstName: "Sneha", email: "employee2@example.com", password: "123" },
  { id: 3, firstName: "Ravi", email: "employee3@example.com", password: "123" },
  { id: 4, firstName: "Priya", email: "employee4@example.com", password: "123" },
  { id: 5, firstName: "Karan", email: "employee5@example.com", password: "123" }
];

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("Employee");
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="flex w-[900px] h-[500px] bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="w-1/2 p-10 flex flex-col justify-center bg-white">
          <h1 className="text-3xl font-semibold text-gray-700 mb-6">Sign In</h1>
          <div className="flex items-center mb-4">
            <span className="text-gray-500 mr-2">Login As:</span>
            <button
              className={`mr-2 font-medium ${role === "Employee" ? "border-b-4 border-amber-300 text-gray-600" : "text-gray-400"
              }`}
              onClick={() => {
                setEmail('')
                setPassword('')
                setRole("Employee")
              }}
            >
              Employee
            </button>
            |
            <button
              className={`ml-2 font-medium ${role === "Admin" ? "border-b-4 border-amber-300 text-gray-600" : "text-gray-400"
              }`}
              onClick={() => {
                setEmail('')
                setPassword('')
                setRole("Admin")
              }}
            >
              Admin
            </button>
          </div>
          <form onSubmit={submitHandler} className="flex flex-col">
            <div className="relative mb-4">
              <FaEnvelope className="absolute left-4 top-3 text-gray-400" />
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="relative mb-4">
              <FaLock className="absolute left-4 top-3 text-gray-400" />
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg">
              Sign In
            </button>
          </form>
          
          {role === "Employee"? (
            <div className="flex flex-col mt-3">
              <select
                className="w-full mb-2 px-3 py-2 border border-yellow-400 rounded-lg text-gray-700"
                value={selectedEmployee.id}
                onChange={(e) => {
                  const emp = employees.find(emp => emp.id === parseInt(e.target.value));
                  setSelectedEmployee(emp);
                }}
                onClick={() => {
                  setEmail(selectedEmployee.email);
                  setPassword(selectedEmployee.password);
                }}
              >
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    Guest Login as Employee {emp.id}
                  </option>
                ))}
              </select>
            </div>
          )
          :
          (
            <button
              onClick={() => {
                setEmail("admin@me.com");
                setPassword("123");
                setRole("Admin");
              }}
              className="w-full border border-amber-300 bg-transparent text-black font-semibold py-2 rounded-lg mt-3"
            >
              Guest Login as Admin
            </button>
          )}
        </div>
        <div className="w-1/2 bg-yellow-100 flex items-center justify-center">
          <img src="/assets/Office work-rafiki.svg" alt="Illustration" className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default Login;
