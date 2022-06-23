import "./_container.sass";
import Wrapper from "../Wrapper/Wrapper";
import Item from "../Item/Item";

function Container() {
  return(
    <div className="container">
      <h1 className="container__title">Ты сегодня покормил кота?</h1>
      <Wrapper />
    </div>
  );
}

export default Container;