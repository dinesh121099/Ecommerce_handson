import CollectionItem from "../Collection-Item/CollectionItem";
import "./Collections.scss";

const CollectionPreview = (props) => {
  return (
    <div className="collection-preview">
      <h1>{props.collection.title}</h1>
      <div className="preview">
        {props.collection.items.map(
          (item, index) =>index < 4? <CollectionItem item={item}/> : null
        )}
      </div>
    </div>
  );
};

export default CollectionPreview;
