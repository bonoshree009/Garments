import React from "react";
import loginImg from "../../assets/LoginPic.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
    const {register, handleSubmit, formState:{errors}} =useForm()
    const {registerUser, updateUserProfile}= useAuth()
     const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || "/";

    const handleRegister =(data)=>{
        // console.log("after register",data);
         const profileImg= data.photoURL[0]
        registerUser(data.email,data.password).
        then(() =>{
             const formData = new FormData()
             formData.append("image", profileImg)
             const image_Api_Url= `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Host_key}`

             axios.post(image_Api_Url, formData).then (res =>{
                // console.log("after image upload", res.data.data.url)
                // update profile
                const userprofile = {
                    displayName : data.name,
                    photoURL : res.data.data.url
                }
                updateUserProfile(userprofile).then(async () =>{
             const imageUrl = res.data.data.url;
                    await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      role: data.role,
      photoURL:  imageUrl,
      status: "pending"
    })
  });

                     
                     toast.success(" Succesfully Register")
                      navigate(redirectPath);
                }
                
            )
                .catch(error=> console.log(error))

             })

        }).
        catch((error) =>{
             console.log("Firebase register error:", error.message);
           toast.error("Register Failed!");
        })

    }
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${loginImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Right Side Container */}
      <div className="relative z-10 w-full flex justify-center px-10 ml-1 md:ml-110">
        
        {/* Glass Form */}
        <div className="w-full max-w-md p-10 rounded-2xl  backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl text-white">

          <h2 className="text-3xl font-bold mb-6 text-center">
           Register Now!
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(handleRegister)}>
             <div>
              <label className="block mb-2 text-sm">Name</label>
              <input type="text" {...register('name',{required:true})} 
              placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg  bg-white/30 border border-white/40 
                focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-white text-white" />
                {errors.name?.type === "required" && (
        <p className="text-red-600">Name is required</p>
      )}
        
            </div>
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input type="email" {...register('email',{required:true})} 
              placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg  bg-white/30 border border-white/40 
                focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-white text-white" />
                {errors.email?.type === "required" && (
        <p className="text-red-600">Email is required</p>
      )}
            </div>
            {/* Photo URL */}
          <div>
            <label className="block mb-1 text-sm font-medium">Photo URL</label>
            <input
              type="file"
              className="w-full px-4 py-2 border rounded-lg file-input" placeholder="Your photo"
              {...register("photoURL", {
                required: "Photo URL is required",
              })}
            />
          </div>
           {/* Role Dropdown */}
          <div>
            <label className="block mb-1 text-sm font-medium">Role</label>
            <select
              className="w-full px-4 py-2 border rounded-lg bg-amber-300"
              {...register("role", { required: "Role is required" })}
            >
              <option value="">Select Role</option>
              <option value="buyer">Buyer</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>

              
            <div>
                <label className="block mb-2 text-sm">Password</label>

                   <input
                     type="password"
                     className="w-full px-4 py-3 rounded-lg border"
                     {...register("password", {
                       required: "Password is required",
                       minLength: {
                         value: 6,
                         message: "Password must be at least 6 characters",
                       },
                       pattern: {
                         value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                         message:
                           "Password must contain at least 1 uppercase and 1 lowercase letter",
                            },
                     })}
                   />
                   {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}

            </div>
            <button  type="submit"className="w-full py-3 rounded-lg bg-orange-600 hover:bg-orange-800  transition font-semibold text-white" >
             Register
            </button>
           <h1> Already have an account? <Link to="/login" className="text-orange-700">Login</Link></h1>
          </form>

          

        
        </div>

        </div>
    
    </section>
  );
};

export default Register;
