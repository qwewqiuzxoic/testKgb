import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { pageMemoUrl } from '../../redux/actionFn/pageMemo';
import Menu from './Menu';
import TopCom from './topcomponents/TopCom';
import TopHome from './topcomponents/TopHome';
import TopLogin from './topcomponents/TopLogin';

function Top({setMenu,menu}) {
    const [menuState, setMenuState] = useState(false);
    const [url, setUrl]= useState(window.location.pathname);
    const [backUrl, setBackUrl] = useState(window.location.pathname);
    const clickMenu = () =>{
        setMenuState(!menuState);
        setMenu(!menu);
    }
    const clickMenu2 = () =>{
        history.push('/Team3_1');
    }
    const history = useHistory();
    const dispatch = useDispatch(); 
    useEffect(() => {
        history.listen((location) => { 
            dispatch(pageMemoUrl(location.pathname));
        }); 
        return history.listen((location) => { 
          setUrl(location.pathname);
       }) 
    },[history]) 
    useEffect(() => {
        window.scrollTo({ top: 0 });
        setUrl(window.location.pathname);
     },[window.location.pathname]) 
    
    if(menuState){
        return(
            <Menu clickMenu={clickMenu}/>
        )
    } else if(url.includes("Login") ||url.includes("login") ){
        return (
            <TopLogin clickMenu={clickMenu}/>
        )
    } else if(url.includes("board")){
        return (
            <TopCom clickMenu={clickMenu}/>
        )
    } else if(url === "/ProdDetail"){
        return (
            <TopCom clickMenu={clickMenu} bg='transparent'/>
        )
    }else if(url === "/"){
        return (
            <TopHome clickMenu={clickMenu}/>
        )
    }else {
        return(
            <TopCom clickMenu={clickMenu}/>
        )
    
    }
}

export default Top;