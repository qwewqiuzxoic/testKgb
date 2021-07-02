import React, {useEffect, useRef, useState}  from 'react';
import Head from '../components/commonStyle/Head';
import Button from '../components/commonStyle/Button'
import FloatingBtn from '../components/commonStyle/FloatingBtn'

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getAsList, getAsListConcat } from '../redux/thunkFn/as.thunk';
import Loading from '../components/commonStyle/Loading';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.bg};
    height: 100vh;
`;
const Tabs = styled.div`
    position:absolute;
    width:100%;
    ${Gutter()};
    ${FlexBox('left')};
    margin-top:-102px;
`;
const TabName = styled.div`
    width:48%;
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 18px;
    border-radius: 20px;
    cursor:pointer;
    text-align:center;
    &.selected{
      background : rgba(255, 255, 255, .3);
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;
const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 30px;
    padding-bottom: 56px;

`;
const ContentArea = styled.div`
  ${Gutter()};
  margin-top:-45px;
`

const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 20px #33333314;
    margin-bottom:15px;
    border-radius: 4px;
    ${Gutter('14px 18px')};
    &:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:${(props) => props.color}     
    }
`
const Row = styled.div`
    ${FlexBox()}
`
const RowLeft = styled.div`
    ${FlexBox('left')};
    margin-bottom: 15px;
`
const Team = styled.div`
    font-weight: bold;
    font-size:15px;
    margin-bottom:6px;
`
const AsLabel = styled.div`
    padding:5px 10px;
    background: #F3F7FB;
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: #82898E;
    border-radius:15px;
`
const Name = styled.div`
    margin-right:4px;
`
const Date = styled.div`
    ${ChangeFont(true, 200)};
    color: #ACB6BC;
`

const asLists = [
  {
    label:'현금영수증 요청',
    team: '서울1팀',
    name: '문미옥',
    date: '2021.02.01',
    state: false,
  },
  {
    label:'작업미숙',
    team: '서울1팀',
    name: '홍길동',
    date: '2021.02.01',
    state: true,
  },
  {
    label:'파손',
    team: '서울1팀',
    name: '홍길동',
    date: '2019.11.24',
    state: false,
  }
]

function Manege3_1() {
  const [tab,setTab]= useState(0);
  const [team,setTeam] = useState("Y");
  const dispatch = useDispatch();
  const pageCount = useRef(1);
  const {list,loading} = useSelector(state =>state.getAsListReducer);
  const tabChange = (num,team)=>{
    pageCount.current = 1;
    setTab(num);
    setTeam(team);
    dispatch(getAsList(team,1));

  }
  const infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      pageCount.current += 1;
      dispatch(getAsListConcat(team,pageCount.current));
    }
  };
  useEffect(() => {
    window.addEventListener('scroll',infiniteScroll);
    dispatch(getAsList("Y",1));
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, [])
  return (
    <>
      <Wrapper>
      <Head title="A/S현황" subtit="KGB의 A/S현황입니다" pb="120px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>tabChange(0,"Y")}>우리팀</TabName>
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>tabChange(1,"N")}>다른팀</TabName>
        </Tabs>
        <ContentArea>
          {
            loading && <Loading></Loading>
          }
        {list.map((item, index)=> (
          <Link to={team === "Y" ? `/boarddetail/${item.sn}/asy` : `/boarddetail/${item.sn}/asy`}>
            <Box key={index}>
                <Row>
                    <Team>[{item.teamname}]</Team>
                    <AsLabel>{item.astype}</AsLabel>
                </Row>
                <RowLeft>
                    <Name>{item.custname}</Name>
                    <Date>{item.daymove}</Date>
                </RowLeft>
                <Button bg={item.asresult === "처리완료" ? '#3397B9' : '#F3F7FB'} color={item.asresult === "처리완료"? '#ffffff' : '#ACB6BC'} text={item.asresult === "처리완료"? '처리완료' : '처리대기'}></Button>
             </Box>
             </Link>
        ))}
        </ContentArea>    
      </Wrapper>
    </>
  );
}

export default Manege3_1;