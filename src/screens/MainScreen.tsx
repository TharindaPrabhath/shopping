import Item from "../components/Item";

import "../screens/MainScreen.css";

const MainScreen = () => {
  return (
    <div className="mainscreen">
      <div className="mainscreen__content">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default MainScreen;
