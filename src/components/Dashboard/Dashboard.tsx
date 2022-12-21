import { FormEvent, ChangeEvent, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { atom, useAtom } from "jotai"
import BookingForm from "./Form/BookingForm"
import LeaveForm from "./Form/LeaveForm"
import "./Dashboard.css"

export const parkingLotAtom = atom<string>("")
const Dashboard = () => {
  const [carNumber, setCarNumber] = useState<number>(0)
  const [carColor, setCarColor] = useState<string>("")
  const [parkingNumber, setParkingNumber] = useState<number | null>(null)
  const [isBooked, setIsBooked] = useState<boolean>(false)

  const changeParkingNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setParkingNumber(Number(e.target.value))
  }
  const changeCarNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setCarNumber(Number(e.target.value))
  }

  const changeCarColor = (e: ChangeEvent<HTMLInputElement>) => {
    setCarColor(e.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsBooked(true)
  }

  const props = {
    carNumber,
    setCarNumber,
    carColor,
    setCarColor,
    parkingNumber,
    setParkingNumber,
    changeParkingNumber,
    changeCarNumber,
    changeCarColor,
    handleSubmit,
    setIsBooked,
  }

  return (
    <div className="dashboard">
      {!isBooked ? (
        <h2>Book Your Parking Space</h2>
      ) : (
        <h2>Your Parking Info</h2>
      )}

      <div className="dashboard-card-container">
        {!isBooked ? <BookingForm {...props} /> : <LeaveForm {...props} />}
        <div className="notif-availability">
          {/* <span>is not available</span> */}
        </div>
        <div className="find-parking-button">
          {!isBooked && <Link to="/parking-lot">Find a Free Space &rarr;</Link>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
