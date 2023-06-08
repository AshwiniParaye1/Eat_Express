import React, { useState } from "react";
import { LoginBg, Logo } from "../assets/";
import LoginInput from "../components/LoginInput";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* background img */}
      <img
        src={LoginBg}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      {/* content box */}

      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
        {/* top logo section */}
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Logo} alt="" className="w-8" />
          <p className="text-white font-semibold text-2xl">City</p>
        </div>

        {/* welcome text */}

        <p className="text-3xl font-semibold text-white">Welcome Back</p>
        <p className="text-xl text-slate-300 -mt-5">
          {isSignUp ? "Sign Up" : "Sign In"} with following
        </p>

        {/* input section */}

        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeholder={"Email here"}
            icon={<FaEnvelope className="text-xl textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />
          <LoginInput
            placeholder={"Password here"}
            icon={<FaLock className="text-xl textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />
          {isSignUp && (
            <LoginInput
              placeholder={"Confirm Password"}
              icon={<FaLock className="text-xl textColor" />}
              inputState={confirmPassword}
              inputStateFunc={setConfirmPassword}
              type="password"
              isSignUp={isSignUp}
            />
          )}

          {!isSignUp ? (
            <p className="text-slate-300 ">
              Don't have an account ?{" "}
              <motion.button
                {...buttonClick}
                className="text-yellow-300 underline cursor-pointer bg-transparent "
                onClick={() => setIsSignUp(true)}
              >
                Create One
              </motion.button>
            </p>
          ) : (
            <p className="text-slate-300 ">
              Already have an account ?{" "}
              <motion.button
                {...buttonClick}
                className="text-yellow-300 underline cursor-pointer bg-transparent "
                onClick={() => setIsSignUp(false)}
              >
                Sign-in here
              </motion.button>
            </p>
          )}

          {/* button section */}

          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-yellow-400 cursor-pointer text-slate-800 text-xl  capitalize hover:bg-yellow-500  transition-all duration-150 font-semibold"
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-yellow-400 cursor-pointer text-slate-800 text-xl  capitalize hover:bg-yellow-600 transition-all duration-150 font-semibold"
            >
              Sign In
            </motion.button>
          )}
        </div>

        <div className="flex items-center justify-between gap-16">
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
          <p className="text-white">or</p>
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
        </div>
        {isSignUp ? (
          <motion.div
            {...buttonClick}
            className="flex items-center justify-center px-20 py-2 bg-slate-300 backdrop-blur-md cursor-pointer rounded-3xl gap-4"
          >
            <FcGoogle className="text-3xl" />
            <p className="capitalize text-base text-headingColor">
              Sign Up with Google
            </p>
          </motion.div>
        ) : (
          <motion.div
            {...buttonClick}
            className="flex items-center justify-center px-20 py-2 bg-slate-300 backdrop-blur-md cursor-pointer rounded-3xl gap-4"
          >
            <FcGoogle className="text-3xl" />
            <p className="capitalize text-base text-headingColor">
              Sign In with Google
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Login;
