import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Book from "./Component/Book";

class App extends Component {
  render() {
    return (
    <Book/>
    );
  }
}

export default App;