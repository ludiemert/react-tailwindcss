import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

export default function Footer() {
  return (
    <div className=" w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
      <div className=" max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div>
          <h6>Solutions</h6>
          <ul>
            <li>Travel</li>
            <li>Booking</li>
            <li>Flights</li>
            <li>Cruises</li>
            <li>Ground</li>
          </ul>
        </div>
        <div>
          <h6>Support</h6>
          <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Tours</li>
            <li>Refunds</li>
          </ul>
        </div>
        <div>
          <h6>Company</h6>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h6>Legal</h6>
          <ul>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Policies</li>
            <li>Conditions</li>
          </ul>
        </div>
        <div>
          <p>Subscribe to our newsletters</p>
          <p>The Latest deals, articles and resources sent to your inbox weekl😉</p>
          <form>
            <input type="email" placeholder="Enter email...." />
            <button className=" p-2 mb-4 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>

      <div>
        <p>
          2024 Experiences, LLC. All rights reserve!! 😎
        </p>
        <div>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest />
        </div>
      </div>
    </div>
  );
}
