import React, { Component } from 'react'
// import PostSorting from './posts/PostSorting'
// import LifeCycle from './learn/LifeCicle'
// import Timer from './learn/Timer'
// import WelcomeHereDialog, {AlertBox, SubItem} from './learn/ParentWrapper'
// import FormsAndInputs from './learn/FormsAndInputs'
import ImgDropAndCrop from './learn/ImgDropAndCrop'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ImgDropAndCrop />
      </div>
    )
  }
}

export default App
