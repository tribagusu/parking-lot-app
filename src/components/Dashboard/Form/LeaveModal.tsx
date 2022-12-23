import React, { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { parkingLotAtom } from "../../ParkingLot/Card/Card"
import "./LeaveModal.css"

interface ModalProps {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  carNumber: number
  setParkingNumber: (parkingNumber: number | null) => void
  setIsBooked: (isBooked: boolean) => void
}

const LeaveModal = (props: ModalProps): JSX.Element => {
  const { setIsBooked, setParkingNumber, carNumber, setShowModal } = props
  const [parkingLot, setParkingLot] = useAtom(parkingLotAtom)
  const [confirmCarNumber, setConfirmCarNumber] = useState<number | null>(null)
  const [errorNumber, serErrorNumber] = useState<boolean>(false)

  const handleConfirmCarNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmCarNumber(Number(e.target.value))
  }

  const handleLeave = () => {
    if (confirmCarNumber === carNumber) {
      setIsBooked(false)
    } else {
      serErrorNumber(true)
    }
    setParkingNumber(null)
    setParkingLot(null)
  }

  const handleCancelLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowModal(false)
  }

  useEffect(() => {
    setTimeout(() => {
      serErrorNumber(false)
    }, 3000)
  }, [errorNumber])

  return (
    <div className="modal-leave__backdrop">
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-input-error">
            {errorNumber && <h4>Your Car Number is Wrong!</h4>}
          </div>
          <div className="modal-title">
            <h3>Confirm Your Leave</h3>
            <p>Please input your Car Number to confirm your leave </p>
            <input type="number" onChange={handleConfirmCarNumber} required />
          </div>
          <div className="modal-button">
            <button onClick={handleLeave} className="btn-leave">
              Leave
            </button>
            {/* <button onClick={handleCancelLeave} className="btn-no-leave">
              No
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaveModal
