import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <img src={assets.logo} className="w-32 mb-4" alt="Logo" />
            <p className="text-sm text-gray-600">
              Elevating your style with premium fashion essentials since 2024
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {['About Us', 'Careers', 'Blog', 'Sustainability'].map((item) => (
                <li key={item} className="hover:text-rose-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Contact Us', 'Shipping Policy', 'Returns', 'FAQs'].map((item) => (
                <li key={item} className="hover:text-rose-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>+1 (555) 123-4567</p>
              <p>hello@fashionstore.com</p>
              {/* <div className="flex gap-4 mt-4">
                {[assets.facebook_icon, assets.instagram_icon, assets.twitter_icon].map((icon, index) => (
                  <img 
                    key={index}
                    src={icon} 
                    className="w-6 h-6 cursor-pointer hover:opacity-75" 
                    alt="Social Media" 
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2024 FashionStore. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer