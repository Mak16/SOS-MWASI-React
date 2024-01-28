import { Icon } from "@iconify/react";
import Btn from "./Btn";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <nav className="flex justify-between items-center bg-white py-[10px] px-[36px] text-sm">
        <Link to="/" ><img
          className="max-w-[200px] pl-[5%]"
          src="src/assets/images/logo_sosmwasi 1.png"
          alt="logo S.O.S Mwasi"
        /></Link>
        <ul className="w-[64%] flex justify-between items-center">
          <Link to="/about" className="list-none text-black">A propos</Link>
          <li className="list-none text-black">Que sont les VGB?</li>
          <li className="list-none text-black">Que dit la loi?</li>
          <li>
            <Btn classBtn="bg-[#0096F5] font-bold text-white flex justify-center items-center w-[225px] h-[70px] rounded-[10px] py-[20px] px-[25px]">
              Signaler un cas
            </Btn>
          </li>
          <li>
            <Btn classBtn="bg-[#f5119c] font-bold text-white flex justify-between w-[225px] h-[70px] rounded-[10px] py-[10px] px-[25px]">
              <div>
                <span className="font-bold">Appel d'urgence</span>
                <br />
                <span className="text-xl font-bold">0825505783</span>
              </div>
              <div className="text-white">
                <Icon
                  icon="ant-design:phone-filled"
                  style={{ fontSize: "46px" }}
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
