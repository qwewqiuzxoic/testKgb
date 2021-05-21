import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import {signIn} from './deletData/Auth';
//style관련
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from './styles/theme'

function App() {
  const [user, setUser] = useState(null);
  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const authenticated = user != null;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
  </ThemeProvider>
  );
}

export default App;
