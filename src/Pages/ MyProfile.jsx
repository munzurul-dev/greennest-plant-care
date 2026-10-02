import { ArrowUpRight, Camera, Leaf, User2Icon, Trash2, X } from "lucide-react";

import Navbar from "../Components/Navbar";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import Loading from "../Components/PlantsLayout/Loading";
import { toast } from "react-toastify";

const MyProfile = () => {
  const navigate = useNavigate();

  const {
    user,
    loading,
    bookings,
    setBookings,
    unsubscribe,
    updateUserProfile,
  } = use(AuthContext);

  const [plants, setPlants] = useState([]);
  const [plantsLoading, setPlantsLoading] = useState(true);

  
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [updating, setUpdating] = useState(false);

  const handleOpenPopup = () => {
    setName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
    setIsOpen(true);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      //alert("Name is required!");
      toast.error("Name is required!");
      return;
    }

    try {
      setUpdating(true);

      await updateUserProfile(name.trim(), photoURL.trim());

      setIsOpen(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      //alert(error.message || "Profile update failed!");
      toast.error(error.message || "Profile update failed!");
    } finally {
      setUpdating(false);
    }
  };

  const handleRemove = (plantId) => {
    setBookings((prev) => prev.filter((id) => id !== plantId));
    toast.success("Booking removed successfully!");
  };

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load plants");
        return res.json();
      })
      .then((data) => setPlants(data))
      .catch((error) => console.error(error))
      .finally(() => setPlantsLoading(false));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const bookedPlants = bookings
    .map((id) => plants.find((plant) => plant.plantId === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#f8faf9]">
      <header className="border-b border-gray-200 bg-white">
        <Navbar />
      </header>

      <main className="mx-auto max-w-3xl px-5 py-8 sm:py-10">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="mt-2 text-gray-500">Manage your profile information.</p>

          <div className="relative mx-auto mt-8 h-32 w-32 sm:h-36 sm:w-36">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                className="h-full w-full rounded-full border border-gray-200 bg-gray-200 object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full border border-gray-200 bg-gray-100">
                <User2Icon size={48} className="text-gray-500" />
              </div>
            )}

            <button
              type="button"
              onClick={handleOpenPopup}
              aria-label="Update profile photo"
              className="absolute bottom-0 right-0 cursor-pointer rounded-full border border-gray-200 bg-white p-2.5 text-gray-700 shadow-sm transition hover:bg-gray-100"
            >
              <Camera size={18} />
            </button>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            {user?.displayName || "User"}
          </h2>
          <p className="mt-1 text-sm text-gray-500">{user?.email}</p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={handleOpenPopup}
              className="cursor-pointer rounded-lg border-2 border-green-700/30 px-8 py-2.5 font-medium text-green-800 transition-colors hover:bg-green-50"
            >
              Update Profile
            </button>

            <button
              type="button"
              onClick={() => unsubscribe()}
              className="cursor-pointer rounded-lg bg-red-600 px-8 py-2.5 font-medium text-white transition-colors hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </section>

        
        <section className="mt-8 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Booking History
          </h2>

          {plantsLoading ? (
            <p className="py-6 text-center text-gray-500">
              <Loading></Loading>
            </p>
          ) : bookedPlants.length === 0 ? (
            <div className="py-10 text-center">
              <Leaf size={40} className="mx-auto mb-3 text-green-600" />
              <p className="font-semibold text-gray-700">No bookings yet</p>
              <p className="mt-1 text-sm text-gray-500">
                Your booked plants will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {bookedPlants.map((plant, index) => (
                <div
                  key={`${plant.plantId}-${index}`}
                  className="group flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 transition-all hover:border-green-500"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-100">
                    <Leaf className="text-green-700" size={26} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="truncate font-bold">{plant.plantName}</h2>
                    <p className="text-sm text-base-content/60">
                      {plant.category} · ৳{plant.price}
                    </p>
                    <p className="mt-1 text-xs text-base-content/50">
                      Plant ID: #{plant.plantId}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      type="button"
                      onClick={() => handleRemove(plant.plantId)}
                      className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 size={15} />
                      Remove
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/plants/plantDetails/${plant.plantId}`)
                      }
                      className="flex cursor-pointer items-center gap-1 text-sm font-medium text-green-700 transition hover:text-green-900"
                    >
                      Details <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Update Profile Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => {
            if (!updating) setIsOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="update-profile-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2
                id="update-profile-title"
                className="text-xl font-bold text-gray-800"
              >
                Update Profile
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                disabled={updating}
                aria-label="Close popup"
                className="cursor-pointer text-gray-500 transition hover:text-red-600 disabled:cursor-not-allowed"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  placeholder="Enter your photo URL"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  disabled={updating}
                  className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={updating}
                  className="cursor-pointer rounded-lg bg-green-700 px-5 py-2.5 font-medium text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {updating ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
