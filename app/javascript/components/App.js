import React from "react"
import PropTypes from "prop-types"
import Greeting from './Greeting'
import { Provider } from "react-redux";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import store from "../configureStore";

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ "Home!" } />
            <Route path="/greetings" element={ <Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
