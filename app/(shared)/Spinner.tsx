'use client'
import { ClockLoader } from "react-spinners"

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClockLoader color="#daaed6"/>
    </div>
  )
}

export default Spinner