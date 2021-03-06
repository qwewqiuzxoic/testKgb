import React, {useEffect, useState}  from 'react';
import Calendar from 'react-calendar'
import moment from 'moment'
import H1 from '../components/commonStyle/H1'
import Labels from '../components/Team1/Labels'
import Schedules from '../components/Team1/Schedules'
import styled from 'styled-components';
import '../styles/Calender.css'
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getDaySc, getMonthSc, getSonDayList } from '../redux/thunkFn/schedule.thunk';


const Wrapper = styled.div`
    position:relative;
    margin: 0 auto;
    background: #F3F7FB;
`;
const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 30px 30px;
    padding-bottom: 25px;
`;
const ScheduleBox = styled.div`
  ${BottomBox()};
  ${Gutter('16px 20px')};

`
const SelectedDay = styled.div`
  ${FlexBox()}
  padding-bottom:10px;
  border-bottom:1px solid ${(props) => props.theme.colors.grey1};
  p{
    ${ChangeFont(true)};
    font-size:${(props) => props.theme.fontSizes.m};
    color: ${(props) => props.theme.colors.grey3};
  }
  span{
    color: #82898E;
    font-size:${(props) => props.theme.fontSizes.xs};
  }
`
function getToday(date){
    var date = date;
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  }

function checkDay(date){
}
function getMonth(){
  var today = new Date();
  var month = today.getMonth()+1;
  return month<10 ?"0"+month:month;
}
function getMonth2(date){
  var today = date;
  var month = today.getMonth()+1;
  return month<10 ?"0"+month:month;
}
function getYear(){
  var today = new Date();
  var year = today.getFullYear();
  return year;
}
function getYear2(date){
  var today = date;
  var year = today.getFullYear();
  return year;
}
function Team1({match}) {
    const page =  match.params.page;
    const [dateState, setDateState] = useState(new Date());
    const [selectDay, setSelectDay] = useState("");
    const dispatch = useDispatch();
    const monthSc = useSelector(state=>state.monthScReducer.list);
    const daySc = useSelector(state=>state.dayScReducer.list);
    const changeDate = (e) => {
        setDateState(e)
        setSelectDay(getToday(e))
        dispatch(getDaySc(getToday(e),page));
  }
  const tday = getToday(new Date());
  const checkDay = ({ date, view }) =>{
      var day = getToday(date);
      var text = [];
      if(monthSc.length===0)
        return null;
      for(var i=0; monthSc.length>i; i++){
        if(monthSc[i].daymove === day && page === "1"){
            if(monthSc[i].title.includes("|")){
              let msp = monthSc[i].title.split("|");
              for(var j=0; j<msp.length; j++){
                if(msp[j] === "??????" ){
                  text.push(<span className="state0"></span>)
                } else if(msp[j].includes("????????????") ){
                    text.push(<span className="state1"></span>)
                } else if(msp[j].includes("????????????") ){
                    text.push(<span className="state2"></span>)
                } else if(msp[j] === "?????????" ){
                    text.push(<span className="state3"></span>)
                } else if(msp[j].includes("????????????") ){
                    text.push(<span className="state4"></span>)
                } else if(msp[j].includes("??????") ){
                    text.push(<span className="state5"></span>)
                } else if(msp[j].includes("KGB??????") ){
                    text.push(<span className="state6"></span>)
                } else if(msp[j].includes("??????") ){
                    text.push(<span className="state7"></span>)
                }
              }
            } else {
              if(monthSc[i].title === "??????" ){
                text.push(<span className="state0"></span>)
              } else if(monthSc[i].title.includes("????????????") ){
                  text.push(<span className="state1"></span>)
              } else if(monthSc[i].title.includes("????????????") ){
                  text.push(<span className="state2"></span>)
              } else if(monthSc[i].title === "?????????" ){
                  text.push(<span className="state3"></span>)
              } else if(monthSc[i].title.includes("????????????") ){
                  text.push(<span className="state4"></span>)
              } else if(monthSc[i].title.includes("??????") ){
                  text.push(<span className="state5"></span>)
              } else if(monthSc[i].title.includes("KGB??????") ){
                  text.push(<span className="state6"></span>)
              } else if(monthSc[i].title.includes("??????") ){
                  text.push(<span className="state7"></span>)
              }
            }
            
        }else if(monthSc[i].dayedu === day && page === "2"){
          if(monthSc[i].edutype.includes("|")){
            let msp = monthSc[i].edutype.split("|");
            for(var j=0; j<msp.length; j++){
              if(msp[j].includes("??????") ){
                text.push(<span className="state0"></span>)
              } else if(msp[j].includes("??????") ){
                  text.push(<span className="state1"></span>)
              } else if(msp[j].includes("??????") ){
                  text.push(<span className="state2"></span>)
              } else if(msp[j].includes("??????") ){
                  text.push(<span className="state3"></span>)
              } else if(msp[j].includes("?????????") ){
                text.push(<span className="state4"></span>)
              }
            }
          } else{
            if(monthSc[i].edutype.includes("??????") ){
              text.push(<span className="state0"></span>)
            } else if(monthSc[i].edutype.includes("??????") ){
                text.push(<span className="state1"></span>)
            } else if(monthSc[i].edutype.includes("??????") ){
                text.push(<span className="state2"></span>)
            } else if(monthSc[i].edutype.includes("??????") ){
                text.push(<span className="state3"></span>)
            } else if(monthSc[i].edutype.includes("?????????") ){
              text.push(<span className="state4"></span>)
            }else{
              text.push(<span className="state5"></span>)
            }
          }
        }
      }
      return (
        <div className="state_wrapper">{text}</div>
      );
  }

  const sonDayList = useSelector(state => state.sonDayReducer.list).map(item=>item["daymove"])
  const month = getMonth();
  const year = getYear();
  const changeMonth = (v,e) =>{
    dispatch(getMonthSc(getYear2(v),getMonth2(v),page));
    if(page === "1"){
      dispatch(getSonDayList(getYear2(v),getMonth2(v)));
    }
  }
  //3397B9 
  const formatDate = (date) =>{
    date = <div style={sonDayList.includes(moment(date).format('YYYY-MM-DD'))?{color:"#ff9a9a"}:{}}>
      {moment(date).format('DD')}
    </div>
    
    return date;
  }
  useEffect(() => {
    dispatch(getMonthSc(year,month,page));
    dispatch(getDaySc(tday,page));
    if(page === "1"){
      dispatch(getSonDayList(year,month));
    }
    return () => {
      
    }
  }, [])
  return (
    <div>
      <Wrapper>
        <TopBg>
            <H1 title={ page === "1" ? "???????????? (??????)" : "????????????/??????" } subtit=""></H1>
            <Calendar tileContent={checkDay} value={dateState} data="aa" onClickMonth={(value,event)=>changeMonth(value,event)} onChange={changeDate} calendarType="US" locale="ko" formatDay={(locale, date) => formatDate(date)}/>
        </TopBg>
        <Labels isTaskPage={ page === "1" ? true : false }></Labels>
        <ScheduleBox>
          <SelectedDay>
            <p>{moment(dateState).format('YYYY-MM-DD')}</p>
            <span>{moment(dateState).format('YYYY-MM-DD')===moment(new Date()).format('YYYY-MM-DD') ? '??????' : ''}</span>
          </SelectedDay>
          <Schedules data={daySc} page={page} selectDay={selectDay}></Schedules>
        </ScheduleBox>
      </Wrapper>
    </div>
  );
}

export default Team1;