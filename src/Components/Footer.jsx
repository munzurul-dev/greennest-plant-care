import { Leaf } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-footer px-5 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Leaf size={24} />
              <h2 className="text-xl font-bold">GreenNest</h2>
            </div>

            <p className="mt-2 text-sm text-white/70">
              Grow better. Live greener.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold">Quick Links</h3>

            <div className="flex flex-col gap-1 text-sm text-white/70">
              <a href="#" className="transition hover:text-white">
                About
              </a>

              <a href="#" className="transition hover:text-white">
                Contact
              </a>

              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="">
            <h2 className="text-white font-bold mb-5">Fllow Us</h2>
            <div className="flex gap-4">
              <FaInstagram
                size={18}
                className="cursor-pointer transition hover:text-secondary"
              />

              <FaFacebookF
                size={18}
                className="cursor-pointer transition hover:text-secondary"
              />

              <FaLinkedinIn
                size={18}
                className="cursor-pointer transition hover:text-secondary"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-4 text-xs text-white/60 md:flex-row">
          <p>© 2025 GreenNest. All rights reserved.</p>

          <p>Made with 🌿 for plant lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
