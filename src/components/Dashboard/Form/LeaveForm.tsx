import React from "react"
import "./LeaveForm.css"

const LeaveForm = (props: any) => {
  const { carColor, carNumber, parkingLot, setIsSubmitted } = props

  return (
    <>
      <div className="leave-form-dashboard">
        <div className="parking-info">
          <h2>
            Car Number: <span>{carNumber}</span>
          </h2>
          <h2>
            Car Color: <span>{carColor.toUpperCase()}</span>
          </h2>
          <h2>
            Parking Number: <span>{parkingLot}</span>
          </h2>
        </div>
        <button onClick={() => setIsSubmitted(false)}>
          <span>Leave</span>
        </button>
      </div>
    </>
  )
}

export default LeaveForm
