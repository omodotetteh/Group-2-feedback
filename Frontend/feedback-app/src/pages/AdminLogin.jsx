import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Teacher from "../assets/baner-pic.png"
import Logo from '../assets/Netizens_logo.png' 
import InputText from '../components/InputText'
import Button from '../components/Button'
import { Eye, EyeOff } from "lucide-react"

function AdminLogin() {
      const [showPassword, setShowPassword] = useState(false);
      const [error, setError] = useState("");
      const navigate = useNavigate();
      
      const initialFormData= {
          username: "",
          password: "",
        };
  
       
        const [formData, setFormData] = useState(initialFormData);
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({ ...prev, [name]: value }));
        };
    
        const handleSubmit = (e) => {
          e.preventDefault();
          if (
                formData.username === "admin@noble.com" &&
                formData.password === "Admin#123"
            ) {
              localStorage.setItem("username", formData.username);
              localStorage.setItem("password", formData.password);
              setError(""); 
              navigate("/dashboard"); } 
          else {
              setError("Please enter correct username and password");
               }
              setFormData(initialFormData);
           };
  return (
    <div 
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" 
      style={{ backgroundImage: `linear-gradient(rgba(35,2,74,0.85), rgba(35,2,74,0.85)), url(${Teacher})` }}
    >
      
      <Link to="/">
        <img className="w-[200px] mb-6" src={Logo} alt="Netizens logo" />
      </Link> 

      
      <div className="bg-white rounded-2xl shadow-xl w-[718px] px-10 py-15 gap-15">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Hello Admin,</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Please sign in to continue</p>

        <form onSubmit={handleSubmit}>
          
        <InputText
          label="Username"
          type="email"
          name="username"
          placeholder="Jane Doe"
          value={formData.username}
          onChange={handleChange}
        />
        
        
         <div className="relative">
            <InputText
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 hover:text-purple-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

           {error && (
            <p className="text-red-500 text-sm text-center -mt-3">{error}</p>
          )}

        
         <div className="flex justify-center mt-6">
          <Button
            type="submit"
            text="Sign In"
            className="bg-[#3B027D] hover:bg-[#1B9407] gap-2.5 py-2.5 w-full min-h-12"
          />
        </div>

        </form>
        
      </div>
    </div>
  )
}

export default AdminLogin