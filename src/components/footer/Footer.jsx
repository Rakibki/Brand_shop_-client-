import React, { useContext } from "react";
import logo from "../../assets/images/logo-light.png";
import { CiLocationOn } from "react-icons/ci";
import { AiFillPhone,  AiFillTwitterCircle, AiOutlineWhatsApp, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import {MdOutlineFacebook} from "react-icons/md";
import { authContext } from "../../providers/AuthProvider";

const Footer = () => {

  return (
    <footer className="footer p-10 bg-[#222222] text-white">
      <nav>
        <img src={logo} alt="" />
        <p className="my-2 text-[#86878b]">
          Nullam tristique tortor nibh, in viverra <br />
          libero sollicitudin ac. Suspendisse quis <br />
          lacinia ipsum. Etiam scelerisque sit amet <br /> lectus quis lacinia.
          Sed.
        </p>
        <a className="link link-hover flex items-center gap-1">
          <CiLocationOn className="text-[#e03737] text-[22px]" />
          <p>218 Fifth Avenue, HeavenTower NewYork City</p>
        </a>
        <a className="link flex items-center gap-1 link-hover">
          <AiFillPhone className="text-[#e03737] text-[22px]" />
          <p>(+68) 123 456 7890</p>
        </a>
        <a className="link flex items-center gap-1 link-hover">
          <AiOutlineMail className="text-[#e03737] text-[22px]" />
          <p>Hot-Support@Dagon.com</p>
        </a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <aside>
        <header className="footer-title">Newsletter</header>
        <p className="text-sm text-[#86878b]">
          Get notified of new products, limited releases, and more.
        </p>
        <div className="mt-4">
          <input className="py-3 rounded-l-md outline-none px-5" type="text" placeholder="Enter Your Email" />
          <button className="py-3 px-5 rounded-r-md font-medium hover:opacity-70 bg-[#e03737] text-white">
            Login
          </button>
          <div className="flex gap-3 mt-4 text-4xl">
            <MdOutlineFacebook className="" />
            <AiFillTwitterCircle />
            <AiOutlineWhatsApp />
            <AiFillGithub />
          </div>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
