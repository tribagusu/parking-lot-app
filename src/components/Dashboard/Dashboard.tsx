import { FormEvent, ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import BookingForm from "./Form/BookingForm"
import LeaveForm from "./Form/LeaveForm"
import "./Dashboard.css"

const Dashboard = () => {
  const [carNumber, setCarNumber] = useState<number>(0)
  const [carColor, setCarColor] = useState<string>("")
  const [parkingLot, setParkingLot] = useState<number>(0)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const changeParkingLot = (e: ChangeEvent<HTMLInputElement>) => {
    setParkingLot(Number(e.target.value))
  }
  const changeCarNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setCarNumber(Number(e.target.value))
  }

  const changeCarColor = (e: ChangeEvent<HTMLInputElement>) => {
    setCarColor(e.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  const props = {
    carNumber,
    setCarNumber,
    carColor,
    setCarColor,
    parkingLot,
    setParkingLot,
    changeParkingLot,
    changeCarNumber,
    changeCarColor,
    handleSubmit,
    setIsSubmitted,
  }

  return (
    <div className="dashboard">
      {!isSubmitted ? (
        <h2>Book Your Parking Space</h2>
      ) : (
        <h2>Your Parking Info</h2>
      )}

      <div className="dashboard-card-container">
        {!isSubmitted ? <BookingForm {...props} /> : <LeaveForm {...props} />}
        <div className="notif-availability">
          {/* <span>is not available</span> */}
        </div>
        <div className="find-parking-button">
          {!isSubmitted && (
            <Link to="/parking-lot">Find a Free Space &rarr;</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
