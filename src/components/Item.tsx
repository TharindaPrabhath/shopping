import "../components/Item.css";

const Item = () => {
  return (
    <div className="item">
      <div className="item__content">
        <img
          src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
          alt={"Item Image"}
        />
        <div className="info">
          <h3>Nice Backpack</h3>
          <p>$ 110</p>
        </div>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Item;
