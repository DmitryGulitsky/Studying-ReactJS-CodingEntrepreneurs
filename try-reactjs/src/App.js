import React, { Component } from 'react'
// import PostSorting from './posts/PostSorting'
// import LifeCycle from './learn/LifeCicle'
// import Timer from './learn/Timer'
import WelcomeHereDialog, {AlertBox, SubItem} from './learn/ParentWrapper'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <AlertBox alertType='danger'>I think this is working...</AlertBox>
        <WelcomeHereDialog />
      </div>
    )
  }
}

export default App
