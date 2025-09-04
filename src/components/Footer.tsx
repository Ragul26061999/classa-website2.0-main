import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 text-white w-full"
      style={{ background: "linear-gradient(180deg, #007DC6 0%, #003D60 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand + Tagline */}
          <div className="sm:col-span-2 flex flex-col">
            <div className="flex items-center justify-center sm:justify-start">
              <Image
                src="/classa_logo_w&b.png"
                width={140}
                height={34}
                alt="CLASSA logo"
                className="w-32 sm:w-36 md:w-40"
                priority
              />
            </div>
            <p className="mt-4 sm:mt-5 text-center sm:text-left text-base sm:text-lg text-white/90 max-w-xl">
              Modular, Scalable, Intelligent
            </p>
            <div className="flex justify-center sm:justify-start space-x-5 sm:space-x-4 mt-5 sm:mt-6">
              <a 
                href="https://www.facebook.com/share/1TNhYA2RbR/" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.instagram.com/classa_edtech/" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Pages</h4>
            <ul className="mt-4 space-y-3 sm:space-y-2.5">
              <li>
                <Link href="/" className="text-white/95 hover:text-white transition-colors duration-200 block py-1.5 sm:py-1 text-base sm:text-[15px]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/95 hover:text-white transition-colors duration-200 block py-1.5 sm:py-1 text-base sm:text-[15px]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/classa" className="text-white/95 hover:text-white transition-colors duration-200 block py-1.5 sm:py-1 text-base sm:text-[15px]">
                  Unified Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Legal</h4>
            <ul className="mt-4 space-y-3 sm:space-y-2.5">
              <li>
                <Link href="#cookie-policy" className="text-white/95 hover:text-white transition-colors duration-200 block py-1.5 sm:py-1 text-base sm:text-[15px]">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#privacy-policy" className="text-white/95 hover:text-white transition-colors duration-200 block py-1.5 sm:py-1 text-base sm:text-[15px]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 border-t border-white/10 pt-6 text-center sm:text-left">
          <p className="text-sm sm:text-[15px] text-white/80">
            © {new Date().getFullYear()} CLASSA. Powered by Techmatrix AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
