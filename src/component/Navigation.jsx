/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navigation() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex  justify-between items-center bg-white py-[10px] px-[36px] text-sm ">
        <Link to="/">
          <img
            className="sm:max-w-[200px] max-w-[100px] sm:pl-[5%] pl-2"
            src="src/assets/images/logo_sosmwasi 1.png"
            alt="logo S.O.S Mwasi"
          />
        </Link>
        <div onClick={() => setIsOpen(!isOpen)} className="">
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
        </ul>
      </nav>
    </>
  );
}
export default Navigation;
