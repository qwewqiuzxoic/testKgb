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
import { getDaySc, getMonthSc } from '../redux/thunkFn/schedule.thunk';


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
function getYear(){
  var today = new Date();
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
            if(monthSc[i].title.includes("계약") ){
                text.push(<span className="state0"></span>)
            }
            if(monthSc[i].title.includes("지명오더") ){
                text.push(<span className="state1"></span>)
            }
            if(monthSc[i].title.includes("견적의뢰") ){
                text.push(<span className="state2"></span>)
            }
            if(monthSc[i].title.includes("미계약") ){
                text.push(<span className="state3"></span>)
            }
            if(monthSc[i].title.includes("중복견적") ){
                text.push(<span className="state4"></span>)
            }
            if(monthSc[i].title.includes("취소") ){
                text.push(<span className="state5"></span>)
            }
            if(monthSc[i].title.includes("KGB토스") ){
                text.push(<span className="state6"></span>)
            }
            if(monthSc[i].title.includes("기타") ){
                text.push(<span className="state7"></span>)
            }
        }else if(monthSc[i].dayedu === day && page === "2"){
          if(monthSc[i].edutype.includes("맞춤") ){
            text.push(<span className="state0"></span>)
          }
          if(monthSc[i].edutype.includes("정기") ){
              text.push(<span className="state1"></span>)
          }
          if(monthSc[i].edutype.includes("보충") ){
              text.push(<span className="state2"></span>)
          }
          if(monthSc[i].edutype.includes("특별") ){
              text.push(<span className="state3"></span>)
          }
          if(monthSc[i].edutype.includes("미교육") ){
            text.push(<span className="state4"></span>)
        }
        }
      }
      return (
        <div className="state_wrapper">{text}</div>
      );
  }
  const month = getMonth();
  const year = getYear();
  useEffect(() => {
    dispatch(getMonthSc(year,month,page));
    dispatch(getDaySc(tday,page));
    return () => {
      
    }
  }, [])
  return (
    <div>
      <Wrapper>
        <TopBg>
            <H1 title="작업일정 (월별)" subtit=""></H1>
            <Calendar tileContent={checkDay} value={dateState} data="aa" onChange={changeDate} calendarType="US" locale="EN"/>
        </TopBg>
        <Labels isTaskPage={ page === "1" ? true : false }></Labels>
        <ScheduleBox>
          <SelectedDay>
            <p>{moment(dateState).format('dddd DD, MMMM')}</p>
            <span>{moment(dateState).format('YYYY-MM-DD')===moment(new Date()).format('YYYY-MM-DD') ? '오늘' : ''}</span>
          </SelectedDay>
          <Schedules data={daySc} page={page} selectDay={selectDay}></Schedules>
        </ScheduleBox>
      </Wrapper>
    </div>
  );
}

export default Team1;