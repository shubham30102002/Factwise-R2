import FocusableInput from "./components/FocusableInput";
import React, {useRef, useEffect} from 'react'

const Input = React.forwardRef((props,ref =>{ 
    return <input {...props} ref={ref}/>

}))

const FocusableInput = React.forwardRef((props, ref) =>{
    useEffect(() =>{
        const inputRef = ref.current;
        if(props.focused && inputRef){
            inputRef.focus();
        } 
    },[props.focused()])

    return <input ref={ref} />
})

const App = (props) => <FocusableInput focused={props.focused} />;

export default App