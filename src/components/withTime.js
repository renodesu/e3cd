const withTime = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        time: 0
      }
      setInterval(() => {
        this.setState({ time: new Date() })
      }, 1000)
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

export default withTime
