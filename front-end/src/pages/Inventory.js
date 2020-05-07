import React, { Component } from 'react';
import InventorySection from '../components/InventorySection'
import data from '../static/data.json'

class Inventory extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      devices: data.devices,
      safeDevices: this.filterDevices(false, false),
      recalledDevices: this.filterDevices(true, false),
      vulnerableDevices: this.filterDevices(false, true),
    }
  }

  filterDevices = (isUpdate, isVulnerable) => {
    const devices = data.devices
    return devices.filter(item => (
      item.update === isUpdate && item.vulnerable === isVulnerable
    ))
  }

  renderInventorySections = () => {
    return(
      <div className="inventory-section-container">
        <InventorySection
          devices={this.state.safeDevices}
          searchValue={this.state.searchValue}
          title={"Safe Devices"}
        />
        <InventorySection
          devices={this.state.recalledDevices}
          searchValue={this.state.searchValue}
          title={"Recalled Devices"}
        />
        <InventorySection
          devices={this.state.vulnerableDevices}
          searchValue={this.state.searchValue}
          title={"Vulnerable Devices"}
        />
      </div>
    )
  }
  
  render() { 
    return (
      <div id="inventory">
        <form className="form">
          <input
            className="search"
            type="text" 
            placeholder="Search"
            onChange={ (event) => this.setState({ searchValue: event.target.value }) }
          />
        </form>
        {this.renderInventorySections()}
      </div>
    );
  }
}
 
export default Inventory;