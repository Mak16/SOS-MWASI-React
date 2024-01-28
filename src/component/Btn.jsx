function Btn(props){
    return(
        <>
        <button className={props.classBtn}>
              {props.children}
            </button>
        </>
    )
}
export default Btn;