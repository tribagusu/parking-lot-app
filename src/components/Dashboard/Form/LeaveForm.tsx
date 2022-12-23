import React, { useState } from "react"

import LeaveModal from "./LeaveModal"
import "./LeaveForm.css"

const LeaveForm = (props: any) => {
  const { carColor, carNumber, parkingNumber } = props
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <div className="leave-form-dashboard">
        <div className="parking-info">
          <h3>
            Car Number: <span>{carNumber}</span>
          </h3>
          <h3>
            Car Color: <span>{carColor.toUpperCase()}</span>
          </h3>
          <h3>
            Parking Number: <span>{parkingNumber}</span>
          </h3>
        </div>
        <button onClick={handleModal}>
          <span>Leave</span>
        </button>
        {showModal && (
          <LeaveModal
            {...props}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        )}
      </div>
    </>
  )
}

export default LeaveForm
