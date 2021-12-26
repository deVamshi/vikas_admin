// import { BrowserRouter as Router } from "react-router-dom";
import { Affix } from "antd";
import "./App.scss";
import AppHeader from "./components/common/AppHeader";
import Register from "./components/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Dashboard from "./dashboard-ui";
import { useEffect, useState } from "react";
// const { Header, Content } = Layout;
function App() {
  return (
    <Router>
      <div className="App">
        <Affix>
          <AppHeader />
        </Affix>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
