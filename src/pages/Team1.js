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
  
    return year + "." + month + "." + day;
  }
function checkDay(date){
    console.log(getToday(date))
}

function Team1() {
    const [dateState, setDateState] = useState(new Date())
    const dispatch = useDispatch();
    const monthSc = useSelector(state=>state.monthScReducer.data);
    const daySc = useSelector(state=>state.dayScReducer.data);
    const changeDate = (e) => {
        setDateState(e)
        dispatch(getDaySc(getToday(e)));
  }
  const tday = getToday(new Date());
  const checkDay = ({ date, view }) =>{
      var day = getToday(date);
      var text = [];
      if(monthSc.length===0)
        return null;
      for(var i=0; monthSc.length>i; i++){
        if(monthSc[i].date === day){
          console.log(monthSc[i].id)
            if(monthSc[i].state === 0){
                text.push(<span>{monthSc[i].id}+계약</span>)
            }else if(monthSc[i].state === 1){
                text.push(<span>{monthSc[i].id}+완료</span>)
            }else if(monthSc[i].state === 2){
                text.push(<span>{monthSc[i].id}+대기</span>)
            }else if(monthSc[i].state === 3){
                text.push(<span>{monthSc[i].id}+??</span>)
            }
        }
      }
      return text;
  }
  useEffect(() => {
    dispatch(getMonthSc());
    dispatch(getDaySc(tday));
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
        <Labels></Labels>
        <ScheduleBox>
          <SelectedDay>
            <p>{moment(dateState).format('dddd DD, MMMM')}</p>
            <span>{moment(dateState).format('YYYY-MM-DD')===moment(new Date()).format('YYYY-MM-DD') ? '오늘' : ''}</span>
          </SelectedDay>
          <Schedules data={daySc}></Schedules>
        </ScheduleBox>
      </Wrapper>
    </div>
  );
}

export default Team1;