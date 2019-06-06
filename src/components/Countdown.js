import { useState, useEffect } from 'react'

const diff = (timestamp) => {
  return DateTime
    .fromSeconds(timestamp)
    .diff(DateTime.local())
    .toFormat('dd hh:mm:ss')
}

const Countdown = ({ timestamp }) => {

  // const [time, setTime] = useState(0)

  // setInterval(() => {
  //   setTime(new Date())
  // }, 1000)

  return (
    <div className="countdown">
      {diff(timestamp)}
    </div>
  )
}

export default Countdown
