import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete} = props;  
  
  return (
    <React.Fragment>
      <div className="keg">
        <h1 className="black">Keg Details</h1>
        <hr/>
        <h2>Name: {keg.name}</h2>
        <h4>Brand: {keg.brand}</h4>
        <h4>Price/Pint: ${keg.price}</h4>
        <h4>Alcohol Content: {keg.alcoholContent} %ABU</h4>
        <h4>Quantity (approx pint pours left): {keg.quantity}</h4>
        <hr/>
        <button className="btn btn-outline-info btn-block" onClick={ props.onClickingEdit }>Edit This Keg</button>
        <button className="btn btn-outline-danger btn-block" onClick={() => onClickingDelete(keg.id) }>Delete This Keg</button>
      </div>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default KegDetail;
