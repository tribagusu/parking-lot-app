import React from "react"
import Card from "./Card/Card"
import "./ParkingLot.css"
const ParkingLot = () => {
  return (
    <div className="parking-lot">
      <div className="parking-lot-container">
        <div className="parking-lot-heading">
          <h2>Find a Parking Space</h2>
        </div>
        <div className="parking-lot-cards">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default ParkingLot
