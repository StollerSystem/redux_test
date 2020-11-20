import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";


function NewProductForm(props) {

  function handleNewProductFormSubmission(event){
    event.preventDefault();
   props.onNewProductCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: v4() })
  }  
  
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewProductFormSubmission}
      buttonText="Add Keg"/>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;