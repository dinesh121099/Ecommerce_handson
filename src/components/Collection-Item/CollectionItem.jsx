import CustomButton from '../CustomButton/CustomButton';
import './CollectionItem.scss';

const CollectionItem = (props) => {
  return (
    <div className="collection-item">
        <div className="image" style={{ backgroundImage : `url(${props.item.imageUrl})` }}>
        </div>
            <div className="collection-footer">
                <span className="name">{props.item.name}</span>
                <span className="price">{props.item.price}.$</span>
                <CustomButton>Add to cart</CustomButton>
            </div>
    </div>
  )
}

export default CollectionItem