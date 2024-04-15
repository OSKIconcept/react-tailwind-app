import "./App.css";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function App() {
  return (
    <IconContext.Provider value={{ color: "black", size: "18" }}>
      <div className="flex h-screen">
        <Image />

        <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
          <LoginPage />
        </div>
      </div>
    </IconContext.Provider>
  );
}

function Image() {
  return (
    <img
      className="w-1/2 hidden lg:block object-cover transform -scale-x-100"
      src="https://img.freepik.com/free-photo/black-white-minimal-portrait_23-2149152602.jpg?t=st=1713190840~exp=1713194440~hmac=0ec214a0a07b3cb9376c5a79f144b43e64d25edbac5cfa394cfc80e37bf92486&w=1060"
      alt="creadit: pexels"
    />
  );
}

function LoginPage() {
  return (
    <div>
      <div className="text-xl text-center font-bold lg:text-left">
        <span className="text-green-600 ">&#9650;</span>
        <span>OskiDev</span>
      </div>
      <div className="text-3xl text-center font-bold lg:text-left mt-3">
        <h2>Hello,</h2>
        <h2>Welcome Back</h2>
      </div>

      <Form />
      <SignUp />
    </div>
  );
}
function Form() {
  return (
    <>
      <form action="" className="mt-6 w-[90%] lg:w-96 mx-auto space-y-4">
        <h2>Login to manage your account</h2>
        <input
          className="border w-full px-4 py-2"
          type="text"
          placeholder="Email"
        />

        <input
          className="border w-full px-4 py-2"
          type="password"
          placeholder="Password"
        />
        <div className="text-blue-600 cursor-pointer hover:text-blue-400">
          Forgot your password ?
        </div>
        <button className="w-full bg-gradient-to-l from-green-600 to-blue-500 text-white rounded py-2 font-bold hover:from-blue-500 hover:to-blue-400 transform hover:scale-105 transition ease-out duration-300">
          Login
        </button>
      </form>
    </>
  );
}

function SignUp() {
  return (
    <>
      <div className="text-center space-y-4 flex flex-col mt-4">
        <p>OR</p>
        <div className="flex justify-center items-center gap-8">
          <FaFacebook />
          <FaGoogle />
          <FaInstagram />
        </div>
        <p className="text-sm mt-4 text-center">
          don't have an account?
          <span className="text-blue-600 hover:text-blue-400 px-1">
            Sign up
          </span>
        </p>
      </div>
    </>
  );
}
