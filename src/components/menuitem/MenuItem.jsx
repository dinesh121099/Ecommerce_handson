import { Link, NavLink } from "react-router-dom";
import "./MenuItem.scss";

const MenuItem = (props) => {
  const { title, imageUrl, id } = props.product;
  return (
    <NavLink to={`/shop?collections=${id}`} className = "menu-item">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
      <div className="content">
        <div className="title">{title?.toUpperCase()}</div>
        <div className="subtitle">Shop Now</div>
      </div>
    </NavLink>
  );
};

export default MenuItem;
