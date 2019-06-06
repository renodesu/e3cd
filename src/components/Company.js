import { useState, useEffect } from 'react'
import Embed from './Embed'
import Link from './Link'
import Logo from './Logo'
import Countdown from './Countdown'

const formatTime = (timestamp) => DateTime.fromSeconds(timestamp).toFormat('dd.MM.yyyy HH:mm')

const Company = ({ company }) => {
  // const [time, setTime] = useState(0)

  // setInterval(() => {
  //   setTime(new Date())
  // }, 1000)

  return (
    <div className="company">
      <div className="logo">
        <Logo />
      </div>
      <div className="content">
        <div className="titleRow">
          <h2>{company.name}</h2>
          <div className="date">
            {formatTime(company.timestamp)}
          </div>
        </div>
        <Countdown timestamp={company.timestamp} />
        <div className="links">
          <Link href={company.official} text="OFFICIAL" />
          {company.streams.map((stream, index) => (
            <Embed
              key={index}
              stream={stream}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Company
