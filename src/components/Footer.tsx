import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6 text-center text-sm text-gray-600">
      <p>
        Adapted from Petpooja's Figma Design & Developed by{" "}
        <a 
          href="https://divyagonja.netlify.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 font-medium"
        >
          Divya Gonja
        </a>
      </p>
    </footer>
  );
};

export default Footer;