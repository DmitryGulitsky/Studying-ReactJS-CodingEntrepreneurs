import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  // componentWillMount()

  render () {
    const {loading} = this.state
    return <h1>{loading === true ? 'Hello World' : 'False'}</h1>
  }

  componentDidMount () {

    this.setState({
      loading: false
    })
  }

  componentWillUnmount () {

    this.setState({
      loading: false
    })
  }
}

export default LifeCycle