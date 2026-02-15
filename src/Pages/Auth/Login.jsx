import React from "react";
import loginImg from "../../assets/LoginPic.jpg";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/";

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loginUser, googleLogin } = useAuth();

  // 🔐 EMAIL/PASSWORD LOGIN
  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        toast.success("Login Successful!");
        navigate(redirectPath, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Login Failed!");
      });
  };

  // 🔐 GOOGLE LOGIN (ONLY ON BUTTON CLICK)
  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;

      await fetch("https://garments-server-blush.vercel.app/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          role: "buyer",
          photoURL: user.photoURL,
          status: "active",
        }),
      });

      toast.success("Google Login Successful!");
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Google Login Failed!");
    }
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${loginImg})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 w-full flex justify-center px-10 ml-1 md:ml-110">
        <div className="w-full max-w-md p-10 rounded-2xl backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl text-white">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Welcome Back
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-3 rounded-lg bg-white/30 border border-white/40"
              />
              {errors.email && <p className="text-red-600">Email is required</p>}
            </div>

            <div>
              <label className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full px-4 py-3 rounded-lg bg-white/30 border border-white/40"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-600 font-semibold text-black"
            >
              Login
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="grow h-px bg-white/40"></div>
            <span className="px-4 text-sm">OR</span>
            <div className="grow h-px bg-white/40"></div>
          </div>

          {/* ✅ FIXED GOOGLE BUTTON */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-lg hover:bg-gray-200"
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>

        </div>
      </div>
    </section>
  );
};

export default Login;
