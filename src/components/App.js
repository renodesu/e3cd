import Companies from './Companies'

const App = () => {

  return (
    <div>
      <div className="wrapper">
        <div>
          Detected timezone: {DateTime.local().zoneName}
        </div>
        <Companies />
      </div>
    </div>
  )
}

export default App
