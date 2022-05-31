import React from "react"
import PropTypes from "prop-types"
import Greeting from './Greeting'
// import { Provider } from "react-redux";
// // import { store } from "../configureStore";
// import configureStore  from "../configureStore";
// const store = configureStore();
// import store from "../configureStore";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
class App extends React.Component {
  render () {
    return (
      // <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ "Home!" } />
            <Route path="/greetings" element={ <Greeting greeting="friend"/>} />
          </Routes>
        </BrowserRouter>
      // </Provider>
    );
  }
}

export default App
