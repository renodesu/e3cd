import Embed from './Embed'
import Link from './Link'
import Logo from './Logo'

const formatTime = (timestamp) => {
  return DateTime.fromSeconds(timestamp).toFormat('dd.MM.yyyy HH:mm')
}

const diff = (timestamp) => {
  const now = DateTime.local()
  return DateTime
    .fromSeconds(timestamp)
    .diff(now)
    .toFormat('dd hh:mm:ss')
}

const Company = ({ company }) => {
  return (
    <div className="company">
      <div className="logo">
        <Logo />
      </div>
      <div className="content">
        <h2>{company.name}</h2>


        <p>
          {formatTime(company.timestamp)}
        </p>
        <p>
          diff: {diff(company.timestamp)}
        </p>
        <Link href={company.official} text="OFFICIAL" />
        {company.streams.map((stream, index) => (
          <Embed
            key={index}
            stream={stream}
          />
        ))}
      </div>
    </div>
  )
}

export default Company
