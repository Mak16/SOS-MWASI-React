/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react";
// import Btn from "./Btn";
import { Link } from "react-router-dom";
import { useState } from "react";
import img from "../assets/images/logo_sosmwasi 1.png";
function Navigation() {
  let [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const links = [
    {
      name: "A propos",
      link: "",
      className: "list-none text-black",
    },
    {
      name: "Que sont les VGB?",
      link: "",
      className: "list-none text-black",
    },
    {
      name: "Que dit la loi?",
      link: "",
      className: "list-none text-black",
    },
    {
      name: "Signaler un cas",
      link: "",
      className:
        "bg-[#0096F5] font-bold text-white flex justify-center items-center w-[225px] h-[70px] rounded-[10px] py-[20px] px-[25px] ",
    },
    {
      name: `Appel d'urgence
                0825505783`,
      link: "",
      className:
        "bg-[#f5119c] font-bold text-white flex justify-between w-[225px] h-[70px] rounded-[10px] py-[10px] px-[25px]",
    },
  ];
  return (
    <>
      <nav className="flex  justify-between items-center bg-white py-[10px] px-[36px] text-sm ">
        <Link to="/">
          <img
            className="sm:max-w-[200px] max-w-[100px] sm:pl-[5%] pl-2"
            src={img}
            alt="logo S.O.S Mwasi"
          />
        </Link>
        <ul className="hidden sm:flex gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.link} className={link.className}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 top-3 cursor-pointer md:hidden"
        >
          {isOpen ? (
            <Icon
              className="text-[#f5119c] w-10 h-10"
              icon="material-symbols:close"
            />
          ) : (
            <Icon
              className="text-[#f5119c] w-10 h-14"
              icon="material-symbols-light:menu"
            />
          )}
        </div>
        <ul
          className={` bg-white md:flex pl-5 md:pl-0  md:items-center md:pb-0 pb-12 z-[1] absolute left-0 w-full md:z-auto transition-all duration-300 ease-in flex md:flex-row flex-col justify-between 
                    ${
                      isOpen
                        ? "top-14 rounded-b-2xl items-center"
                        : "top-[-490px] rounded-b-2xl items-center"
                    }`}
        >
          {links.map((link, index) => (
            <li className={link.className} key={index}>
              <a href={link.link} onClick={closeMenu}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* <div onClick={() => setIsOpen(!isOpen)} className="">
          {isOpen ? (
            <Icon
              className="text-[#0096F5] block sm:hidden text-[2rem] sm:text-[46px]"
              icon="line-md:menu-to-close-alt-transition"
            />
          ) : (
            <Icon
              className="text-[#0096F5] block sm:hidden text-[2rem] sm:text-[46px]"
              icon="mdi-light:menu"
            />
          )}
        </div>
        <ul className="w-[64%] hidden sm:flex flex-col justify-between items-center sm:flex-row md:flex-row lg:flex-row ">
          <Link to="/about" className="list-none text-black">
            A propos
          </Link>
          <li className="list-none text-black">Que sont les VGB?</li>
          <li className="list-none text-black">Que dit la loi?</li>
          <li>
            <Btn classBtn="bg-[#0096F5] font-bold text-white flex justify-center items-center w-[225px] h-[70px] rounded-[10px] py-[20px] px-[25px] ">
              Signaler un cas
            </Btn>
          </li>
          <li>
            <Btn classBtn="bg-[#f5119c] font-bold text-white flex justify-between w-[225px] h-[70px] rounded-[10px] py-[10px] px-[25px]">
              <div>
                <span className="text-sm font-bold">Appel d'urgence</span>
                <br />
                <span className="text-sm font-bold">0825505783</span>
              </div>
              <div className="text-white">
                <Icon
                  className="text-[2rem] sm:text-[46px]"
                  icon="ant-design:phone-filled"
                  // style={{ fontSize: "1.5rem" }}
                />
              </div>
            </Btn>
          </li>
        </ul> */}
      </nav>
    </>
  );
}
export default Navigation;
