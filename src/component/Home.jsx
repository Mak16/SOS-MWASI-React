import Testimonial from './Testimonial';
import Header from './Header';
function Home() {
  return (
    <>
      <Header />
      <section className="bg-[#0096F5] text-white flex py-[50px] px-[5%] justify-between ">
        <Testimonial
          iconName="fa-regular:sad-cry"
          title="Je suis Victime"
          classTestimonial="w-[30%] flex flex-col items-center border-r-[2px] pr-3 sm:pr-10"
        >
          Si vous êtes ou avez été victime de violence sexuelle, voici quelques
          points de repère pour vous aider à y voir plus clair et vous orienter.
        </Testimonial>
        <Testimonial
          iconName="fa6-solid:ear-listen"
          title="Une victime s’est confiée à moi"
          classTestimonial="w-[30%] flex flex-col items-center border-r-[2px] pr-3 sm:pr-10"
        >
          Voici quelques points de repère pour vous aider à y voir plus clair et
          vous orienter.
        </Testimonial>
        <Testimonial
          iconName="fa-solid:eye"
          title="Je suis Témoin"
          classTestimonial="w-[30%] flex flex-col items-center "
        >
          Si vous êtes ou avez été témoin de violence sexuelle, voici quelques
          points de repère pour vous aider à y voir plus clair et vous orienter.
        </Testimonial>
      </section>
      <section className="bg-[#91D2FB] text-[#095789] ">
        <div className="pt-[2rem] pb-[2rem] ">
          <div className="pt-0 flex pl-[3%] pr-[3%] flex-row items-center justify-between ">
            <img
              src="src/assets/images/Vector.png"
              className="w-[17px] h-[29px]"
              alt="vector"
            />
            <p className="w-[80%] flex justify-center text-center">
              "La violence à l'égard des femmes et des filles constitue une
              grave violation des droits de l'homme. Son impact va des
              conséquences physiques, sexuelles et mentales multiples,
              immédiates ou à long terme, pour les femmes et les filles, y
              compris la mort. Elle affecte négativement le bien-être général
              des femmes et les empêche de participer pleinement à la société.
              La violence a des conséquences négatives non seulement pour les
              femmes, mais aussi pour leur famille, la communauté et le pays
              dans son ensemble. Elle a un coût énorme, qu'il s'agisse de
              l'augmentation des dépenses de santé et des frais juridiques ou
              des pertes de productivité, ce qui a un impact sur les budgets
              nationaux et le développement global. "
            </p>
            <img
              src="src/assets/images/Vector (1).png"
              className="w-[17px] h-[29px] "
              alt="vecctor"
            />
          </div>
          <div className="flex pt-[1rem] sm:justify-start justify-center">
            <p className="sm:pl-[13%] font-bold">
              ONUFEMMES - <br /> unwomen.org
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
