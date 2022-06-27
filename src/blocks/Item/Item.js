import { useState } from "react";

import "./_item.sass";

function Item(props) {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setisHovered] = useState(false);
  const [allowToHover, setAllowToHover] = useState(true);


  function switchIsSelected(e) {
    const card = e.target.parentNode.parentNode.querySelector(".item__card");
    const valueCont = card.querySelector(".item__card-value-container");

    if (!isSelected) {
      card.classList.add("item__card--selected");
      valueCont.classList.add("item__card-value-container--selected");
      card.classList.remove("item__card--hovered");
      valueCont.classList.remove("item__card-value-container--hovered");
    } else { 
      card.classList.remove("item__card--selected");
      card.classList.remove("item__card--selected-hovered");
      valueCont.classList.remove("item__card-value-container--selected");
      valueCont.classList.remove("item__card-value-container--selected-hovered");
    }

    setIsSelected(!isSelected);
    setAllowToHover(false);
    setisHovered(false);
  }


  function hoverInHandle(e) {
    const card = e.target.parentNode.parentNode.querySelector(".item__card");
    const valueCont = card.querySelector(".item__card-value-container");

    if (!isSelected && allowToHover) {
      card.classList.add("item__card--hovered");
      valueCont.classList.add("item__card-value-container--hovered");
    } else if (allowToHover) {
      card.classList.add("item__card--selected-hovered");
      valueCont.classList.add("item__card-value-container--selected-hovered");
    }

    if (!isSelected && allowToHover) {
      let btnText = 
        e.target.parentNode.parentNode.querySelector(".item__btn-text");
      let btnDot = 
        e.target.parentNode.parentNode.querySelector(".item__btn-dot");
      btnText.classList.add("item__btn-text--hovered");
      btnDot.classList.add("item__btn-dot--hovered");
    }

    if (allowToHover) {
      setisHovered(true);
    }
  }

  function hoverOutHandle(e) {
    let card = e.target.parentNode.parentNode.querySelector(".item__card");
    let valueCont = card.querySelector(".item__card-value-container");
    
    if (!isSelected) {
      card.classList.remove("item__card--hovered");
      valueCont.classList.remove("item__card-value-container--hovered");
    } else {
      card.classList.remove("item__card--selected-hovered");
      valueCont.classList.remove("item__card-value-container--selected-hovered");
    }

    if (!isSelected) {
      let btnText = 
        e.target.parentNode.parentNode.querySelector(".item__btn-text");
      let btnDot = 
        e.target.parentNode.parentNode.querySelector(".item__btn-dot");
      btnText.classList.remove("item__btn-text--hovered");
      btnDot.classList.remove("item__btn-dot--hovered");
    }

    setisHovered(false);
    setAllowToHover(true);
  }
 

  return(
    <div className="item">
      <div className="item__card-wrapper">
        <div className={"item__card " + 
          (props.isAvailable ? "" : "item__card--no-available")} 
          onMouseEnter={hoverInHandle} 
          onMouseLeave={hoverOutHandle} 
          onClick={switchIsSelected}>

          <div className={"item__card-inner " + 
            (props.isAvailable ? "" : "item__card-inner--no-available")}>
            {(isSelected && isHovered) &&
              <p className="item__card-promo">Котэ не одобряет?</p>
            }

            {(!isSelected || !isHovered) &&
              <p className={"item__card-promo " + 
                (props.isAvailable ? "" : "item__card-promo--no-available")}>
                {props.promo}
              </p>
            }
            
            <h2 className={"item__card-title " + 
              (props.isAvailable ? "" : "item__card-title--no-available")}>
              {props.name}
            </h2>
            <h3 className={"item__card-taste " + 
              (props.isAvailable ? "" : "item__card-taste--no-available")}>
              {props.taste}
            </h3>
            
            {
              props.text.map(function(line, index) {
                let num = parseInt(line);
                if (!Number.isNaN(num)) {
                  line = line.slice(num.toString().length);
                }
                return(
                  <p className={"item__card-text " + 
                    (props.isAvailable ? "" : "item__card-text--no-available")} 
                    key={index}>
                      
                    {(!Number.isNaN(num)) &&
                      <span className="item__card-text-number">{num}</span>
                    }
                    {line}
                  </p>
                )
              })
            }

            <div className={"item__card-value-container " + 
              (props.isAvailable ? "" : "item__card-value-container--no-available")}
              >
              <div className="item__card-value-digits">
                {props.value}
              </div>
              кг
            </div>
          </div>
        </div>
      </div>

      {!props.isAvailable && 
      <p className={"item__underline " + 
        (props.isAvailable ? "" : "item__underline--no-available")}
      >
        Печалька, {props.taste} закончился
      </p>
      }

      {(!isSelected && props.isAvailable) && 
        <div className="item__underline">
          <span className="item__underline-text">
            Чего сидишь? Порадуй котэ,&nbsp;
            </span>
          <button className="item__btn" 
            onMouseOver={hoverInHandle} 
            onMouseLeave={hoverOutHandle} 
            onClick={switchIsSelected}
          >
            <span className="item__btn-text">купи</span>
            <span className="item__btn-dot">.</span>
          </button>
        </div>
      }
      {(isSelected && props.isAvailable) &&
        <div className="item__underline">
          <p className="item__underline-text">{props.description}</p>
        </div>
      }
    </div>
  );
}

export default Item;
