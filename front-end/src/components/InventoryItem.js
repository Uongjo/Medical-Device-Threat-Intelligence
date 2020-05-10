import React, { Component } from 'react';

class InventoryItem extends Component {

  dragStart = e => {
    const target = e.target
    e.dataTransfer.setData('id', target.id)
    console.log("DRAGGING", target.id)

    setTimeout(() => {
      target.style.display = "none";
    }, 0)
  }

  dragOver = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="inventory-item"
        id={"inventory-item-" + this.props.id}
        // draggable={true}
        // onDragStart={this.dragStart}
        // onDragOver={this.dragOver}
      >
        <b>{this.props.name}</b>
        <br/>
        <br/>
        <p>VERSION: {this.props.version}</p>
      </div>
    );
  }
}
 
export default InventoryItem;