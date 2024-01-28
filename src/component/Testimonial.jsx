import { Icon } from "@iconify/react";
function Testimonial(props){
    return(
        <>
        <div className={props.classTestimonial}>
            <Icon icon={props.iconName} style={{ fontSize: '80px' }} />
            <span className="text-lg font-bold text-center mt-1"> {props.title} </span>
            <p className="text-center mt-2"> {props.children} </p>
           <a href=""> <img src="src/assets/images/image 1.png" alt="enter"/></a>
        </div>
        </>
    )
}
export default Testimonial;