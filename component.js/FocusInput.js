import React, { Component } from 'react'
import Input from './Input'

 class FocusInput extends Component {
     constructor(props){
         super(props)
         this.componentRef= React.createRef()





     }
  render() {
    return (
      <div>

        <button onClick={this.clickHandler} > Click me</button>




        <Input ref={this.componentRef} />
      </div>
    )
  }
}

export default FocusInput