import React from 'react'
import { Component } from 'react';

class AddItem extends Component {

    constructor(props){
        super(props);
        this.state = {
             productName:"",
             productPrice: 0,
        }; 
    }

    render() { 
        return (
        <form className='row mb-5'onSubmit={(e) => {
            e.preventDefault();
            this.props.addItem(this.state.productName, this.state.productPrice);
        }}>
            <div className="mb-3 col-4">
              <label htmlFor="InputName" className="form-label">
                Product Name
              </label>
              <input
                type=""
                className="form-control"
                id="InputName"
                aria-describedby="Name"
                name = "productName"
                onChange={(e) => {
                    this.setState({productName: e.currentTarget.value});
                }}
                value = {this.state.productName}
              />
             
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="InputPrice" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="Price"
                name = "productPrice"
                onChange={(e) => {
                    this.setState({productPrice: e.currentTarget.value});
                }}
                value = {this.state.productPrice}
              />
            </div>
           
            <button type="Submit" className="btn btn-primary col-5" >
              Add
            </button>
          </form>);
    }
}
 
export default AddItem;