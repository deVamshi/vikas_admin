import { Affix } from "antd";
import "./dashboard-ui/dashboard.scss";
import "./App.scss";
import AppHeader from "./components/common/AppHeader";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard-ui";
function App() {
  return (
    <Router>
      <div className="App">
        <Affix>
          <AppHeader />
        </Affix>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
