
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { Eye } from "lucide-react";
import { FaRegUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, googleSignIn, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [loginLoading, setLoginLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handlneLogin = async (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    try {
      setLoginLoading(true);
      setError("");

      await signInUser(email, password);

      toast.success("Login successful!");
      navigate(location.state || "/", { replace: true });
    } catch (error) {
      setError(error.code);
      toast.error("Login failed. Please check your credentials!");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleGoogleLognIn = async () => {
    try {
      setGoogleLoading(true);
      setError("");

      await googleSignIn();

      toast.success("Google login successful!");
      navigate(location.state || "/", { replace: true });
    } catch (error) {
      setError(error.code);
      toast.error("Google login failed. Please try again!");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <a className="flex items-center" href="/">
              <img
                className="h-10 w-10 object-contain"
                src="https://i.postimg.cc/GmyQc6QW/logo.png"
                alt="GreenNest Logo"
              />
              <h2 className="text-xl font-bold text-text">GreenNest</h2>
            </a>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              <img
                src={user?.photoURL}
                alt="Profile"
                className="h-9 w-9 rounded-full border border-gray-200 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <FaRegUserCircle />
          )}
        </nav>
      </header>

      <div className="mt-2 flex justify-center md:mt-20">
        <div className="w-full max-w-5xl overflow-hidden">
          <div className="flex items-center justify-center p-10">
            <form onSubmit={handlneLogin} className="w-full">
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
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-green-600"
                  />
                  <Eye
                    size={18}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  />
                </div>

                {error && (
                  <p className="mt-5 text-center font-semibold text-red-700">
                    {error}
                  </p>
                )}
              </div>

              <div className="mb-5 text-right">
                <Link
                  to="/auth/ForgotPassword"
                  className="cursor-pointer text-xs font-medium text-green-700"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loginLoading || googleLoading}
                className="w-full cursor-pointer rounded-md bg-[#246b45] py-2.5 text-sm font-semibold text-white transition hover:bg-[#195638] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loginLoading ? "Logging in..." : "Login"}
              </button>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs text-gray-400">OR</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <button
                type="button"
                onClick={handleGoogleLognIn}
                disabled={loginLoading || googleLoading}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="font-bold text-blue-600">G</span>
                {googleLoading ? "Connecting..." : "Continue with Google"}
              </button>

              <p className="mt-6 text-center text-xs text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/auth/register"
                  className="cursor-pointer font-semibold text-green-700"
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