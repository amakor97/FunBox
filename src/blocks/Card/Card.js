import "./_card.sass";

function Card(props) {
  //console.log(props);
  return(
    <div className="card">
      <div className="card__inner">
        <p className="card__promo">{props.promo}</p>
        <h2 className="card__title">
          {props.name}
        </h2>
        <h3 className="card__taste">
            {props.taste}
        </h3>
        <div className="card__value-container">
          <div className="card__value-digits">
            {props.value}
          </div>
          кг
        </div>
      </div>
    </div>
  );
}

export default Card;