import React, { Component, lazy } from 'react'
import LifecycleB from './LifecycleB'

 class Lifecycle extends Component {
    constructor(props){
        super(props)
        this.state={
            name: 'Andrew'

        }
        console.log("Lifecycle")
    }

     static getDerivedStateFromProps(state,props){
         
        
        console.log("Lifecyle getDerivedStateFromProps")

        return null
    
    }


    ComponentDidtMount() {


        console.log("Lifecyle component did mount")


    }



    shouldComponentUpdate(){

        console.log("Lifecycle A should component update")



    }

    getSnapshotBeforeUpdate(prevProps,prevState){

        console.log("Lifecycle A getSnapshotBeforeUpdate")

        return null
        
    }

    componentDidUpdate(){

        console.log("Lifecyle A componentDidUpdate")


    }

    changeState = () => {

        this.setState({

            name:'Code execution'

        })



    }

  render(){

    console.log("Lifecycle render")


    return (
      <div>

       <div>Lifecycle A </div> 

       <button onClick={this.changeState}> Press me</button>

        <LifecycleB/>

      </div>
    )
  }
}

export default Lifecycle