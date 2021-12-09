// import { BrowserRouter as Router } from "react-router-dom";
import { Affix } from "antd";
import "./App.scss";
import AppHeader from "./components/common/AppHeader";
import Footer from "./components/common/Footer";
import Register from "./components/register/Register";
import Dashboard from "./dashboard-ui";
// const { Header, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Affix>
        <AppHeader />
      </Affix>
      <Dashboard />
    </div>
  );
}

export default App;
