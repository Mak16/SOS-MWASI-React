import { Icon } from "@iconify/react";
import img from "../assets/images/image 1.png";
function Testimonial({ classTestimonial, title, children, iconName }) {
  return (
    <>
      <div className={classTestimonial}>
        <Icon icon={iconName} className="text-4xl sm:text-[80px]" />
        <span className="sm:text-lg text-[12px] font-bold text-center mt-1">
          {title}
        </span>
        <p className="text-center text-[10px] sm:text-sm mt-2"> {children} </p>
        <a href="">
          <img className="w-[80px] sm:w-full pt-3" src={img} alt="enter" />
        </a>
      </div>
    </>
  );
}
export default Testimonial;
