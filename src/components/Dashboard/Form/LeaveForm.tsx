import { useAtom } from "jotai"
import { parkingLotAtom } from "../../ParkingLot/Card/Card"
import "./LeaveForm.css"

const LeaveForm = (props: any) => {
  const { carColor, carNumber, setIsBooked, setParkingNumber, parkingNumber } =
    props

  const [parkingLot, setParkingLot] = useAtom(parkingLotAtom)

  const onLeave = () => {
    setIsBooked(false)
    setParkingNumber(null)
    setParkingLot(null)
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
        <button onClick={onLeave}>
          <span>Leave</span>
        </button>
      </div>
    </>
  )
}

export default LeaveForm
