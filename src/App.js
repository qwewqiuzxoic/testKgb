import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import {signIn} from './deletData/Auth'
function App() {
  const [user, setUser] = useState(null);
  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const authenticated = user != null;

  return (
    <Router>
    <div>
      asdasd
      
      <Switch>
        <Route path="/login">
          <Login user={user} login={login}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
