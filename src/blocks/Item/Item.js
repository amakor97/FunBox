import { useState, useEffect } from "react";

import "./_item.sass";

//import Card from "../Card/Card";

function Item(props) {
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [allowToHover, setAllowToHover] = useState(true);

  console.log(props.text);

  let allowToHover2 = false;
  
  //console.log({allowToHover});

  useEffect(() => {
    
  })

  const switchIsSelected = (e) => {
    //console.log({isSelected});
    setIsSelected(!isSelected);
    //console.log({isSelected});
    setAllowToHover(false);

    let card = e.target.parentNode.parentNode.querySelector(".item__card");
    let valueCont = card.querySelector(".item__card-value-container");

    if (!isSelected) {
      card.classList.add("item__card--selected");
      card.classList.remove("item__card--hovered");
      valueCont.classList.add("item__card-value-container--selected");
      valueCont.classList.remove("item__card-value-container--hovered");
      setAllowToHover(false);
      allowToHover2 = true;
      setIsHover(false);
      //console.log(allowToHover2);
    } else {
      card.classList.remove("item__card--selected");
      valueCont.classList.remove("item__card-value-container--selected");
      card.classList.remove("item__card--selected-hovered");
      valueCont.classList.remove("item__card-value-container--selected-hovered");
      setAllowToHover(false);
      setIsHover(false);
    }

    setAllowToHover(false);
    //console.log({allowToHover}, "end of switching");
  }

  function addClass(e) {
    //console.log("adding classes...", {allowToHover, isSelected});
    if (allowToHover) {
      //console.log("changing isHover to 'true'", {allowToHover, isSelected});
      setIsHover(true);

    }
    if (e.target.classList.contains("item__card-inner")) {
      return;
    }
    let card = e.target.parentNode.parentNode.querySelector(".item__card");
    let valueCont = card.querySelector(".item__card-value-container");
    if (!isSelected && allowToHover) {
      card.classList.add("item__card--hovered");
      valueCont.classList.add("item__card-value-container--hovered");
    } else if (allowToHover){
      card.classList.add("item__card--selected-hovered");
      valueCont.classList.add("item__card-value-container--selected-hovered");
    }


    if (!isSelected && allowToHover) {
      let btnText = e.target.parentNode.parentNode.querySelector(".item__btn-text");
      let btnDot = e.target.parentNode.parentNode.querySelector(".item__btn-dot");
      btnText.classList.add("item__btn-text--hovered");
      btnDot.classList.add("item__btn-dot--hovered");
    }

    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  function removeClass(e) {
    //console.log("changing isHover to 'false'", {allowToHover, isSelected});
    setIsHover(false);
    if (e.target.classList.contains("item__card-inner")) {
      return;
    }
    setAllowToHover(true);
    allowToHover2 = true;
    //console.log(allowToHover2);
    //console.log(e);
    //console.log(e.target);
    let card = e.target.parentNode.parentNode.querySelector(".item__card");
    let valueCont = card.querySelector(".item__card-value-container");
    //console.log(card);
    //console.log(valueCont);
    card.classList.remove("item__card--hovered");
    valueCont.classList.remove("item__card-value-container--hovered");
   
    if (isSelected) {
      card.classList.remove("item__card--selected-hovered");
      valueCont.classList.remove("item__card-value-container--selected-hovered");
    }

    if (!isSelected) {
      let btnText = e.target.parentNode.parentNode.querySelector(".item__btn-text");
      let btnDot = e.target.parentNode.parentNode.querySelector(".item__btn-dot");
      btnText.classList.remove("item__btn-text--hovered");
      btnDot.classList.remove("item__btn-dot--hovered");
    }

    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  function stopProp(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

 

  return(
    <div className="item">
      <div className="item__card-wrapper">
        <div className={"item__card " + (props.isAvailable ? "" : "item__card--no-available")} onMouseEnter={addClass} onMouseLeave={removeClass} onClick={switchIsSelected}>
          <div className={"item__card-inner " + (props.isAvailable ? "" : "item__card-inner--no-available")}>
            {(isSelected && isHover) &&
            <p className="item__card-promo">Котэ не одобряет?</p>
            }
            {(!isSelected || !isHover) &&
            <p className={"item__card-promo " + (props.isAvailable ? "" : "item__card-promo--no-available")}>{props.promo}</p>
            }
            
            <h2 className={"item__card-title " + (props.isAvailable ? "" : "item__card-title--no-available")}>
              {props.name}
            </h2>
            <h3 className={"item__card-taste " + (props.isAvailable ? "" : "item__card-taste--no-available")}>
                {props.taste}
            </h3>
            {
              props.text.map(function(line, index) {
                let num = parseInt(line);
                console.log({num});
                if (!Number.isNaN(num)) {
                  let len = num.toString().length;
                  console.log({len});
                  console.log(typeof(line));
                  line = line.slice(len);
                  console.log({line});
                }

                return(
                  <p className={"item__card-text " + (props.isAvailable ? "" : "item__card-text--no-available")} key={index}>
                    {
                      (!Number.isNaN(num)) &&
                      <span className="item__card-text-number">{num}</span>
                    }
                    {line}
                  </p>
                )
              })
            }
            <div className={"item__card-value-container " + (props.isAvailable ? "" : "item__card-value-container--no-available")}>
              <div className="item__card-value-digits">
                {props.value}
              </div>
              кг
            </div>
          </div>
        </div>
      </div>
      {
        !props.isAvailable && 
        <p className={"item__underline " + (props.isAvailable ? "" : "item__underline--no-available")}>Печалька, {props.taste} закончился</p>
      }
      {(!isSelected && props.isAvailable) && 
        <p className="item__underline">
          <span className="item__underline-text">Чего сидишь? Порадуй котэ,&nbsp;</span>
          <button className="item__btn" onMouseOver={addClass} onMouseLeave={removeClass} onClick={switchIsSelected}>
            <span className="item__btn-text">купи</span>
            <span className="item__btn-dot">.</span>
          </button>
        </p>
      }
      {
        (isSelected && props.isAvailable) &&
        <p className="item__underline">{props.description}</p>
      }
    </div>
  );
}

export default Item;
