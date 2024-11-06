
const CustomInput = ({children, ...otherProps}) => {
  return (
    <input {...otherProps}>{children}</input>
  )
}

export default CustomInput;