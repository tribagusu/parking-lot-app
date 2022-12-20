import React, { useState } from "react"
import { data } from "../../../data/data"
import "./Card.css"
const Card = () => {
  return (
    <>
      {data.map((item) => (
        <div className="card" key={item.parkingNumber}>
          <div className="parking-lot-number">
            <h2>{item.parkingNumber}</h2>
          </div>
          {!item.booked ? (
            <div className="parking-availability">
              <h3>Available</h3>
              <button>
                <span>Book Now</span>
              </button>
            </div>
          ) : (
            <h1>Booked</h1>
          )}
        </div>
      ))}
    </>
  )
}

export default Card
