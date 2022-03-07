import React from 'react'
import image from '../../Assets/DagdushethGanapati.JPG'
import playerContext from '../../context/playerContext'
function Graphics() {
 // const { SetCurrent, currentSong, img } = useContext(playerContext)
  return (
    <div className="graphics">
      <img alt="graphic" src={image}></img>
    </div>
  )
}

export default Graphics
