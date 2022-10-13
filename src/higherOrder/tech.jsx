import React, { Component } from 'react'
import hoc from './hoc'
import "./tech.css"
class tech extends Component {
  render() {
    return (
        <div>
            <h2 className='technology'>React Tech</h2>
            {this.props.showTooltip && <div className='box'>The Frontend Technology</div>}
        </div>
    )
  }
}
export default hoc(tech);
