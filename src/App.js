import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Board from "./pages/Board";

import {signIn} from './deletData/Auth'
import PrivateRoute from './util/PrivateRoute'
//style관련
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from './styles/theme'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import { createStore, applyMiddleware  } from 'redux';
import rootReducer from './redux';
import logger from 'redux-logger';


function App() {
  const [user, setUser] = useState(null);
  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const authenticated = user != null;
  const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(ReduxThunk,logger))
  ); // 스토어를 만듭니다.
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/board/:boardTitle" component={Board}/>
            <PrivateRoute path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
      </Provider>
  </ThemeProvider>
  );
}

export default App;
