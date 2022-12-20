import React, { useState } from "react"
import { data } from "../../../data/data"
import "./Card.css"
const Card = () => {
  const [park1, setPark1] = useState(1)

  return (
    <>
      {data.map((item) => (
        <div className="card" key={item.parkingNumber}>
          <div className="parking-lot-number">
            <p>{item.parkingNumber}</p>
          </div>
          <form className="booking-form">
            <input type="number" placeholder="Car Number" required />
            <input type="text" placeholder="Car Color" required />
            <button>
              <span>Book</span>
            </button>
          </form>
          <form className="leave-form">
            <input type="number" placeholder="Car Number" required />
            <button>
              <span>Leave</span>
            </button>
          </form>
        </div>
      ))}
    </>
  )
}

export default Card
