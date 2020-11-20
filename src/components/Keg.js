import React from "react";
import PropTypes from "prop-types";


function Keg(props){
  let alert = null
  if (props.quantity <= 0) {
    alert = <h3 className="redAlert">Out of Stock</h3>
  } else if (props.quantity < 10) {
    alert = <h3 className="redAlert">Almost Empty</h3>
  }
  return (    
      <div className="keg">
        <div onClick = {() => props.onKegSelection(props.id)}>
          {alert}
          <h3>{props.brand} {props.name}</h3>
          <h4>${props.price}/Pint </h4>
          <h5>{props.alcoholContent}%ALC</h5>     
          <p>Quantity (Pint Pours): {props.quantity}</p>
        </div>
        <button className="btn btn-outline-info btn-sm" onClick = {() => props.onPourPint(props.id)}>Pour a pint!</button>
      </div>    
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onKegSelection: PropTypes.func,
  onPourPint: PropTypes.func
}

export default Keg;