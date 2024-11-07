import './CustomButton.scss';

const CustomButton = ({children,...otherProps}) => {
  return (
    <button {...otherProps}>{children}</button>
  )
}

export default CustomButton;