import React from 'react'
import Fc from './Fc'

const Captain = () => {

    const marcel=["Kelly","henry","havard","lincon"]

    const gate=[

        {
            name: "Rabbi",
            id: 1,
            age: 34,
            location: "Germany"

        },

        {
            name: "Richard",
            id:  2,
            age:30,
            location:"london"

        },


        {
            name: "Hamed",
            id: 3,
            age: 34,
            location: "Lagos"

        },


        {
            name: "Stella",
            id: 4,
            age: 50,
            location:"USA"

        }

    ]
    const List = gate.map( person => <Fc person = {person} />)
    const towsif= marcel.map((Name,index) => <h2 key= {index}>{index} {Name} </h2>)



  return (
    <div>{List}{towsif}
    
    
    </div>
  )
}

export default Captain