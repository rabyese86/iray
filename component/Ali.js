import React from 'react'

const Ali = ({HeroName}) => {

    if(HeroName === 'Hammed'){

        throw new Error("Not a Hero")


    }
  return (
    <div>
        {HeroName}

    </div>
  )
}
    

export default Ali