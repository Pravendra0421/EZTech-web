

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {  MailIcon } from "lucide-react";
import logo from '../assets/ez-logo.jpg'

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-white text-gray-700 dark:bg-gray-900">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          {/* Company Section */}
          <div className="w-full sm:w-1/4 mb-6 flex flex-col text-center items-start">
          <div className="flex gap-3 ">
            <div className="w-10 h-10">
              <img src={logo}/>
            </div>
            <div className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-3">{t("footer.title")}</div>
          </div>
            <p className="text-sm text-gray-500 dark:text-gray-200">{t("footer.subtitle")}</p>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-1/4 text-center mb-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 inline-block border-b-2 border-gray-800">{t("footer.company_title")}</h3>
            <ul className="space-y-2 dark:text-gray-200">
              {["About Us",  "Contact Us"].map((_, index) => (
                <li key={index}>
                  <button className="hover:text-blue-500">
                    {t(`footer.company.${index}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          {/* <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3 inline-block border-b-2 border-gray-800">{t("footer.service_title")}</h3>
            <ul className="space-y-2">
              {[
                "Digital Transformation",
                "Cloud Migration",
                "Machine Learning AI Solutions",
                "Data Analytics",
                "Dashboarding",
                "Consulting",
              ].map((_, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-500">
                    {t(`footer.services.${index}`, )}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Connect With Us */}
          <div className="w-full sm:w-1/4 mb-6 text-center">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">{t("footer.contact")}</h3>
            <div className="flex space-x-4 justify-center">
              {/* Github Icon */}
              <div className="flex items-center justify-center border dark:text-gray-200 border-gray-800 rounded-full p-2 hover:bg-gray-800 hover:text-white transition">
                <MailIcon/>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 dark:bg-gray-800 text-center py-4">
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-200">
            &copy; {t(`footer.copyright`)} 
          </p>
        </div>
      </div>
    </footer>
  );
};
