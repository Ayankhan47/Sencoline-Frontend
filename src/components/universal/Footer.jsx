import React from 'react';
import {Link} from 'react-router-dom';
import LogoSVG from '../../assets/Hero/Logo.svg'
const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white pt-12 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img className='fill-white stroke-white' src={LogoSVG} alt="" />
              </div>
              <p className="text-gray-400 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white">
                  <span className="sr-only">Facebook</span>
                  <div className="w-8 h-8 border border-gray-600 flex items-center justify-center">f</div>
                </Link>
                <Link href="#" className="text-white">
                  <span className="sr-only">Instagram</span>
                  <div className="w-8 h-8 border border-gray-600 flex items-center justify-center">i</div>
                </Link>
                <Link href="#" className="text-white">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 border border-gray-600 flex items-center justify-center">in</div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Our Offices</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">UAE OFFICE</h4>
                  <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">USA OFFICE</h4>
                  <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Link</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/vision" className="hover:text-white">
                    Vision and Mission
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="hover:text-white">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href="/showroom" className="hover:text-white">
                    Showroom
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Order Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/track" className="hover:text-white">
                    Track your order
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-white">
                    Shipping and Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="hover:text-white">
                    Warranty
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 pb-4">
            <h3 className="font-bold mb-4">CONTACT US</h3>
            <p className="text-gray-400 text-sm mb-1">Email: info@sencoline.com</p>
            <p className="text-gray-400 text-sm">Phone: +999999999</p>
          </div>

          <div className="border-t border-gray-800 pt-4 text-xs text-gray-500 flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/terms" className="hover:text-gray-400">
              Terms of Access
            </Link>
            <Link href="/terms-of-use" className="hover:text-gray-400">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-gray-400">
              Cookies Policy
            </Link>
            <Link href="/sitemap" className="hover:text-gray-400">
              Sitemap
            </Link>
            <Link href="/fraud" className="hover:text-gray-400">
              Fraud Alert
            </Link>
            <Link href="/accessibility" className="hover:text-gray-400">
              Accessibility Statement
            </Link>
          </div>

          <div className="text-center text-xs text-gray-500 mt-4">© 2023 SencoLine. All Rights Reserved</div>
        </div>
      </footer>
        </div>
    );
}

export default Footer;
