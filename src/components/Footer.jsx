const Footer = () => {
  return (
    <footer className="relative mt-20 text-gray-300 px-6 md:px-16 py-20 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 bg-[url('/assets/footer_bg_1.png')] bg-cover bg-center"></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#1C2359]"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto">

        {/* TOP */}
        <div className="mb-14">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            DocAppoint
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed text-sm md:text-base">
            Book appointments with trusted doctors and healthcare specialists anytime,
            anywhere. Fast, secure, and patient-friendly healthcare management platform.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white mb-4 text-sm tracking-[0.2em] font-semibold">
              NEWSLETTER
            </h3>

            <p className="mb-5 text-sm text-slate-400 leading-relaxed">
              Get health tips, updates and appointment alerts directly to your inbox.
            </p>

            <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl hover:bg-white/15 transition">

              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-slate-400"
              />

              <span className="text-white cursor-pointer hover:text-[#F96363] transition">
                ↗
              </span>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white mb-4 text-sm tracking-[0.2em] font-semibold">
              QUICK LINKS
            </h3>

            <ul className="space-y-3 text-sm">

              {["Home", "All Appointments", "Dashboard", "My Profile"].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#F96363] cursor-pointer transition"
                >
                  {item}
                </li>
              ))}

            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white mb-4 text-sm tracking-[0.2em] font-semibold">
              SUPPORT
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-[#F96363] cursor-pointer transition">Help Center</li>
              <li className="hover:text-[#F96363] cursor-pointer transition">Terms of Service</li>
              <li className="hover:text-[#F96363] cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-[#F96363] cursor-pointer transition">Contact Support</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white mb-4 text-sm tracking-[0.2em] font-semibold">
              CONTACT US
            </h3>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>+880 1712-345678</li>
              <li>support@docappoint.com</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-slate-400">
            © 2026 DocAppoint. All rights reserved.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-6 mt-4 md:mt-0 text-white text-sm font-semibold">

            <span className="cursor-pointer hover:text-[#F96363] transition">
              X
            </span>

            <span className="cursor-pointer hover:text-[#F96363] transition">
              in
            </span>

            <span className="cursor-pointer hover:text-[#F96363] transition">
              ◎
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;