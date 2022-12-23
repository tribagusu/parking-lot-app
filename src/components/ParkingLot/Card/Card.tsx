import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { atom, useAtom } from "jotai"
import { data } from "../../../data/data"
import "./Card.css"

export const parkingLotAtom = atom<number | null>(null)

const Card = () => {
  const [parkingLot, setParkingLot] = useAtom(parkingLotAtom)

  const navigate = useNavigate()
  const selectBooking = (lotNumber: number | null) => {
    navigate("/")
    setParkingLot(lotNumber)
  }

  return (
    <>
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="parking-lot-number">
            <h2>{item.lotNumber}</h2>
          </div>
          {!item.booked ? (
            <div className="parking-availability">
              <h3>Available</h3>
              <button onClick={() => selectBooking(item.lotNumber)}>
                <span>Book</span>
              </button>
            </div>
          ) : (
            <h1 className="booked-status">Booked</h1>
          )}
        </div>
      ))}
    </>
  )
}

export default Card
