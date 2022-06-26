import "./_wrapper.sass";

import Item from "../Item/Item";

import data from "../../data.json";

function Wrapper() {
  return(
    <div className="wrapper">
      {
        data.map(function(food) {
          return(
            <Item 
              key={food.id} 
              promo={food.promo} 
              name={food.name}
              taste={food.taste}
              text={food.text}
              value={food.value}
              isAvailable={food.isAvailable}
              description={food.description}
            />
          )
        })
      }
    </div>
  );
}

export default Wrapper;
