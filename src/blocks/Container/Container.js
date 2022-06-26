import "./_container.sass";

import Wrapper from "../Wrapper/Wrapper";


function Container() {
  return(
    <div className="container">
      <h1 className="container__title">Ты сегодня покормил кота?</h1>
      <Wrapper />
    </div>
  );
}

export default Container;