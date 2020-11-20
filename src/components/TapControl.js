import React from 'react';
import TapList from "./TapList.js"
import NewKegForm from "./NewKegForm.js"
import KegDetail from "./KegDetails.js"


class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [{name: "Pilsner", brand: "Breakside", price: 4, alcoholContent: 4.5, quantity: 124, id:10001 }],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    }
  }

  handleClickForm = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
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

  handleChangingSelectedKeg = (id) => {   
    console.log(id);
    const newSelectedKeg = this.state.masterTapList.filter(keg => keg.id === id)[0];  
    this.setState({selectedKeg: newSelectedKeg});
  }

  handlePourPint = (id) => {
    const newMasterTapList = this.state.masterTapList;
    for (const keg of newMasterTapList) {
      if (keg.id === id) {
        keg.quantity -= 1;
        break;
      }
    }
    this.setState({
      masterTapList: newMasterTapList,
      formVisibleOnPage: false });
  }
  







  render() {
    let currentVisibleState = null;
    let buttonText = null;


    if (this.state.selectedKeg != null) {
      currentVisibleState = <KegDetail 
      keg = {this.state.selectedKeg} 
      // onClickingDelete = {this.handleDeletingProduct}
      // onClickingEdit = {this.handleEditClick} 
      />
      buttonText = "Return to Tap List";
    }
    else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Tap List"
    } else {
    currentVisibleState = <TapList 
      availableKegs={this.state.masterTapList}
      onKegSelection={this.handleChangingSelectedKeg}
      onPourPint={this.handlePourPint}
      />      
    buttonText = "Add New Keg"
    }


    return (
      <React.Fragment>
        <div className="container">

          {currentVisibleState}
          <br/>
          <button className="arrow btn btn-outline-info btn-block" onClick={this.handleClickForm}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default TapControl;
