import React, {useState}  from 'react';
import Calendar from 'react-calendar'
import moment from 'moment'
import H1 from '../components/commonStyle/H1'
import Labels from '../components/Team1/Labels'
import Schedules from '../components/Team1/Schedules'

import styled from 'styled-components';
import '../styles/Calender.css'
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';


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

function Home() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
  }

  console.log(moment().format())
  return (
    <>
      <Wrapper>
        <TopBg>
            <H1 title="작업일정 (월별)" subtit=""></H1>
            <Calendar value={dateState} onChange={changeDate} calendarType="US" locale="EN"/>
        </TopBg>
        <Labels></Labels>
        <ScheduleBox>
          <SelectedDay>
            <p>{moment(dateState).format('dddd DD, MMMM')}</p>
            <span>{moment(dateState).format('YYYY-MM-DD')===moment(new Date()).format('YYYY-MM-DD') ? '오늘' : ''}</span>
          </SelectedDay>
          <Schedules></Schedules>
        </ScheduleBox>
      </Wrapper>
    </>
  );
}

export default Home;