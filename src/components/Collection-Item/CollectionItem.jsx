import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./CollectionItem.scss";
import { addItem } from "../../features/cart/cart-slice";
import { useDispatch } from "react-redux";

const CollectionItem = (props) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        width: 270,
        margin: "10px",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={props.item.imageUrl}
          alt={props.item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.item.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {props.item.price}.$
          </Typography>
          <Button
            variant="outlined"
            sx={{
              margin: "10px 0 20px 0px",
              float: "right",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
            onClick={() => dispatch(addItem(props.item))}
          >
            Add to cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
    // <div className="collection-item">
    //     <div className="image" style={{ backgroundImage : `url(${props.item.imageUrl})` }}>
    //     </div>
    //         <div className="collection-footer">
    //             <span className="name">{props.item.name}</span>
    //             <span className="price">{props.item.price}.$</span>
    //             <CustomButton>Add to cart</CustomButton>
    //         </div>
    // </div>
  );
};

export default CollectionItem;
