import React, { FormEvent, useEffect, useState } from "react"
import "./BookingForm.css"

const BookingForm = (props: any) => {
  const { handleSubmit, changeCarNumber, changeCarColor, changeParkingLot } =
    props

  return (
    <form className="booking-form-dashboard" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Car Number"
        required
        onChange={changeCarNumber}
      />
      <input
        type="text"
        placeholder="Car Color"
        required
        onChange={changeCarColor}
      />
      <input
        type="number"
        placeholder="Parking Lot Number"
        onChange={changeParkingLot}
        required
      />
      <button>
        <span>Book</span>
      </button>
    </form>
  )
}

export default BookingForm
