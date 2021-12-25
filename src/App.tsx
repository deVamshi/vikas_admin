import { Affix } from "antd";
import "./dashboard-ui/dashboard.scss";
import "./App.scss";
import AppHeader from "./components/common/AppHeader";
import Footer from "./components/common/Footer";
import Register from "./components/register/Register";
import { isMobile } from "react-device-detect";
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
  if (isMobile) return <h4>Mobile view not supported(yet)</h4>;

  return (
    <Router>
      <div className="App">
        <Affix>
          <AppHeader />
        </Affix>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/transactions" exact component={Transactions}/>
        <Route path="/matches" exact component={Matches}/>
        <Route path="/users" exact component={Users}/>
        <Route path="/produces" exact component={Produces}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
