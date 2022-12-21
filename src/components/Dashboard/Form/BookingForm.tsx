import { useAtom } from "jotai"
import { parkingLotAtom } from "../../ParkingLot/Card/Card"
import "./BookingForm.css"

const BookingForm = (props: any) => {
  const [parkingLot] = useAtom(parkingLotAtom)

  const {
    handleSubmit,
    changeCarNumber,
    changeCarColor,
    changeParkingNumber,
    parkingNumber,
    setParkingNumber,
  } = props

  if (parkingLot) {
    setParkingNumber(parkingLot)
  }

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
        value={parkingNumber}
        placeholder="Parking Lot Number"
        onChange={changeParkingNumber}
        required
      />
      <button>
        <span>Book</span>
      </button>
    </form>
  )
}

export default BookingForm
