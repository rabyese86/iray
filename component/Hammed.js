import React from 'react'

const Hammed = ({name}) => {

    console.log("rendering memo component")

  return (
    <div>
         {name}
        
    </div>
  )
}
    

export default React.memo (Hammed)

