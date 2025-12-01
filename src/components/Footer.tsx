import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Brand section */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block">
                <Image
                  src="/classa_logo_w&b.png"
                  width={140}
                  height={40}
                  alt="CLASSA logo"
                  priority
                  className="h-10 w-auto"
                />
              </Link>
              <p className="mt-6 text-base text-slate-400 max-w-md leading-relaxed">
                Modular, Scalable, Intelligent — Transforming education with next-generation technology solutions.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-4 mt-8">
                {[
                  { icon: FaFacebook, href: "https://www.facebook.com/share/1TNhYA2RbR/", label: "Facebook" },
                  { icon: FaInstagram, href: "https://www.instagram.com/classa_edtech/", label: "Instagram" },
                  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                  { icon: FaTwitter, href: "#", label: "Twitter" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links sections */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {/* Pages */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4">Pages</h4>
                  <ul className="space-y-3">
                    {[
                      { label: "Home", href: "/" },
                      { label: "About Us", href: "/about" },
                      { label: "Our School Suite", href: "/classa" },
                    ].map((link, i) => (
                      <li key={i}>
                        <Link 
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
                  <ul className="space-y-3">
                    {[
                      { label: "Privacy Policy", href: "#privacy-policy" },
                      { label: "Cookie Policy", href: "#cookie-policy" },
                      { label: "Terms of Service", href: "#terms" },
                    ].map((link, i) => (
                      <li key={i}>
                        <Link 
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li>
                      <a href="tel:+918489918000" className="hover:text-white transition-colors">
                        +91 84899 18000
                      </a>
                    </li>
                    <li>Coimbatore, Tamil Nadu</li>
                    <li>India</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} CLASSA. Powered by Techmatrix AI.
            </p>
            <p className="text-sm text-slate-500">
              Made with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
