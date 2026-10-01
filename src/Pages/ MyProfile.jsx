import { Camera } from "lucide-react";

const MyProfile = () => {
  return (
    <div className="min-h-screen bg-[#f8faf9]">
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

      <main className="mx-auto max-w-3xl px-5 py-8 sm:py-10">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="mt-2 text-gray-500">Manage your profile information.</p>

          <div className="relative mx-auto mt-8 h-32 w-32 sm:h-36 sm:w-36">
            <img
              src="https://i.pravatar.cc/300?img=47"
              alt="Sarah Khan"
              className="h-full w-full rounded-full border border-gray-200 bg-gray-200 object-cover"
            />

            <button
              type="button"
              className="absolute bottom-0 right-0 rounded-full border border-gray-200 bg-white p-2.5 text-gray-700 shadow-sm"
            >
              <Camera size={18} />
            </button>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-900">Sarah Khan</h2>
          <p className="mt-1 text-sm text-gray-500">sarah@gmail.com</p>

          <button
            type="button"
            className="mt-5 rounded-lg border-2 border-green-700/30 px-8 py-2.5 font-medium text-green-800 transition-colors hover:bg-green-50"
          >
            Update Profile
          </button>
        </section>

        <section className="mt-8 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Edit Profile
          </h2>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Name
              </label>
              <input
                type="text"
                placeholder="Sarah Khan"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-green-700"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Photo URL
              </label>
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-green-700"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-[#176b45] py-3 font-semibold text-white transition-colors hover:bg-[#125638]"
            >
              Save Changes
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyProfile;
