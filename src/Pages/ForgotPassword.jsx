import { ArrowLeft, Mail, LockKeyhole } from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use, useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const { forgetPassword } = use(AuthContext);

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    try {
      setLoading(true);

      await forgetPassword(email);

      toast.success("Password reset email sent!");
    } catch (error) {
      console.log(error.code, error.message);
      toast.error(error.message || "Failed to send reset email!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-base-100 shadow-xl p-6 sm:p-8">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
            <LockKeyhole size={32} />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">Forgot Password?</h1>
          <p className="text-base-content/60 text-sm leading-relaxed">
            No worries! Enter your email address below and we'll help you reset
            your password.
          </p>
        </div>

        <form onSubmit={handleForgetPassword} className="space-y-5">
          <div>
            <label className="label font-semibold mb-1">Email Address</label>
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="input input-bordered w-full pl-12 outline-0"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full text-base"
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>

        <div className="mt-7 text-center">
          <Link
            to="/auth/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
