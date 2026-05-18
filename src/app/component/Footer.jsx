import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Glow */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr 
        from-orange-500/10 via-transparent to-pink-500/10 
        blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              SunCart ☀️
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Your one-stop shop for summer essentials. Discover trendy outfits,
              sunglasses, skincare, and beach accessories for a perfect sunny vibe.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Products
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/products?category=Accessories">Accessories</Link></li>
              <li><Link href="/products?category=Clothing">Clothing</Link></li>
              <li><Link href="/products?category=Skincare">Skincare</Link></li>
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
              Get Ready for Summer 🌞
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Shop the latest summer trends and stay cool in style.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-orange-500 text-white 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} SunCart. All rights reserved.</p>

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