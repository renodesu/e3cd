import Companies from './Companies'

const App = () => {

  return (
    <div>
      <div className="wrapper">
        <div>
          Detected timezone: {DateTime.local().zoneName}
          <br/>
          All times in local time
        </div>
        <Companies />
      </div>
    </div>
  )
}

export default App
