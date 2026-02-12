import React from "react";
import loginImg from "../../assets/LoginPic.jpg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
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
            Welcome Back
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg  bg-white/30 border border-white/40 
                focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-white text-white" />
            </div>

            <div>
              <label className="block mb-2 text-sm">Password</label>
              <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-lg  bg-white/30 border border-white/40 
                focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-white text-white"/>
            </div>
            <button  type="submit"className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-600  transition font-semibold text-black" >
              Login
            </button>
          </form>

           {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="grow h-px bg-white/40"></div>
            <span className="px-4 text-sm">OR</span>
            <div className="grow h-px bg-white/40"></div>
          </div>

          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center gap-3  bg-white text-black py-3 rounded-lg hover:bg-gray-200 
          transition font-medium"><FcGoogle size={22} />Continue with Google</button>

        </div>

        </div>
    
    </section>
  );
};

export default Login;
