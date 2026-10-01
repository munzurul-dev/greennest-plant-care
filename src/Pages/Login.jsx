import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
const Login = () => {
  const { signInUser ,  googleSignIn } = useContext(AuthContext);

  const handlneLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };
  //console.log(authInfo.hello);
  const handleGoogleLognIn = ()=>{
     googleSignIn().then((result)=> console.log(result.user)).catch((error)=> console.log(error.message))
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="">
            <a className="flex items-center" href="/">
              <img
                className="h-10 w-10 object-contain "
                src="https://i.postimg.cc/GmyQc6QW/logo.png"
                alt="GreenNest Logo"
              />

              <h2 className="text-xl font-bold text-text">GreenNest</h2>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100?img=47"
              alt="Profile"
              className="h-9 w-9 rounded-full border border-gray-200 object-cover"
            />
          </div>
        </nav>
      </header>

      <div className="flex justify-center mt-2 md:mt-20 ">
        <div className="w-full max-w-5xl overflow-hidden  ">
          <div className=" flex items-center justify-center p-10  ">
            <form onSubmit={handlneLogin} className="w-full ">
              <div className="mb-7 text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Welcome Back
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  Login to continue your green journey.
                </p>
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-green-600"
                />
              </div>

              <div className="mb-3">
                <label className="mb-1.5 block text-xs font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-green-600"
                />
              </div>

              <div className="mb-5 text-right">
                <span className="cursor-pointer text-xs font-medium text-green-700">
                  Forgot Password?
                </span>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-[#246b45] py-2.5 text-sm font-semibold text-white cursor-pointer transition hover:bg-[#195638]"
              >
                Login
              </button>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs text-gray-400">OR</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <button
                type="button"
                onClick={handleGoogleLognIn}
                className="flex w-full items-center justify-center gap-2 cursor-pointer rounded-md border border-gray-300 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <span className="font-bold text-blue-600 cursor-pointer">
                  G
                </span>
                Continue with Google
              </button>

              <p className="mt-6 text-center text-xs text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/auth/register"
                  className="font-semibold text-green-700 cursor-pointer"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
