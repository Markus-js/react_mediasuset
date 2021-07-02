import Signup from "./components/Login/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./components/Login/DashBoard";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import ForgotPassword from "./components/Login/ForgotPassword";
import UpdateProfile from "./components/Login/UpdateProfile";
// Layout
import Navbar from "./components/Navbar/Navbar";
// Pages
import EventsList from "./components/Events/EventsList";
import News from "./components/News/News";

function App() {
  return (
    <Container
      className="d-flex align-item-center justify-content-center "
      style={{ minHeight: "100vh" }}
    >
      <div>
        <Router>
          <Navbar />
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/dash" component={DashBoard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/" exact component={News} />
              {/* Pages */}
              <Route exact path="/events" component={EventsList} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
