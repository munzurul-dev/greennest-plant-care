const Login = () => {
  const imageUrl = "https://i.postimg.cc/mgZvqMFy/loging-Page-Img.png";

  return (
    <div className="min-h-screen md:p-5  lg:p-10 ">
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

      <div className="flex justify-center mt-2 md:mt-8 ">
        <div className="w-full max-w-5xl overflow-hidden ">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              className="relative min-h-70 bg-cover bg-center md:min-h-200 rounded-md"
              style={{ backgroundImage: `url("${imageUrl}")` }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative flex h-full min-h-70 items-end p-8 md:min-h-120"></div>
            </div>

            <div className="flex items-center justify-center px-6 py-10 md:px-10 ">
              <div className="w-full max-w-sm">
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
                  type="button"
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
                  className="flex w-full items-center justify-center gap-2 cursor-pointer rounded-md border border-gray-300 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  <span className="font-bold text-blue-600 cursor-pointer">G</span>
                  Continue with Google
                </button>

                <p className="mt-6 text-center text-xs text-gray-500">
                  Don't have an account?{" "}
                  <span className="font-semibold text-green-700 cursor-pointer">Register</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
