import { render, screen } from "@testing-library/react"
import ParkingLot from "./ParkingLot"

describe("ParkingLot renders correctly", () => {
  test("should renders correctly", () => {
    render(<ParkingLot />)
    const pageHeading = screen.getByRole("heading", {
      level: 2,
      name: "Find a Parking Space",
    })
    expect(pageHeading).toBeInTheDocument()
  })
})
