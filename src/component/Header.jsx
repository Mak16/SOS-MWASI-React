import Btn from "./Btn";
function Header() {
  return (
    <>
      <header className="bg-[url('src/assets/images/african-woman.jpg')] bg-center w-full bg-cover h-screen">
        <div className="absolute top-[25%] sm:top-[50%] left-[5%] sm:w-[40%] w-[80%] sm:m-[50px] my-24 translate-y-[-50%] ">
          <h1 className="text-white text-2xl sm:text-4xl font-bold sm:pt-0 pt-40 ">
            Plateforme d’assistance à la femme congolaise créée par des femmes
          </h1>
          <p className="text-white mb-[25px] pt-[30px] ">
            Sur cette plateforme, la femme congolaise pourra trouver les
            contacts nécessaires pour être assistée dans des cas de violence
            sexuelle, d’harcèlement sexuel, ou de conseil en cas d’avortement.
          </p>
          <Btn classBtn="bg-[#0096F5] font-bold text-white flex justify-center items-center w-[225px] h-[70px] rounded-[10px] py-[20px] px-[25px]">
            Commencer
          </Btn>
        </div>
      </header>
    </>
  );
}
export default Header;
