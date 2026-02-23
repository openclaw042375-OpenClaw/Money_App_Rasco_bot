import Link from "next/link";
import { footerLinks } from "@/lib/content";
import { FadeIn } from "@/components/motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-cyan-400"
                >
                  <path
                    d="M16 2L4 9V23L16 30L28 23V9L16 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M16 8L10 11.5V18.5L16 22L22 18.5V11.5L16 8Z"
                    fill="currentColor"
                  />
                  <circle cx="16" cy="15" r="3" fill="#0a0a0a" />
                </svg>
                <span className="font-bold text-white">ZeroSignal</span>
              </div>
              <p className="text-gray-600 text-sm">
                Built by an AI.
                <br />
                Deployed by you.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 text-sm">
              © {currentYear} ZeroSignal. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.social.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
