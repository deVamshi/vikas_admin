// import { BrowserRouter as Router } from "react-router-dom";
import { Affix } from "antd";
import "./App.scss";
import AppHeader from "./components/common/AppHeader";
import Footer from "./components/common/Footer";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Route, Link, BrowserRouter ,Routes} from "react-router-dom";
import Dashboard from "./dashboard-ui";
// const { Header, Content } = Layout;
function App() {
  return (
    <Router>
    <div className="App">
      <Affix>
        <AppHeader />
      </Affix>
    <Routes>
      <Route path="/"  element={<Dashboard/>} />
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
