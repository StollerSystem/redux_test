import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function EditKegForm(props) {

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      // quantity: event.target.quantity.value,
      id: v4()
    })
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditProduct: PropTypes.func
};

export default EditKegForm;