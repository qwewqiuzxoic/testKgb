import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
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
import Team9 from './pages/Team9';
import Team10 from './pages/Team10';
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";
import Manage1_1 from "./pages/Manage1_1";
import Manage2_1 from "./pages/Manage2_1";
import Manage2_2 from "./pages/Manage2_2";
import Manage3_1 from "./pages/Manage3_1";
import Manage5_1 from "./pages/Manage5_1";
import Manage6 from "./pages/Manage6";
import Manage9_1 from "./pages/Manage9_1";
import Manage10_1 from "./pages/Manage10_1";
import Manage11_1_4 from "./pages/Manage11_1_4";
import Manage12 from "./pages/Manage12";
import Manage13 from "./pages/Manage13";
import CommunityWrite from "./pages/CommunityWrite";
import Msg from "./pages/Msg";
import Bill from "./pages/Bill";
import SendMsg from "./pages/SendMsg";
import Edu8_9 from "./pages/Edu8_9";
import ProdLists from "./pages/ProdLists";
import ProdDetail from "./pages/ProdDetail";
import Cart from "./pages/Cart";
import ProdOrder from "./pages/ProdOrder";
import ComplimentBoard from "./pages/ComplimentBoard";
import Privacy from "./pages/Privacy";

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
import Manage11 from "./pages/Manage11";
import ToktokBoard from "./pages/ToktokBoard";
import FreeBoard from "./pages/FreeBoard";
import NoticeBoard from "./pages/NoticeBoard";
import EduNoticeBoard from "./pages/EduNoticeBoard";
import EduReferenceBoard from "./pages/EduReferenceBoard";
import ASTipBoard from "./pages/ASTipBoard";
import ReferenceBoard from "./pages/ReferenceBoard";
import WorkDayChangeBoard from "./pages/WorkDayChangeBoard";
import NotPage from "./pages/NotPage";


function App() {
  // axios.get("http://localhost:3001/memo/2").then(res=>{
  // })
  // axios.defaults.baseURL = 'https://misapp.kgb.co.kr/';

  const user = useSelector(state=>state.loginReducer.user);
  const userS = useSelector(state=>state.loginReducer);
  const open = useSelector(state=>state.ModalReducer.open);
  const [menu, setMenu] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div>
          {open?<CommunityWrite />:null}
          
          <Top setMenu={setMenu} menu={menu}/>
            {menu ?
               <Switch>
                <Route path="/login" component={Login} />
                {/* 톡톡 */}
                <PrivateRoute path="/board/1" component={ToktokBoard}/>
                {/* 칭찬 꾸중 */}
                <PrivateRoute path="/board/2" component={ComplimentBoard}/>
                <PrivateRoute path="/board/3" component={ComplimentBoard}/>
                {/* 자유 */}
                <PrivateRoute path="/board/4" component={FreeBoard}/>
                {/* 공지 */}
                <PrivateRoute path="/board/5" component={NoticeBoard}/> 
                {/* 교육공지 */}
                <PrivateRoute path="/board/6" component={EduNoticeBoard}/> 
                {/* 교육자료실 */}
                <PrivateRoute path="/board/7" component={EduReferenceBoard}/> 
                {/* as처리노하우 */}
                <PrivateRoute path="/board/8" component={ASTipBoard}/> 
                {/* 일반자료실 */}
                <PrivateRoute path="/board/9" component={ReferenceBoard}/> 
                {/* 작업일변경요청 */}
                <PrivateRoute path="/board/10" component={WorkDayChangeBoard}/> 
                <PrivateRoute path="/board/:boardTitle" component={Board}/>
                <PrivateRoute path="/app/boarddetail/:sn/:type" component={BoardDetail}/>
                <PrivateRoute path="/app/boarddetail/:sn" component={BoardDetail}/>
                <PrivateRoute path="/boarddetail/:sn/:type" component={BoardDetail}/>
                <PrivateRoute path="/boarddetail/:sn" component={BoardDetail}/>
                <PrivateRoute path="/team1/:page" component={Team1}/>
                <PrivateRoute path="/team2_1" component={Team2_1}/>
                <PrivateRoute path="/team3_1/:sn" component={Team3_1}/>
                <PrivateRoute path="/team3_1/" component={Team3_1}/>
                <PrivateRoute path="/team5" component={Team5}/>
                <PrivateRoute path="/team6_1" component={Team6_1}/>
                <PrivateRoute path="/team6_3" component={Team6_3}/>
                <PrivateRoute path="/team7" component={Team7}/>
                <PrivateRoute path="/Team8_1/:boardTitle" component={Team8_1}/>
                <PrivateRoute path="/Team9" component={Team9}/>
                <PrivateRoute path="/Team10" component={Team10}/>
                <PrivateRoute path="/Manage1_1" component={Manage1_1}/>
                <PrivateRoute path="/Manage2_1/:page" component={Manage2_1}/>
                <PrivateRoute path="/Manage2_2/:page/:sn" component={Manage2_2}/>
                <PrivateRoute path="/Manage3_1" component={Manage3_1}/>
                <PrivateRoute path="/Manage5_1/:page" component={Manage5_1}/>
                <PrivateRoute path="/Manage6" component={Manage6}/>
                <PrivateRoute path="/Manage9_1" component={Manage9_1}/>
                <PrivateRoute path="/Manage10_1" component={Manage10_1}/>
                <PrivateRoute path="/Manage11_1_4" component={Manage11_1_4}/>
                <PrivateRoute path="/Manage11/:sn" component={Manage11}/>
                <PrivateRoute path="/Manage11" component={Manage11}/>
                <PrivateRoute path="/Manage12" component={Manage12}/>
                <PrivateRoute path="/Manage13/:page" component={Manage13}/>
                <PrivateRoute path="/CommunityWrite" component={CommunityWrite}/>
                <PrivateRoute path="/SendMsg" component={SendMsg}/>
                <PrivateRoute path="/Msg" component={Msg}/>
                <PrivateRoute path="/Bill" component={Bill}/>
                <PrivateRoute path="/Edu8_9" component={Edu8_9}/>
                <PrivateRoute path="/ProdLists" component={ProdLists}/>
                <PrivateRoute path="/Cart" component={Cart}/>
                <PrivateRoute path="/ProdDetail/:sn/:goods/:price" component={ProdDetail}/>
                <PrivateRoute path="/ProdOrder" component={ProdOrder}/>
                <PrivateRoute path="/Privacy" component={Privacy}/>
                <PrivateRoute path="/NotPage" component={NotPage}/>
                <PrivateRoute path="/:id" component={Home} />
                <PrivateRoute path="/" component={Home}/>
                <PrivateRoute path="" component={Home}/>
              </Switch>
            :null}
        </div>
      </Router>
  </ThemeProvider>
  );
}

export default App;
