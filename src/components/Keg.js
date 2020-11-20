import React from "react";
import PropTypes from "prop-types";


function Keg(props){

  let alert = null
  if (props.quantity <= 0) {
    alert = <span className="redAlert">Out of stock</span>
  } else if (props.quantity <= 10) {
    alert = <span className="redAlert">Almost Empty</span>
  }

  return (    
    <div className="keg">          
      <h3>{props.brand} - {props.name} {alert}</h3>
      <h4>${props.price}/Pint </h4>
      <h5>{props.alcoholContent}%ALC</h5>     
      <p>Quantity (approx pint Pours left): {props.quantity}</p>        
      <button className="btn btn-outline-info btn-sm" onClick = {() => props.onPourPint(props.id)}>Pour a pint!</button>
      <button className="btn btn-outline-info btn-sm" onClick = {() => props.onKegSelection(props.id)}>Details</button>
    </div>    
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.string,
  id: PropTypes.string,
  onKegSelection: PropTypes.func,
  onPourPint: PropTypes.func
}

export default Keg;