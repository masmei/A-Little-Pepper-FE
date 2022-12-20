import React from 'react'
import { Image } from "react-bootstrap";
import emptyPlate from "../Assets/empty-plate.png"

function FourOFour() {
  return (
    <div className='py-5'>
        <h1 style={{color:"#FB8F00"}}>Oh No!</h1>
        <h3 className='pb-3'>There's not much left for you here ;-)</h3>
        <Image src={emptyPlate} style={{maxWidth:"50%"}}/>
    </div>
  )
}

export default FourOFour