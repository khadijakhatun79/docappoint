import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative">

      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              DocAppoint
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Book appointments with trusted doctors easily and manage your healthcare journey in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/appointments">All Appointments</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Your Health Matters 
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Book appointments quickly and get the best healthcare support from top doctors.
            </p>

            <Link
              href="/appointments"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-[#f96363] text-white 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02]">
              Book Now 
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">

          <p>© {new Date().getFullYear()} DocAppoint. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;