import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Team1 from './pages/Team1';
import Team2_1 from './pages/Team2_1';
import Team3_1 from './pages/Team3_1';
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";

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
import Top from "./components/base/Top";


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
          <Top/>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/board/:boardTitle" component={Board}/>
            <PrivateRoute path="/boarddetail/:number" component={BoardDetail}/>
            <PrivateRoute path="/" component={BoardDetail}/>
          </Switch>
        </div>
      </Router>
      </Provider>
  </ThemeProvider>
  );
}

export default App;
