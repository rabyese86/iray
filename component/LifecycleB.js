import React, { Component, lazy } from 'react'

 class LifecycleB extends Component {
    constructor(props){
        super(props)
        this.state={
            name: 'Hammed'

        }
        console.log("LifecycleB")
    }

     static getDerivedStateFromProps(state,props){
         
        
        console.log("LifecyleB getDerivedStateFromProps")

        return null
    
    }


    ComponentDidtMount() {


        console.log("LifecyleB component did mount")


    }
    shouldComponentUpdate(){

        console.log("Lifecycle B should component update")



    }

    getSnapshotBeforeUpdate(prevProps,prevState){

        console.log("Lifecycle B getSnapshotBeforeUpdate")

        return null
        


    }

    componentDidUpdate(){

        console.log("Lifecyle B componentDidUpdate")


    }



  render(){

    console.log("LifecycleB render")


    return (
      <div>

        LifecycleB B

      </div>
    )
  }
}

export default LifecycleB