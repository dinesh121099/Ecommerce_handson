import { forwardRef } from "react";

const CustomInput = forwardRef(({...otherProps}, ref) => {
  return (
    <input {...otherProps} ref={ref}/>
  )
});

export default CustomInput;