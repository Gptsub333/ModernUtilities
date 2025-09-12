import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider"; // Import the theme hook

const PhonePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useTheme(); // Access the current theme

  // Auto-open popup after a short delay
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Delay before popup shows up
  }, []);

  // Conditional classes based on the current theme
  const popupBackgroundClass = theme === "dark" ? "bg-gray-900" : "bg-white";
  const borderClass = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const headerBackgroundClass = theme === "dark" ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-blue-500 to-blue-600";
  const textColorClass = theme === "dark" ? "text-white" : "text-black"; // Adjusted for light theme

  return (
    <section id="phone-popup">
      <div className="fixed bottom-4 right-4 sm:right-10 md:right-10 flex flex-col items-end z-50">
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow-lg focus:outline-none hover:scale-105 transition-transform"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 120 }}
            className={`flex flex-col w-72 sm:w-80 max-w-full h-32 sm:h-40 ${popupBackgroundClass} ${borderClass} rounded-lg shadow-lg overflow-hidden`}
          >
            <div className={`flex items-center justify-between ${headerBackgroundClass} ${textColorClass} px-3 sm:px-4 py-2`}>
              <h2 className="font-bold text-sm sm:text-lg">Contact Us</h2>
              <button onClick={() => setIsOpen(false)} className={`${textColorClass} focus:outline-none hover:scale-110 transition-transform`}>
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center space-y-2 p-3 sm:p-4">
              <p className={`text-center text-sm sm:text-lg ${textColorClass}`}>
                For the fastest response, text{" "} <br/>
                <a href="sms:+17023008488" className="text-green-400 hover:text-green-600">
                  702-300-8488
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PhonePopup;
