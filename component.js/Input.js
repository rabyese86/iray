import React, { Component } from 'react'

 class Input extends Component {
     constructor(props){
        super(props)
        this.inputRef = React.createRef()



     }

     focusInput(){

        this.inputRef.current.focus()
     }

     clickHandler = () => {this.ComponentRef.current.focusInput()}


  render() {
    return (
      <div>
          <Input type="text"  ref= {this.inputRef}/>



      </div>
    )
  }
}

export default Input