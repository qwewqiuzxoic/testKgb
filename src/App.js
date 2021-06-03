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
import Team5 from './pages/Team5';
import Team6_1 from './pages/Team6_1';
import Team6_3 from './pages/Team6_3';
import Team7 from './pages/Team7';
import Team8_1 from './pages/Team8_1';
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";
import Manage1_1 from "./pages/Manage1_1";
import Manage2_1 from "./pages/Manage2_1";
import Manage2_2 from "./pages/Manage2_2";
import Manage3_1 from "./pages/Manage3_1";
import Manage5_1 from "./pages/Manage5_1";

import {signIn} from './deletData/Auth'
import PrivateRoute from './util/PrivateRoute'
//style관련
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from './styles/theme'
import { Provider, useSelector } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import { createStore, applyMiddleware  } from 'redux';
import rootReducer from './redux';
import logger from 'redux-logger';
import Top from "./components/base/Top";
import axios from "axios";


function App() {
  // axios.get("http://localhost:3001/memo/2").then(res=>{
  // })

  const user = useSelector(state=>state.loginReducer.user);
  const [menu, setMenu] = useState(true);
  useEffect(() => {
      console.log(JSON.parse(localStorage.getItem('user')));
      return () => {
        }
  }, [user])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div>
          <Top setMenu={setMenu} menu={menu}/>
            {menu ?
               <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/board/:boardTitle" component={Board}/>
                <PrivateRoute path="/boarddetail/:number/:sn" component={BoardDetail}/>
                <PrivateRoute path="/team1" component={Team1}/>
                <PrivateRoute path="/team2_1" component={Team2_1}/>
                <PrivateRoute path="/team3_1" component={Team3_1}/>
                <PrivateRoute path="/team5" component={Team5}/>
                <PrivateRoute path="/team6_1" component={Team6_1}/>
                <PrivateRoute path="/team7" component={Team7}/>
                <PrivateRoute path="/Team8_1" component={Team8_1}/>
                <PrivateRoute path="/Manage1_1" component={Manage1_1}/>
                <PrivateRoute path="/Manage2_1" component={Manage2_1}/>
                <PrivateRoute path="/Manage2_2" component={Manage2_2}/>
                <PrivateRoute path="/Manage3_1" component={Manage3_1}/>
                <PrivateRoute path="/" component={Home}/>
              </Switch>
            :null}
            
         
          <Top/>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/board/:boardTitle" component={Board}/>
            <PrivateRoute path="/boarddetail/:number/:sn" component={BoardDetail}/>
            <PrivateRoute path="/team1" component={Team1}/>
            <PrivateRoute path="/team2_1" component={Team2_1}/>
            <PrivateRoute path="/team3_1" component={Team3_1}/>
            <PrivateRoute path="/team5" component={Team5}/>
            <PrivateRoute path="/team6_1" component={Team6_1}/>
            <PrivateRoute path="/team7" component={Team7}/>
            <PrivateRoute path="/Team8_1" component={Team8_1}/>
            <PrivateRoute path="/Manage1_1" component={Manage1_1}/>
            <PrivateRoute path="/Manage2_1" component={Manage2_1}/>
            <PrivateRoute path="/Manage2_2" component={Manage2_2}/>
            <PrivateRoute path="/Manage3_1" component={Manage3_1}/>
            <PrivateRoute path="/Manage5_1" component={Manage5_1}/>
            <PrivateRoute path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
  </ThemeProvider>
  );
}

export default App;
