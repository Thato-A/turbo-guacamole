import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMapPin,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b17] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-semibold">
              <span>🥑</span>
              <span>Turbo Guacamole</span>
            </div>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Discover the best restaurants in your city with real-time
              directions, trusted ratings, and curated cuisine searches.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">
                Browse Cuisines
              </li>
              <li className="hover:text-white cursor-pointer">
                Top Rated Restaurants
              </li>
              <li className="hover:text-white cursor-pointer">Nearby Dining</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <FiMapPin />
                United States
              </li>
              <li className="flex items-center gap-2">
                <FiMail />
                hello@turboguacamole.app
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60 gap-4">
          <p>
            © {new Date().getFullYear()} Turbo Guacamole. All rights reserved.
          </p>
          <p>Built with React, Tailwind & Yelp API</p>
        </div>
      </div>
    </footer>
  );
}
