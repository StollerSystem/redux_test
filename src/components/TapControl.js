import React from 'react';
import TapList from "./TapList.js"
import NewKegForm from "./NewKegForm.js"


class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [{name: "Pilsner", brand: "Breakside", price: 4, alcoholContent: 4.5 }],
      formVisibleOnPage: false,
      selectedProduct: null,
      editing: false
    }
  }

  handleClickForm = () => {
    if (this.state.selectedProduct != null){
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterTapList = this.state.masterTapList.concat(newKeg);
    this.setState({
      masterTapList: newMasterTapList,
      formVisibleOnPage: false });
  }







  render() {
    let currentVisibleState = null;
    let buttonText = null;


    if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Tap List"
    } else {

    currentVisibleState = <TapList 
      availableKegs={this.state.masterTapList}/>
    buttonText = "Add New Keg"
    }


    return (
      <React.Fragment>
        <div className="container">

          {currentVisibleState}
          <button className="arrow btn btn-outline-info btn-block" onClick={this.handleClickForm}>{buttonText}</button>
        </div>
      </React.Fragment>

    );
    


  }



}

export default TapControl;
