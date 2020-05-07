import React, { Component } from 'react';
import InventoryItem from './InventoryItem'

class InventorySection extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      devices: this.props.devices
    }
  }

  drop = (e) => {
    e.preventDefault()
    
    const id = e.dataTransfer.getData('id')
    console.log("DROPPED", id)
    const item = document.getElementById(id)
    console.log(item.firstChild.innerHTML)
    
    item.style.display = 'block'
    e.target.appendChild(item)
    e.target.removeChild(item)

    const devices = this.state.devices
    devices.push({
      id: 100,
      version: '0.1.51',
      name: item.firstChild.innerHTML,
      update: false,
      vulnerable: false,
    })
    this.setState({ devices })
  }

  dragOver = e => {
    e.preventDefault()
  }

  renderItems = () => {
    console.log(this.props.searchValue)
    const devices = this.state.devices.filter(item => {
      const name = item.name
      const term = this.props.searchValue.toUpperCase()
      const result = name.includes(term)
      return result
    })
    console.log(this.props.title, devices, this.props.searchValue)
    return devices.map(item => (
      <InventoryItem
        id={item.id}
        name={item.name}
        version={item.version}
        update={item.update}
        vulnerable={item.vulnerable}
      />
    ))
  }


  render() { 
    return (
      <div className="outer-inventory-section">
        <h1>{this.props.title}</h1>
        <div className="inventory-section" 
          onDrop={event => this.drop(event)} 
          onDragOver={this.dragOver}
          >
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
 
export default InventorySection;