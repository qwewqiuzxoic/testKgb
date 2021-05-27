import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Menu from './Menu';
import TopCom from './topcomponents/TopCom';
import TopHome from './topcomponents/TopHome';
import TopLogin from './topcomponents/TopLogin';

function Top() {
    const [menuState, setMenuState] = useState(false);
    const [url, setUrl]= useState(window.location.pathname);
    const [backUrl, setBackUrl] = useState(window.location.pathname);
    const clickMenu = () =>{
        setMenuState(!menuState);
    }
   
    const history = useHistory() 
    useEffect(() => {
       return history.listen((location) => { 
          console.log( location) 
          setUrl(location.pathname);
       }) 
    },[history]) 
    if(menuState){
        return(
            <Menu clickMenu={clickMenu}/>
        )
    } else if(url === "/Login"){
        return (
            <TopLogin clickMenu={clickMenu}/>
        )
    } else if(url.includes("board")){
        return (
            <TopCom clickMenu={clickMenu}/>
        )
    }else if(url === "/"){
        return (
            <TopHome clickMenu={clickMenu}/>
        )
    }
  
}

export default Top;