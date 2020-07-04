import React from "react";
import "./styles.css";
import bread from "./images/bread.jfif";
import jam from "./images/jam.jfif";
import biscut from "./images/biscut.jfif";
import milk from "./images/milk.jfif";
import atta from "./images/atta.jpg";
import cofee from "./images/cofee.jpg";
import dals from "./images/dals.jpg";
import drinks from "./images/drinks.jpg";
import fruits from "./images/fruits.jpg";
import rise from "./images/rise.jpg";
import skincare from "./images/skincare.jpg";
import tea from "./images/tea.jpg";
import oil from "./images/oil.jpg";
import makeup from "./images/makeup.jpg";
function Products(props) {
  return (
    <div className="product">
      <img src={atta} alt="atta" onClick={props.addItem} />
      <img src={cofee} alt="cofee" onClick={props.addItem} />
      <img src={dals} alt="dals" onClick={props.addItem} />
      <img src={drinks} alt="drinks" onClick={props.addItem} />
      <img src={fruits} alt="fruits" onClick={props.addItem} />
      <img src={rise} alt="rise" onClick={props.addItem} />
      <img src={tea} alt="tea" onClick={props.addItem} />
      <img src={oil} alt="oil" onClick={props.addItem} />
      <img src={makeup} alt="makeup" onClick={props.addItem} />
      <img src={skincare} alt="skincare" onClick={props.addItem} />
      <img src={bread} alt="bread" onClick={props.addItem} />
      <img src={milk} alt="milk" onClick={props.addItem} />
      <img src={jam} alt="jam" onClick={props.addItem} />
      <img src={biscut} alt="biscut" onClick={props.addItem} />
    </div>
  );
}
export default Products;
