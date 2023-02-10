import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 rounded-lg shadow flex items-center justify-center md:p-6 z-30">
      Coded by{" "}
      <a
        className="px-2 gap-1 text-gradient flex items-center"
        href="https://github.com/ZevaGuillo" target="_blank">
        <FaGithub className="fill-pink-500"/>
        ZevaGuillo
      </a>
    </footer>
  );
};

export default Footer;
