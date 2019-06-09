import Embed from './Embed'
import Link from './Link'
import Logo from './Logo'
import Countdown from './Countdown'

const formatTime = (timestamp) => DateTime.fromSeconds(timestamp).toFormat('dd.MM.yyyy HH:mm')

const Company = ({ company }) => {
  return (
    <div className="company">
      <div className="row1">
        <div className="logo">
          <Logo src={company.logo.src} />
        </div>
        <div className="content">
          <div className="titleRow">
            <div className="date">
              {`Starting ${formatTime(company.timestamp)} (local time)`}
            </div>
            <Countdown timestamp={company.timestamp} />
          </div>

        </div>
      </div>
      <div className="row3">
        <div className="links">
          {company.official && (
            <Link href={company.official} text="OFFICIAL" />
          )}

          {company.mixer && (
            <Link href={`https://mixer.com/${company.mixer}`} text="MIXER" />
          )}

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
