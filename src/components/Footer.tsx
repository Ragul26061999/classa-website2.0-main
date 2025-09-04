import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 text-white"
      style={{ background: "linear-gradient(180deg, #007DC6 0%, #003D60 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand + Tagline */}
          <div className="md:col-span-2 flex flex-col">
            <div className="flex items-center gap-3">
              <Image
                src="/classa_logo_w&b.png"
                width={140}
                height={34}
                alt="CLASSA logo"
                priority
              />
            </div>
            <p className="mt-5 max-w-xl text-white/90">
            Modular , Scalable , intelligent</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300"><FaFacebook size={24} /></a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300"><FaInstagram size={24} /></a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300"><FaLinkedin size={24} /></a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Pages</h4>
            <ul className="mt-4 space-y-3 text-white/95">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/classa" className="hover:text-white">Unified Platform</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Legal</h4>
            <ul className="mt-4 space-y-3 text-white/95">
              <li>
                <Link href="#cookie-policy" className="hover:text-white">Cookie Policy</Link>
              </li>
              <li>
                <Link href="#privacy-policy" className="hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/70 -mb-6">
          <p>© {new Date().getFullYear()} CLASSA. Powerd by Techmatrix AI.</p>
        </div>
      </div>
    </footer>
  );
}
