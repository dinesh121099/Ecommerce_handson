import { forwardRef } from "react";
import './CustomInput.scss';

const CustomInput = forwardRef(({...otherProps}, ref) => {
  return (
    <input {...otherProps} ref={ref}/>
  )
});

export default CustomInput;