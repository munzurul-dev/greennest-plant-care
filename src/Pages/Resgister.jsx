import { Eye } from "lucide-react";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const Register = () => {
  const { createUser, googleSignIn } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photoURL = from.photo.value;
    console.log(name, password, email, photoURL);
    //console.log("Button Clicked");
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };
  const handleGoogleCreateUser = () => {
    googleSignIn()
      .then((result) => console.log(result.user))
      .catch((error) => error.message);

    console.log("button Clicked");
  };
  return (
    <div className="md:p-5 lg:px-10 lg-py-2 ">
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
      <div className=" flex w-full max-w-6xl mx-auto overflow-hidden ">
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
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-green-700"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-800">
                Photo URL
              </label>
              <input
                type="text"
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
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-3 pr-11 text-sm outline-none placeholder:text-gray-400 focus:border-green-700"
                />
                <Eye
                  size={18}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-1.5 pt-1 text-sm text-gray-600">
              {[
                "At least 6 characters",
                "One uppercase letter",
                "One lowercase letter",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded-full border-2 border-red-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#176b45] py-3 cursor-pointer text-sm font-semibold text-white transition-colors hover:bg-[#125638]"
            >
              Register
            </button>

            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-500">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <button
              type="button"
              onClick={handleGoogleCreateUser}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 cursor-pointer"
            >
              <span className="text-xl font-bold text-[#4285F4]">G</span>
              Continue with Google
            </button>

            <p className="pt-3 text-center text-sm text-gray-500">
              Already have an account?
              <Link
                to="/auth/login"
                className="ml-2 font-semibold text-green-700 "
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
