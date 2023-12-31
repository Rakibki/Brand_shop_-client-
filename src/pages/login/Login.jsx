import React, { useContext, useState } from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";

const Login = () => {
  const {loginUser, loginWithGoogle, loginWithGithub} = useContext(authContext)
  const [error, setError] = useState("")

    const handleLogin = (e) => {
      setError("")
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        loginUser(email, password)
        .then((res) => console.log(res.user))
        .catch((e) => {
          console.log(e.message)
          setError(e.message)
        })
    }

    const handleLogInWithGoogle = () => {
      loginWithGoogle()
      .then((res) => console.log(res.user))
      .then((e) => console.log(e.message))
    }
  
    const handleLoginWithGithub = () => {
      loginWithGithub()
      .then((res) => console.log(res.user))
      .then((e) => console.log(e.message))
    }

  return (
    <div className="w-full py-16 flex justify-center bg-[#73b1b0]">
      <div className="w-[80%] shadow-2xl p-8 bg-white md:w-[70%] lg:w-[50%]">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email">Enter Your email</label> <br />
            <div className="relative">
              <input
                className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
              />
              <AiOutlineMail className="absolute text-xl top-3 right-3" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password">Enter Your password</label> <br />
            <div className="relative">
              <input
                className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              />
              <BiLockAlt className="absolute text-xl top-3 right-3" />
            </div>
          </div>
          {
            error ? <p className="mt-3 text-red-600">{error}</p> : ""
          }
          <button className="py-3 px-5 rounded-md w-full mt-3 font-medium hover:opacity-70 bg-[#e03737] text-white">
            {" "}
            Login{" "}
          </button>
        </form>

        <div className="mt-6">
          <hr />
          <h2 className="mb-2 mt-3 text-center">Or Login With</h2>
          <div className="flex justify-center">
            <div className="flex gap-3">
              <button
                onClick={handleLoginWithGithub}
                className="bg-[#f7f7f7] px-3 py-2 text-black"
              >
                Github
              </button>
              <button
                onClick={handleLogInWithGoogle}
                className="bg-[#db4437] px-3 py-2 text-white"
              >
                Google
              </button>
            </div>
          </div>
          <p className="text-center mt-4">
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link className="text-[#e49239]" to={"/register"}>
                Register here
              </Link>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
