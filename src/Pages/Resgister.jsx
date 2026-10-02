import { Eye } from "lucide-react";
import { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { FaRegUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, googleSignIn, user, setUser } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.com$/i.test(email);
  const hasMinLength = password.length >= 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);

  const passwordRules = [
    { label: "At least 6 characters", valid: hasMinLength },
    { label: "One uppercase letter", valid: hasUppercase },
    { label: "One lowercase letter", valid: hasLowercase },
  ];

  const handleRegister = async (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    if (!isValidEmail || !hasMinLength || !hasUppercase || !hasLowercase) {
      toast.warning("Please check your email and password!");
      return;
    }

    try {
      setRegisterLoading(true);
      setError("");

      const result = await createUser(email, password);

      setUser(result.user);
      from.reset();
      setEmail("");
      setPassword("");
      setShowPassword(false);

      toast.success("Registration successful!");
      navigate(location.state || "/", { replace: true });
    } catch (error) {
      setError(error?.code || "Registration failed");
      toast.error("Registration failed. Please try again!");
    } finally {
      setRegisterLoading(false);
    }
  };

  const handleGoogleCreateUser = async () => {
    try {
      setGoogleLoading(true);
      setError("");

      const result = await googleSignIn();

      setUser(result.user);

      toast.success("Google sign-up successful!");
      navigate(location.state || "/", { replace: true });
    } catch (error) {
      setError(error?.code || "Google sign-up failed");
      toast.error("Google sign-up failed. Please try again!");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="md:p-5 lg:px-10 lg-py-2">
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

      <div className="mx-auto flex w-full max-w-6xl overflow-hidden">
        <main className="w-full px-5 py-10 sm:px-9 sm:py-14">
          <div className="mb-7 text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Create an Account
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Join GreenNest and start your plant journey.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-800">
                Name
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-green-700"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="you@example.com"
                className={`w-full rounded-lg border border-gray-300 px-3.5 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-green-700 ${
                  email && !isValidEmail ? "border-red-500 text-red-500" : ""
                }`}
              />
              {email && !isValidEmail && (
                <p className="text-red-500">Enter a valid email address</p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-800">
                Photo URL
              </label>
              <input
                type="text"
                required
                name="photo"
                placeholder="https://example.com/photo.jpg"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-green-700"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-800">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-3 pr-11 text-sm outline-none placeholder:text-gray-400 focus:border-green-700"
                />
                <Eye
                  size={18}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-1.5 pt-1 text-sm">
              {passwordRules.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      item.valid
                        ? "border-green-500 bg-green-500"
                        : "border-red-300"
                    }`}
                  >
                    {item.valid && (
                      <span className="text-[10px] text-white">✓</span>
                    )}
                  </span>
                  <span
                    className={item.valid ? "text-green-600" : "text-gray-600"}
                  >
                    {item.label}
                  </span>
                </div>
              ))}

              {Boolean(error) && (
                <p className="text-center text-red-500">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={registerLoading || googleLoading}
              className="w-full cursor-pointer rounded-lg bg-[#176b45] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#125638] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {registerLoading ? "Registering..." : "Register"}
            </button>

            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-500">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <button
              type="button"
              onClick={handleGoogleCreateUser}
              disabled={registerLoading || googleLoading}
              className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="text-xl font-bold text-[#4285F4]">G</span>
              {googleLoading ? "Connecting..." : "Continue with Google"}
            </button>

            <p className="pt-3 text-center text-sm text-gray-500">
              Already have an account?
              <Link
                to="/auth/login"
                className="ml-2 font-semibold text-green-700"
              >
                Login
              </Link>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Register;
