import withTime from './withTime'

const diff = (timestamp) => {
  return DateTime
    .fromSeconds(timestamp)
    .diff(DateTime.local())
    .toFormat("d'd' hh:mm:ss")
}

const Countdown = ({ timestamp }) => {

  // const [time, setTime] = useState(0)

  // setInterval(() => {
  //   setTime(new Date())
  // }, 1000)
  const text = DateTime.local() < DateTime.fromSeconds(timestamp)
    ? diff(timestamp)
    : 'DONE'

  return (
    <div className="countdown">
      {text}
    </div>
  )
}

export default withTime(Countdown)
