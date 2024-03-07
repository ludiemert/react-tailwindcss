import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

export default function Footer() {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
}
