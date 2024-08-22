import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Footer = () => {
  const contactInfo = [
    {
      icon: <FaPhoneAlt className="mr-2 inline-block" />,
      text: "+628123111179",
    },
    {
      icon: <HiOutlineMail className="mr-2 inline-block" />,
      text: "demo@gmail.com",
    },
    { icon: <FaMapMarkerAlt className="mr-2 inline-block" />, text: "XXX XXX" },
  ];

  const quickLinks = [
    "Contact Us",
    "Payment Shipping",
    "FAQs",
    "Tracking Orders",
  ];

  return (
    <>
      <footer className="border-t-2 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between px-4 py-12 sm:flex-row sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col space-y-8 sm:mb-0">
            <h2 className="text-3xl font-bold">AI AI</h2>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Reach us</h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    {item.icon}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-8 flex flex-col space-y-8 sm:mb-0">
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/?locale=id_ID">
                <FaFacebookF key="facebook" className="h-6 w-6" />
              </Link>
              <Link to="https://www.instagram.com/">
                <FaInstagram key="instagram" className="h-6 w-6" />
              </Link>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-end h-40 w-40">
            <img src="/images/hero-image.png" className="" alt="Hero Section" />
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 py-4 text-center text-sm">
          © 2024 AIAI . All rights reserved
        </div>
      </footer>
    </>
  );
};
