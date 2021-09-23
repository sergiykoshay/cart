import { Wrapper } from "./styles.styled"

const Backdrop = ({show, click}) => {
    return show && (
        <Wrapper onClick={click}>
            
        </Wrapper> 
    )
}

export default Backdrop;