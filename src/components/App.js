import Companies from './Companies'

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="title">
          <h1>E3 COOLDOWN</h1>
          <div>
            Detected timezone: {DateTime.local().zoneName}
            <br />
            All times in local time
          </div>
          <div className="highlight">
            ALL-IN-ONE convenience Twitch stream:&nbsp;
            <a className="link" href="https://www.twitch.tv/twitch">Twitch</a>
          </div>
        </div>
        <Companies />
      </div>
    </div>
  )
}

export default App
